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

### File names

Documentation files should typically be named in [kebab-case], except for specially-handled files like `README.md` and `CONTRIBUTING.md`. If a file is considered part of a subsection, it should be placed in a folder; for example:

- `docs/`
  - `getting-started.md`
  - `user-guide/`
    - `README.md`
    - `faq.md`

Or:

- `docs/`
  - `getting-started.md`
  - `user-guide.md`
  - `user-guide/`
    - `faq.md`

### Links

When linking to other pages in the documentation, use a descriptive link name and relative links, e.g. `learn more about [specific feature](specific-feature/README.md)`. This ensures the links are more useful for screen readers and search engines, and work across both the GitHub web UI as well as the built HTML docs site.

### Images

Images to be used in the documentation should be stored in `docs/images/` and named as concisely as possible. To make them easier to reference in Markdown, avoid spaces or other special characters and use [kebab-case]. Related images can be places in subfolders; for example:

- `docs/`
  - `images/`
    - `overview.png`
    - `specific-feature/`
      - `overview.png`
      - `detail.png`

If there aren't too many images, it may be simpler to keep a more flat directory structure, i.e.:

- `docs/`
  - `images/`
    - `overview.png`
    - `specific-feature.png`
    - `specific-feature-detail.png`
   
Unless there is a need for specific HTML attributes, use Markdown to reference images, e.g.:

```markdown
![Concise but descriptive alt text](docs/images/overview.png)
```

[kebab-case]: https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case

## Docs website

Projects should generate a web version of the documentation and deploy with GitHub Pages. By default, this will be available at **roostorg.github.io/`<project>`** where `<project>` is the GitHub repository name.

<!-- TODO: mention mdBook if we're happy with it! -->

## Other forms of documentation

### Issue and pull request templates

GitHub [issue and pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) can be set up in each project to ensure issues and PRs include the most useful information for that project. If they're not configured for a project repository, the ROOST-wide defaults will be used instead.

### GitHub Wiki

Projects do not need to use the GitHub wiki, though it may be useful long-lived, supplementary documentation that is not directly tied to the codebase. For example, meeting notes. Keep in mind that splitting documentation between the in-repo docs and wiki can be confusing, and the wiki should never duplicate the in-repo docs.
