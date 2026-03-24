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
| Branching | To start, ROOST projects should use `main` as the branch for development, and use the GitHub Release feature (via semver-tagged commits) to denote releases. This will need to be revisited as projects mature and have to handle backporting patches, but the ethos is "minimum viable complexity." | P0 |
## Release cadence
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Initial Process | * Identify big features on 12 month timeline. These are _substantial_ changes (think blog headline). <br> * Estimate delivery time in quarters of big features and group features with similar timelines together. Bundle breaking changes when possible. <br> * Add minor features/changes to timeline. Bundle together for as consistent cadence as possible. <br> * Patch versions can be cut at any time as needed for bug fixes. | P0 |
## Project conventions
| Item | Description/Notes | Priority |
| ----- | ---------------- | --------- |
| README.md | All projects/repos must have a README file in markdown format. At minimum, the README must have a description of what the project does, information for how to start using it (can link to longer getting started documentation), and links to the CONTRIBUTING.md and Code of Conduct. | P0 |
| AGENTS.md | Add a markdown file to guide AI coding assistants following the open [AGENTS.md format](https://github.com/agentsmd/agents.md). See [ROOST AGENTS.md practices](AGENTS.md) for detailed guidance | P1 |
| API format | Projects should follow the [TBD] API description format | P1 |
| CHANGELOG.md | Projects must have a CHANGELOG.md file, following the [Keep A Changelog format](https://keepachangelog.com/en/1.1.0/) | P0 |
| Contributor guidance | All projects must have a CONTRIBUTING.md file at minimum. By default this is inherited from ROOST's .github, but can be updated at the per-project level. Additional documentation for first time contributors describing project conventions and code quality expectations is recommended. | P0 |
| CODE_OF_CONDUCT.md | All projects must have a CODE_OF_CONDUCT.md with the ROOST Code of Conduct. This is automatically inherited from ROOST's .github and should not be changed. | P0 | 
## Testing practices
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Tests for all commits | 1) Unit tests <br> 2) Lint checks <br> 3) Integration tests <br> 4) Build checks | P0 |
| Release tests | End-to-end testing for Major and Minor releases | P0 |
| CI checks | Determine the relevant CI checks for the project and enforce that all CI checks pass | P0 |
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
| Fuzzing | Determine what surfaces or characteristics of surfaces should be fuzzed and at what cadence (including planning for triage and remediation at that cadence) | P2 |
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
| Code review guidance | Project documentation should include a section on how to help with code review, and highlight any particular areas code reviewers should pay attention to | P1 |
## Support
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Breaking changes policy | Following semver, breaking changes go in Major versions. This policy is about when it's appropriate to introduce a breaking change and how it should be communicated to users (timeline, expectations, support) | P1 | 
| Long term support (LTS) policy | How many versions back does the community support? | P3 -- address later |
## Deprecation
| Item | Description/Notes | Priority |
| ------- | --------- | -------- |
| Deprecation process | | P3 -- address when needed |
