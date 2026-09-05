# Submitting Code Changes

This is a companion to our [Contributing Guide](https://github.com/roostorg/.github/blob/main/CONTRIBUTING.md), focused on how to go through the process of submitting a code change.

## Before you open a pull request

- **Start from an issue.** Code contributions should be linked to an open issue with a clear "Ready" status (or at least a rough consensus on the approach). If you want to fix an issue but it's not marked as ready, start by commenting there and ensure there's a consensus on how to approach it; if no issue exists yet, start by opening one and propose your approach there. This helps us keep track of changes in release notes, and helps prevent unnecessary reworking of contributions.

- **Iterate on your branch.** For nontrivial changes, iterate with small, well-described commits to enable a reviewer to follow your process and reasoning. Pull requests may be squash-merged when accepted, so don't worry about having too many small commits; it's more important to be able to follow the history during a code review. 

- **Test locally first.** Confirm the change actually works, and that existing checks pass, before asking someone to spend time reviewing it. If possible, include screenshots or a short screen recording in your pull request description of your branch running locally with the change.

- **Not ready for review? Open a draft!** A draft pull request signals that work is in progress without explicitly asking for a review.

## Writing the pull request

- **Write the description yourself.** Focus the description on _why_ you made the change the way you did, plus anything non-obvious that a reviewer will need to know. The diff and commit history should provide the _what/how_. While you may use an LLM or AI tool to assist coding or drafting, do not paste LLM output directly as your description; write your own summary of what you understand. If there's something you don't full understand or haven't fully verified yourself, say so plainly (e.g., "According to my LLM...").

- **Use GitHub-native links.** [Link your pull request to an issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword) with `fixes #123` in the description when the change fully addresses an issue; GitHub will close it automatically on merge and show the cross-reference in both timelines. Use `related to #123` for partial fixes to cross-reference a pull request and issue without closing the issue on merge. Prefer `#123`-style references over Markdown-formatted links, as GitHub expands the former with a live title/status preview. Similarly, when referring to a specific line of code, [use the bare permalink](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/creating-a-permanent-link-to-a-code-snippet) so GitHub will display both a link and inline code preview.

- **Small diff, best diff.** Smaller changes are easier and faster to review, test, and merge. If a change is large, look for a way to split it into pieces that can each be reviewed on their own.

- **Stack sparingly.** Only build a change on top of another unmerged one when unavoidable; stacking before there's consensus on the base change's approach often leads to redoing your work.

- **Keep discussion scoped.** If a related-but-separate concern comes up while working on or reviewing a change, file it as its own issue and link to it rather than folding it into a pull request's description or comment thread.

## After you submit

- **Stay in touch!** Once your pull request is ready to review, a maintainer or community member will review it; please remain available for follow-up questions or requested changes. Remember to check your [GitHub notifications](https://docs.github.com/en/subscriptions-and-notifications/get-started/configuring-notifications)!

- **Code review is a collaboration.** Both contributor and reviewer should treat it as a learning process; any requested changes are to aid in understanding and to ensure the code is as good as it can be—they're not a final verdict, nor a judgement about the contributor.
