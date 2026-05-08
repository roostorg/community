# API Specification Practices for ROOST Projects

This document outlines minimum expectations for API specification across ROOST projects.

## API documentation standard
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Specification format | ROOST projects with HTTP/REST APIs use the [OpenAPI Specification (OAS)](https://www.openapis.org/). Projects using gRPC, GraphQL, or event-driven APIs should use their respective native spec formats (Protocol Buffers, GraphQL SDL, AsyncAPI) | P0 |
| Spec location | ROOST convention: spec files live in the repo root or a `docs/` directory and are referenced in the README | P0 |
| Spec accuracy | ROOST convention: the spec reflects the current state of the API. Whether the project takes a design-first (spec is source of truth) or code-first (spec is generated from code) approach, spec updates are required as part of any PR that changes API surface | P0 |

## Spec validation
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Linting in CI | OpenAPI spec is validated in CI (e.g. Spectral, Redocly CLI) | P1 |
| Breaking change detection | CI flags breaking API changes (removed endpoints, changed response shapes). More relevant once projects have downstream consumers depending on API stability (e.g. Osprey post-1.0). Tools: oasdiff, openapi-diff | P2 |

## Documentation generation
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Generated docs | Human-readable API docs are generated from the spec (e.g. Redoc, Swagger UI) | P2 |
| Hosted docs | Generated docs are published and linked from the README | P2 |

## Versioning
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| API versioning strategy | How are API versions communicated? (URL path, header, etc.) | P1 |
| Deprecation notices | Deprecated endpoints are marked in the spec before removal | P1 |

## Idempotency
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Idempotency for mutating operations | Document which `POST`, `PUT`, and `PATCH` endpoints are idempotent. Non-idempotent `POST` endpoints should support an idempotency key to allow safe client retries | P1 |

## Non-HTTP APIs
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Library/SDK docs | Projects that expose a library or SDK document their public API surface (e.g. Go doc comments, TypeDoc) | P1 |
| CLI documentation | Projects with a CLI document commands, flags, and usage | P1 |