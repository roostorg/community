# Software Development Practices for ROOST Projects

Good software development lifecycle (SDLC) is an endless journey, but it's hard to make progress if you don't know where you're going. This document is intended to be a checklist for ROOST projects to work through as they mature. 

_**Document status:** Working draft. Suggested categories, checks, and priority below._

## Quality vision
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Intention statement | Sets the ethos for what kind of software we're building and for who. | P0 |
## Versioning
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Versioning| ROOST projects are using semantic versioning | P1 |
| Branching | Are there different branches for stable and development? | P0 |
## Release cadence
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Initial Process | * Identify big features on 12 month timeline. These are _substantial_ changes (think blog headline). <br> * Estimate delivery time in quarters of big features and group features with similar timelines together. Bundle breaking changes when possible. <br> * Add minor features/changes to timeline. Bundle together for as consistent cadence as possible. <br> * Patch versions can be cut at any time as needed for bug fixes. | P0 |
## Testing practices
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Tests for all commits | 1) Unit tests <br> 2) Lint checks <br> 3) Integration tests <br> 4) Build checks | P0 |
| Release tests | End-to-end testing for Major and Minor releases | P0 |
## Dependency handling
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Version alerts | Automated alerts and process for updating dependencies | P0|
| Vulnerability alerts | Automated alerts and process for updating dependencies | P0|
| License scanning | Ensuring compatible licenses for dependencies added via CI | P1 |
| Vendoring policy | Do we ever vendor deps? | P2 |
## Security in CI/CD
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Fuzzing | At what milestones? | P2 |
| Code analysis | CodeQL, secret and token scanning, etc | P1 |
| Binary artifact detection | Flagging checked in binaries | P2 |
| Commit-time vuln detection | Flags for packages with known CVEs | P2 |
## Release security
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Signed releases |  | P3 |
| Security report intake | See .github/security.md | P0 |
| Incident response process | See OpenSSF process | P1 |
## PR triage and code review
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Issue labeling | How can this be automated or less burdensome? | P2 |
| PR labeling| How can this be automated or less burdensome, and identify priority? | P2 |
| Code review guidance | What should reviewers pay attention to? | P1 |
## Support
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Breaking changes policy | Following semver, breaking changes go in Major versions. This policy is about when it's appropriate to introduce a breaking change and how it should be communicated to users (timeline, expectations, support) | P1 | 
| Long term support (LTS) policy | How many versions back does the community support? | P3 -- address later |
## Deprecation
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Deprecation process | | P3 -- address when needed |
