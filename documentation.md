# Documentation Guidelines

To make it easier to contribute to and maintain documentation across ROOST projects, we have a few preferences and defaults. ROOST projects should try to follow these documentation guidelines whenever possible.

## Markdown

We use [Markdown](https://en.wikipedia.org/wiki/Markdown) for documentation because it is human-readable in plain text, natively supported in the GitHub web UI, and widely used across open source projects.

Specifically, we use **GitHub-flavored Markdown** ([guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax), [spec](https://github.github.com/gfm/)) to take advantage of the extra formatting capabilities on GitHub and the web.

## README

Every project must have a `README.md` file at the root of its repository. This critical documentation should introduce and "market" the project to contributors and potential adopters. A README should be concise and include:

1. A brief description of the project
2. Who the project is for
3. What problems it solves
4. Screenshots to aid in understanding what it is

For simpler projects, the README can also include a quick "getting started" guide to get it running locally. Longer-form getting started guides, background information, architecture information, etc. should live in the `/docs` folder and may be linked to from the README for those who want to explore more.

## In-repo `/docs` folder

Beyond the README, project documentation should live in a `docs/` folder directly within the project's repository. This enables consistent automated tooling for building and deploying web-based documentation sites while also ensuring the docs are always accessible alongside a local checkout of the code itself, as well as in the GitHub web UI.

Project maintainers are free to organize the documentation in a way that makes sense, but may want to include:

- Step-by-step guide for running the project locally
- Developer environment requirements, including any hardware or OS constraints
- Architecture details
- User documentation, including screenshots and how-to guides

## Docs website

Projects should generate a web version of the documentation and deploy with GitHub Pages. By default, this will be available at **roostorg.github.io/`<project>`** where `<project>` is the GitHub repository name.

<!-- TODO: mention mdBook if we're happy with it! -->

## Other forms of documentation

### Issue and pull request templates

GitHub [issue and pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) can be set up in each project to ensure issues and PRs include the most useful information for that project. If they're not configured for a project repository, the ROOST-wide defaults will be used instead.

### GitHub Wiki

Projects do not need to use the GitHub wiki, though it may be useful long-lived, supplementary documentation that is not directly tied to the codebase. For example, meeting notes. Keep in mind that splitting documentation between the in-repo docs and wiki can be confusing, and the wiki should never duplicate the in-repo docs.
