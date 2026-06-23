# PRD 001: Data Abstraction Layer

## Problem statement

In content moderation, more context can lead to better decisions, whether those decisions are taken by a human or an AI agent. Today, a Coop reviewer can only see limited data (whatever is pushed in). Accessing anything beyond that -- like an account's history or other posts -- has to be looked up in other tools, or populated using the Partial Items endpoint (which cannot populate information about relationships). If an org decides that some new field would be useful for moderation, then it requires engineering lift to get that data into each T&S tool.

In other words, getting richer context requires N custom integrations, because nothing abstracts over an org's objects, relationships, and signals.

**Success would mean**: an org implements that integration *once* -- declaring its ontology/object graph and exposing a query/enrichment API -- and every consumer reuses it, whether it's a UI for humans in Coop, agentic review, Osprey, or whatever comes next.

## Background

The current [roadmap](https://github.com/roostorg/community/blob/main/roadmap.md#data-abstraction-layer) describes two components needed to prepare ROOST's projects for AI-powered features. One of these is a data abstraction layer (DAL) that lets both Coop and Osprey understand org-specific data models. This PRD focuses on the DAL and a Coop integration. There are a few more initial notes on this [here](https://github.com/orgs/roostorg/discussions/61#discussioncomment-16495095).

Today, Coop lets orgs configure its data model via Item Types. There are three kinds of Item:
- Content (any piece of user-generated content)
- Thread (an ordered collection of Content)
- User (an account or profile on the org's platform)

This is flexible, but has limitations. You cannot easily model that e.g. one user follows another, or that a comment is a reply to a specific other comment in the same Thread.

Coop users push Items into Coop via our API, and items may then be shown in the Manual Review Tool (MRT). Items can be enriched at review time via the Partial Items feature -- the user can implement an API that returns further details about Items. This means that the latest version of an Item can be fetched on-demand.

## Goals

A unified API to query for more information benefits both human, automated, and AI-driven review. We want to solidify & generalize the good ideas in Coop's Item Types datamodel and Partial Items API.

The concrete story we are initially targeting is:

1. An org implements the graph API, deployed as a new DAL service.
    - We can write an agent skill to make this process smoother.
2. In Coop's Manual Review Tool, if this DAL is configured, the Partial Items API is replaced with a query to the DAL.

This new DAL service will not be required to run Coop today, though that may change in the future. But for now, we will deprecate the Partial Items API and replace it with the DAL. Any org that uses Partial Items will have to migrate.

## Non-goals

- We are not building a graph database.
- We are also not building a new GraphQL library -- we will re-use an existing one.
- The DAL will not support unbounded multi-hop graph traversal, or advanced graph queries like community detection.
- The DAL does not persist data long-term (beyond, perhaps, caching). Data continues to live in the org's source systems.
- The Safety Decision Taxonomy from ROOST's roadmap is not included in this PRD -- though the DAL may be a sensible place to centralize this, too.

## What

An org running Coop decides that they want to show more data in the reviewer UI. This is the flow I envision:

1. A developer clones a Roost template repo, e.g. `roostorg/data-abstraction-layer-template`.
2. Inside this template, they first define their ontology (what object types exist in their org, what properties do they have, and how do they relate to each other).
3. Then, they write e.g. Python code to implement resolvers that serve this ontology as a GraphQL API.
    - This might only involve reading from a single database, or it could mean calling out to various data warehouses, APIs, and more. The goal is to unify everything into one API.
    - The template provides the scaffolding to do this with a great DevX, providing the library, test setup, etc. to make the process easy.

For steps 2. and 3., an agent skill provides an easy walkthrough that does a lot of the heavy lifting. The developer's job then primarily becomes thinking through how to map the org's source system(s) together into a unified API.

An example ontology for a simple blogging platform might look like:

> Object types
> - User
>     - ID (UUID)
>     - email (string)
>     - username (string)
>     - created_at (datetime)
> - BlogPost
>     - ID (UUID)
>     - content (string)
>     - created_at (datetime)
> - Comment
>     - ID (UUID)
>     - content (string)
>     - created_at (datetime)
>
> Relationships
> - (User)-[:follows]->(User)
> - (User)-[:author_of]->(BlogPost)
> - (User)-[:author_of]->(Comment)
> - (Comment)-[:reply_to]->(BlogPost)

An example query to fetch a user, their number of followers, and their 10 most recent blog posts might look like:

```gql
query {
  user(id: "019ef42a-6531-7039-8a8b-096d1ee2db64") {
    email
    username
    authorOf {
      blogPosts(orderBy: [{ created_at: DESC }], first: 10) {
        edges {
          node {
            content
            created_at
          }
        }
      }
    }
    # The schema auto-generates reverse relationships, too
    reverseFollows {
      user {
        totalCount
      }
    }
  }
}
```

In brief: a new module, that Coop (and eventually perhaps also Osprey) both depend on. It exposes a read-only GraphQL API that matches an organization's ontology. The user then writes GraphQL resolvers that translate incoming GraphQL requests into reads against their source systems. It is completely agnostic to these source systems -- could be data warehouses, operational DBs, or further API calls to other services. The DAL centralizes reads of all an organization's data into a single well-defined GraphQL API.

### Why GraphQL?

GraphQL is a near-perfect fit for this use case for several reasons.

For one, thinking in graphs is both common & intuitive for investigative use cases. GraphQL puts this first. It's also an existing standard which means that humans & LLMs are familiar with it, and there's a large ecosystem.

GraphQL also natively supports [introspection](https://graphql.org/learn/introspection/) which lets callers dynamically learn the schema (i.e. the ontology) of a given API. This is great since this will vary depending on the org that's implementing the DAL. We may not need to build a custom API to share the ontology between services.

Finally, writing a GraphQL API that calls out to one or more source systems is very accessible. Developers write [resolvers](https://graphql.org/learn/execution/) for objects or fields, and the GraphQL library automatically handles running these to serve an incoming GraphQL query.

Using GraphQL for querying does not preclude MCP; they are different layers. It's still possible to build a GraphQL-over-MCP transport for LLM agents in the future if we wish, which may be useful for auth purposes.

The main alternatives would be REST, but this loses the graph-native shape and introspection, or more advanced graph query languages like [Cypher](https://en.wikipedia.org/wiki/Cypher_(query_language)), which is a lot more advanced -- more comparable to SQL than to REST, for example.

## Open questions

1. How should this interact with Coop's existing Item Types concept? Can we replace that entirely to avoid duplication?
2. Where will agentic review live -- in Coop's manual review tool, in Osprey's rules engine, or in some new service?
3. How important is ingestion-time enrichment in Coop? Do we actually need it in v1?

## Risks

1. Solidifying an ontology and writing resolvers is an additional engineering lift that orgs may be reluctant to take on.
    - This means that we need to make it worth it.
2. If the DAL is optional infrastructure, there is a risk that orgs will just not use it.
    - Again, we have to make it worth it via product features.
3. GraphQL makes it easy to create N+1s.
    - We will have to solve this the standard way using dataloaders, see e.g. [here](https://www.apollographql.com/tutorials/dataloaders-dgs/03-data-loaders-under-the-hood) and [here](https://strawberry.rocks/docs/guides/dataloaders).
4. GraphQL queries can get expensive, e.g. if they write underlying queries with a lot of expensive joins.
    - We can mitigate this with query complexity/size limits, and great observability out of the box.
5. Source systems may be slow to respond with data.
    - This can be a real problem, especially in high-volume use cases!
    - We cannot control these source systems so the best thing we can do here is around observability, so it's easy to see *what* is slow.
6. The DAL may overload source systems if used heavily for T&S.
    - This is an inherent risk. Orgs will have to manage this, and again we can ensure that it's easy to understand which queries the DAL is executing.
7. Organizations may be reluctant to build APIs that allow broad access to all or most data in their platform, for security reasons.
    - We can mitigate this via some combination of audit logging, solid authentication + security fundamentals, and (in the future) field-level authorization.

## Scope

- The API will be read-only.
- We will re-use existing libraries rather than publishing something entirely new. This means that the main work will be building the wiring and a great template to make it easy for orgs to build their own DAL.
- Clients will authenticate via API bearer tokens. An API token gives access to the entire API.
- Observability: sensible logs, and importantly, OTel-compatible traces.

## Future work

There are many things we could do. To keep things simple, this initial PRD is tightly scoped. Future work can/should include:

- Integration with Osprey for ingest-time enrichment
- Ingest-time enrichment for Coop, i.e. fetching more data when an item is first sent in, before running rules
- Agentic moderators that can actually explore data via the DAL
- Caching queries for performance (with good headers so clients know if the response was cached)
- Field-level authorization.


## Definitions

- **GraphQL**: The Graph Query Language, an API format originally built by Meta, and now used widely.
- **Ontology**: Can also be called a schema. A description of the object types that exist, what properties they have, and the possible relationships between them.
