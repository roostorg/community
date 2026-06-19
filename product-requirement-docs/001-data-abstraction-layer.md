# PRD 001: Data Abstraction Layer

## Problem statement

T&S at scale has often been outsourced to BPOs. Increasingly, it is outsourced to AI. ROOST is preparing to build tooling to support AI-powered safety.

More context can lead to better content moderation, whether it's done by a human or an AI agent. Today, a Coop reviewer can only see limited data (whatever is pushed in). Accessing anything beyond that -- like an account's history or other posts -- has to be looked up in other tools, or populated using the Partial Items endpoint (which cannot populate information about relationships). Getting richer context therefore requires custom integration, and right now that work needs to be redone for each T&S tool, because nothing abstracts over an org's objects, relationships, and signals.

**Success would mean**: an org implements that integration *once* -- declaring its ontology/object graph and exposing a query/enrichment contract -- and every consumer reuses it, whether it's a UI for humans in Coop, agentic review, Osprey, or whatever comes next.

## Background

The current [roadmap](https://github.com/roostorg/community/blob/main/roadmap.md#data-abstraction-layer) describes two foundational components needed to prepare ROOST's projects for AI-powered features. One of these is a data abstraction layer (DAL) that lets both tools understand org-specific data models. This document focuses on the DAL and a Coop integration. There are a few more initial notes on this [here](https://github.com/orgs/roostorg/discussions/61#discussioncomment-16495095).

Today, Coop lets orgs configure its data model via Item Types. There are three kinds of Item:
- Content (any piece of user-generated content)
- Thread (an ordered collection of Content)
- User (an account or profile on the org's platform)

This is flexible, but has limitations. You cannot easily model that e.g. one user follows another, or that a comment is a reply to a specific other comment in the same Thread.

Coop users push Items into Coop via our API, and items may then be shown in the Manual Review Tool (MRT). Items can be enriched at review time via the Partial Items feature -- the user can implement an API that returns further details about Items. This means that the latest version of an Item can be fetched on-demand.

## Goals

The roadmap frames the Data Abstraction Layer as being a prerequisite for agentic T&S tooling, but I do not think this is actually a strict necessity. You could certainly build AI content moderation into Coop as it exists today. However, a unified API to query for more information is a very good idea that benefits both human *and* AI-driven review.

We want to solidify & generalize the good ideas in Coop's Item Types datamodel and Partial Items API.

The concrete story we are initially targeting is:

1. An org implements the graph API, deployed as a new DAL service.
    - We can write an agent skill to make this process smoother.
2. In Coop's Manual Review Tool, if this DAL is configured, the Partial Items API is replaced with a query to the DAL.
3. This next part is up to us: do we want to focus on agentic review? Or enriching the data that is visible to human reviewers in Coop's UI?

## Non-goals

- We are not building a graph database.
- The DAL will not support arbitrary multi-hop graph traversal, or advanced graph queries like community detection.
- The DAL does not persist data long-term (beyond, perhaps, caching). Data continues to live in the org's source systems.
- The Safety Decision Taxonomy from ROOST's roadmap is not included in this PRD -- though the DAL may be a sensible place to centralize this, too.

## What

In brief: a new module, that Coop (and eventually perhaps also Osprey) both depend on. It exposes a read-only GraphQL API that matches an organization's ontology. The user then writes GraphQL resolvers that translate incoming GraphQL requests into reads against their source systems. It is completely agnostic to these source systems -- could be data warehouses, operational DBs, or further API calls to other services. The DAL centralizes reads of all an organization's data into a single well-defined GraphQL API.

## Open questions

1. Where will agentic review live -- in Coop's manual review tool, in Osprey's rules engine, or in some new service?

## Risks

1. Solidifying an ontology and writing resolvers is an additional engineering lift that orgs may be reluctant to take on.

## Scope

## Definitions

- **Ontology**: Can also be called a schema. A description of the object types that exist, what properties they have, and the possible relationships between them.
