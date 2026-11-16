# Coop Roadmap

[Coop] is ROOST's flexible review tool for labeling multiple content formats (content and accounts), with queue orchestration, audit trails, configurable actions, and reviewer wellness features. It includes a complete CSAM detection and reporting system. Coop originated as ROOST-acquired IP from [Cove](https://getcove.com/) and has since grown into a mature open source project that stands on its own.

This roadmap covers Coop's planned work. For the strategic context behind these priorities, see the [overall ROOST roadmap](../roadmap.md).

## Now {.badge-now}

* [**Adopter Papercuts**](https://github.com/roostorg/coop/milestone/7)**:** Remove high-frequency friction across moderation screens by exposing recent decisions higher in jobs, surfacing contextual actions, enabling NCMEC queue safeguards, and improving video wellness blur behaviors.

* [**Moderation Operations**](https://github.com/roostorg/coop/milestone/8)**:** Provide queue visibility, configurable claim timeouts with SLA state warnings, escalation and reassignment flows, role-based access control, CSV bulk actioning, and durable clue notes.

## Next {.badge-next}

* [**Moderation Quality Assurance**](https://github.com/roostorg/coop/milestone/14)**:** Implement secondary reviews, golden sets, automated action sampling, and policy-relevant action-rate context for reviewers without creating separate workflow silos.

* [**NCMEC Reporting Completeness**](https://github.com/roostorg/coop/milestone/13)**:** Ensure Coop produces complete, standards-aligned NCMEC reports and can support follow-up reports without losing prior-report relationships. Validate the full workflow continuously so required data or API compatibility cannot silently regress.

* [**HMA Enhancements**](https://github.com/roostorg/coop/milestone/9)**:** Turn Coop's existing HMA integration into a complete, configurable hash-bank workflow. Users should be able to manage bank content, write reviewed media to verified destinations, capture source-specific false positives, tune matching behavior, and operate the integration with clear health and permission boundaries.

* [**Simplified Deployment & Data Portability**](https://github.com/roostorg/coop/milestone/10)**:** Introduce domain-specific interfaces to enable an optional Postgres-only backend path alongside existing Scylla, ClickHouse, and Redis datastores.

* [**Platform Reliability & Observability**](https://github.com/roostorg/coop/milestone/11)**:** Eliminate memory growth leaks, surface webhook delivery diagnostics, introduce outbox pattern durability, and return graceful database outage responses.

* [**Self-Hosted Deployment & Upgrade Experience**](https://github.com/roostorg/coop/milestone/16)**:** Single-process API/client bundling, standard SMTP email drivers, update notifications, proxy setup documentation, and release checklists.

## Later {.badge-later}

* [**Policy Change Safety & Portability**](https://github.com/roostorg/coop/milestone/15)**:** Build production-ready backtesting, explicit rule evaluation ordering, typed signal chains, and validated policy import/export functionality across environments.

[Coop]: https://github.com/roostorg/coop
