# Contribute to this site

This documentation site is built using [mdBook](https://rust-lang.github.io/mdBook/) and deployed to GitHub Pages. Changes merged into the `main` branch will automatically be built and deployed.

Documentation can be edited directly in the GitHub web UI for existing pages. To create a new page, be sure to update `SUMMARY.md` as well. Once you're done with your changes, open a pull request for review.

To understand more about how mdBook works, learn about the [anatomy of a book](https://rust-lang.github.io/mdBook/guide/creating.html#anatomy-of-a-book). One caveat for this repo is that the docs live at the root of the repo instead of in a `src/` folder.

## Contributor faces

The avatars under "Meet us" on the homepage are generated, not hand-written. A [weekly workflow](.github/workflows/update-contributors.yml) pulls everyone who has contributed to a public [roostorg](https://github.com/roostorg) repo, sorts them by total commit count, writes `data/contributors.json`, and regenerates the block between the `contributors:start` and `contributors:end` markers in `README.md`. It opens a pull request with the result; don't edit that block by hand.

**If you'd rather not have your face on the site**, add your GitHub handle to `data/contributors-exclude.json` and open a pull request.

To refresh the list yourself:

```shell
GITHUB_TOKEN=$(gh auth token) node scripts/update-contributors.mjs
```

The token just raises the API rate limit; the script works without it. Run that again after editing the exclude list. Pass `--offline` to rebuild `README.md` from the committed JSON without touching the API, or `--check` to verify the two are in sync without writing anything.

## Developing locally

To build the site locally, clone this repository and install `mdbook` (follow the [official installation instructions](https://rust-lang.github.io/mdBook/guide/installation.html))[^1].

Once installed, use the `mdbook` command-line tool from the root of this repo. For example, to automatically start watching, building, and serving the site:

```shell
mdbook serve
```

Then make your changes, preview them in your web browser (at [http://localhost:3000](http://localhost:3000) by default), commit, push, and open a pull request like any other git project. 

[^1]: Alternatively, download the binary from the [GitHub releases](https://github.com/rust-lang/mdBook/releases), unpack it, and drop it into `bin/` in this repo (which is .gitignored). Then prefix your `mdbook` commands with the path, e.g. `bin/mdbook serve`.
