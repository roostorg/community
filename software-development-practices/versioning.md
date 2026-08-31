# Versioning

ROOST projects use [Semantic Versioning (SemVer)](https://semver.org/) following the MAJOR.MINOR.PATCH version format. In brief:

- **Patch releases** (x.y.**Z**): backward-compatible fixes or small improvements
- **Minor releases** (x.**Y**.z): new functionality or substantial improvements; changes to public API are backward-compatible
- **Major releases** (**X**.y.z): backward-incompatible changes to public API, or major feature or user interface overhauls

Git tags for releases must be fully SemVer-compliant, including all three major.minor.patch versions; for example:

- ✅ **Compliant**: `1.0.0`, `2.3.4` `5.6.0`
- ❌ **Non-compliant**: `1`, `2.0`, `3.0.04`

## Communicating about versions

For consistency across projects, documentation, and other communications, we follow these guidelines when referring to versioned releases of ROOST projects (assuming a project called “Foo”):

### Pre-release

Before a stable release, a project version may be referred to as **Foo v0**; for example, when a project's source code is available but it is not ready to be used in production. We use the lower-case `v` in `v0` since “Foo 0” or “Foo 0.0” look strange, and to emphasize the technical pre-release nature. There should not be a decimal or space between the `v` and `0`.

We may also simply use the project name, depending on context; e.g. “ROOST announces the Foo project.” Avoid using the term “release” unqualified for projects in this stage, as it can be misinterpreted to mean a stable, production-ready release; instead, focus on communicating the “open sourcing,” “source code release,” “making the source code available,” or that it is a “project” to draw attention to the fact that it is not yet a _released product_.

Pre-releases should still use SemVer-compliant versions for git tags, but with `0.y.z`; i.e. `0.0.0`, `0.0.1`, etc.

### Major/minor release

Starting with a project's first major release, a project version may be referred to using its MAJOR.MINOR version, e.g. **Foo 1.0**, **Foo 1.1**, or **Foo 2.0**. The patch (x.y.**Z**) version should be omitted unless it's critically relevant, e.g. when referring to a security release or in the release's own release notes.

Released projects still must use full SemVer-compliant versions for git tags, e.g. `1.0.0`, `1.1.0`, `2.0.0`, etc.
