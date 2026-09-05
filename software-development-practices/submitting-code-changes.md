# Submitting Code Changes

This is a companion to our [Contributing Guide](../CONTRIBUTING.md) with more detail on what makes a good code change. We're starting lightweight and will expand this over time as our conventions settle.

## Before you open a pull request

- **Start from an issue.** Code contributions should trace back to an open issue with a clear "Ready" state or rough consensus on the approach. If neither exists yet, that's the place to start — a comment there is much cheaper to iterate on than a finished change that needs rework.

- **Iterate on your branch.** Small, well-described commits let a reviewer follow your reasoning as it developed, not just judge the final diff in isolation.

- **Test locally first.** Confirm the change actually works, and that existing checks pass, before asking someone to spend time reviewing it.

- **Not ready for eyes yet? Open a draft pull request.** A draft signals that work is in progress without putting it up for review.

## Writing the pull request

- **Write the description yourself.** Focus it on _why_ you made the change — the diff is the _what/how_. It's fine to use an AI tool while coding or drafting, but don't paste its output directly as your description; write your own summary of what you understand. If you're leaning on something you haven't fully verified yourself, say so plainly (e.g., "I checked with an AI assistant and it suggested...").

- **Link natively instead of by hand.** Use `fixes #123` (or `closes`/`resolves`) when the change fully addresses an issue — GitHub will close it automatically on merge and show the cross-reference in both timelines. Use `related to #123` for partial fixes. Prefer `#123`-style references over pasted URLs; GitHub expands them with a live title/status preview.

- **Small diff, best diff.** Smaller changes review faster, test more easily, and carry less regression risk. If a change is large, look for a way to split it into pieces that can each be reviewed on their own.

- **Stack sparingly.** Only build a change on top of another unmerged one when it's genuinely unavoidable. Stacking before there's consensus on the base change's approach usually means redoing the rebase and re-review once things shift.

- **Keep discussion scoped.** If a related-but-separate concern comes up while working on or reviewing a change, file it as its own issue rather than folding it into this pull request's description or comment thread.

## After you submit

- Once it's out of draft, a maintainer or community member will review it — please stay available for follow-up questions or requested changes.

- ROOST is still a young project finding its conventions, so treat review feedback as collaborative, not a verdict.

---

_Have a suggestion for this guide? Open an issue or PR — like everything else here, it's a living document._
