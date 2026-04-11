# Agent Instructions Practices for ROOST Projects


## Part 1: The AGENTS.md Standard

[AGENTS.md](https://github.com/agentsmd/agents.md) is an open format for guiding AI coding agents, governed by the [Agentic AI Foundation](https://aaif.io) under the Linux Foundation. It is supported by GitHub Copilot, OpenAI Codex, Cursor, Gemini/Jules, Claude Code, and others.

Where `README.md` is for humans, `AGENTS.md` is for machines.

### File setup
- Place an `AGENTS.md` at the repo root alongside `README.md`.
- Create symlinks for tools that use their own filenames: `ln -s AGENTS.md CLAUDE.md` and `ln -s AGENTS.md .github/copilot-instructions.md`.
- For monorepos, place additional `AGENTS.md` files in subdirectories. Agents read the nearest file in the directory tree; the closest one takes precedence. Symlink them as well. 

### Recommended content
The standard is schema-free using plain Markdown and any headings you like. The community consensus is to cover:
- Setup and build commands
- Testing instructions
- Code style guidelines
- Project structure
- Security considerations
- PR and commit guidelines

### Principles from the standard
- Lead with commands, not explanations.
- Treat `AGENTS.md` as living documentation. Update it as conventions change.
- The nearest `AGENTS.md` to the edited file wins; explicit user prompts override everything.

### Related: Agent Skills
The `.agents/skills/` directory is an adjacent open standard for packaging specialized agent capabilities (scripts, templates, reference docs) as reusable SKILL.md files. ROOST may adopt skills for specialized workflows in the future; this is out of scope for now.

---

## Part 2: ROOST-Specific Requirements

ROOST repos must include an `AGENTS.md` that covers the full development lifecycle. This ensures contributors' agents produce work that meets project standards from the first attempt.

### Minimum content by SDLC area

| Area | What to include | Priority |
| ------- | --------- | -------- |
| Architecture | Key directories, module boundaries, where new code belongs. Point to reference files, flag legacy files to avoid | P0 |
| Design | API conventions, data model conventions | P1 |
| Build and run | Exact commands to install deps, build, and start the project | P0 |
| Testing | Commands for unit tests, integration tests, lint, type checks. Both single-file and full-suite | P0 |
| CI | Which CI checks run on PRs and how to run them locally before pushing | P0 |
| Security | No secrets in code, no disabling lint rules, check new packages for CVEs. Link to `SECURITY.md` if present | P0 |
| Code review | PR expectations: small diffs, descriptive titles, test coverage, changelog entries if applicable | P0 |
| Code style | Language version, framework version. Reference linter/formatter config | P1 |
| CD | Release process, semver tagging convention, environments. What agents must not touch (e.g. production deploy scripts, release signing) | P1 |
| Dependencies | Rules for adding new deps (license, review process). What requires human approval | P1 |

### ROOST guiding principles

| Item | Description/Notes |
| ------- | --------- |
| Commands over prose | Agents act on commands. Prefer `npm run test -- path/to/file` over descriptive paragraphs |
| Same review bar | PRs authored with agent assistance are held to the same standards as any other PR |
| Boundaries with alternatives | When stating a restriction, always provide the alternative path |
| Iterate over time | Start minimal. When you give agents the same instruction twice, add it to the file |
| Contributors update AGENTS.md | When a contributor finds a gap, they are encouraged to update `AGENTS.md` as part of their PR |

### Human-approval-required actions

Agents must stop and get explicit human approval before:

- Changing license headers, copyright notices, or any legal text
- Modifying release, signing, or deploy workflows (CI/CD pipeline files, Makefiles, etc.)
- Adding, removing, or upgrading any library or package (including transitive dependencies) — confirm licenses are compatible
