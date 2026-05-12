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

### File naming and structure

Documentation files should typically be named in [kebab-case], except for specially-handled files like `README.md` and `CONTRIBUTING.md`. If multiple pages are related, use a subfolder with a `README.md` for the main page. For example:

- `docs/`
  - `README.md` ← Docs home with a brief intro
  - `faq.md` ← Standalone FAQ page, shows as a sub-section of the docs
  - `user-guide/`
    - `README.md` ← User guide home with a brief intro
    - `advanced.md` ← Sub-page of the user guide

This ensures files are nicely browsable both in the GitHub web UI and when turned into a documentation website, e.g. with mdbook.

### Links

When linking to other pages in the documentation, use a descriptive link name and relative links, e.g. `learn more about [specific feature](specific-feature.md)`. This ensures the links are more useful for screen readers and search engines, and work across both the GitHub web UI as well as the built HTML docs site. When linking to the top level of a docs section that has its own folder, use a relative link to the folder itself (not its `README.md`); for example: `see the [user guide](../user-guide/) for details`.

Documentation website generators like mdbook will automatically handle converting the link target for the web.

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

### Tips

Things we've learned over time:

- For large amounts of documentation, it can be useful to clearly separate it based on who it is useful to; for example, a non-technical user guide (what is this, what are its features, how do I use it) versus developer-oriented technical documentation (how to get it running, how the code is structured, how to add features). Avoid crossing those boundaries; i.e. keep code blocks and API references out of the user guide when possible.

- Don't duplicate information; link it! The more places something is written, the more likely docs will become out of date or contradictory. It's fine and expected to link between user and developer docuementation, for example, rather than duplicating information in both places.

- Docs subfolders work best with a short `README.md` with few-to-no subheadings, so the other sub-pages in that folder are more easily browsable both in the GitHub web UI and on the generated documentation website.

- Don't be afraid of breaking long pages down into shorter subpages. If a page you're working on is getting dauntingly long, consider breaking each main heading out into its own page.

- Tables are great for short amounts of data, but avoid more than a few words in a table cell since it makes it really hard to read/edit in the Markdown source; instead, consider switching to headings and paragraphs for larger amounts of information.

## Docs website

Projects should generate a web version of the documentation and deploy with GitHub Pages. By default, this will be available at **roostorg.github.io/`<project>`** where `<project>` is the GitHub repository name. For projects that have documentation that may change between versioned releases, docs websites should support versioning; for example:

- `main` branch at **roostorg.github.io/`<project>`/latest/**
- `0.1` tag at **roostorg.github.io/`<project>`/0.1/**
- `0.2` tag at **roostorg.github.io/`<project>`/0.2/**
- etc.

ROOST projects currently use [mdbook](https://rust-lang.github.io/mdBook/) for generating documentation websites with a GitHub Actions workflow to output versioned docs from tagged releases. 

## Other forms of documentation

### Issue and pull request templates

GitHub [issue and pull request templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) can be set up in each project to ensure issues and PRs include the most useful information for that project. If they're not configured for a project repository, the ROOST-wide defaults will be used instead.

### GitHub Wiki

Projects do not need to use the GitHub wiki, though it may be useful long-lived, supplementary documentation that is not directly tied to the codebase. For example, meeting notes. Keep in mind that splitting documentation between the in-repo docs and wiki can be confusing, and the wiki should never duplicate the in-repo docs.
