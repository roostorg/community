# Release Notes

While a changelog covers the technical details of a release, release notes _tell the story_. ROOST project release notes should be useful to adopters and give credit to the people who made it happen.

## Start from the changelog

Projects keep a `CHANGELOG.md` detailing notable changes for each version; projects may also use release milestones or project boards to organize resolved issues and/or merged pull requests. When drafting release notes, start with these; for each change, try to understand how it affects adopters. If you don't understand a change that was made, ask someone who does! It will help you draft better release notes _and_ improve the team's comprehension of the project.

## Tell a story!

Sometimes writing release notes is like [retconning](https://en.wikipedia.org/wiki/Retroactive_continuity) the story of the project—that's okay! It helps readers better understand a release when compared to a grab-bag of changes.

To tell a good story, try to **group the changes into a few (two to four) major themes**. Look over the changelog and chat with other contributors to better understand common threads you can use to weave into a cohesive narrative. These themes are often what others will repeat when talking about the release, so spend some time on them and be intentional. If a major new feature shipped with the release, then you may want to focus on that feature specifically as one of your themes; if there are other related changes, however, pick a theme that the new feature can be _exemplary_ of.

Good themes describe the impact for adopters and often cut across areas of the codebase, rather than being focused the specific area of the codebase. If some changes don't cleanly fit your chosen themes but are still worth mentioning, consider collecting them in a rapid-fire "And more" section towards the end.

Remember that this is all just guidance, however; the two most important aspects of release notes are:

1. They accurately reflect the release, and
2. You're proud of them

## Structure

Generally, try to follow this structure for minor and major releases.

Title the release with the project name and version, e.g. "Coop 1.1.0". Then:

1. **Security callout**, if the release addresses any [security advisories](security.md): an `[!IMPORTANT]` alert at the very top linking each advisory with its severity, encouraging users to upgrade, and pointing to the [security-announce@roost.tools mailing list](https://groups.google.com/a/roost.tools/g/security-announce)

2. **Introduction**: a short, warm paragraph setting the context for the release, followed by the themes as a numbered list with a one-line description each

3. **One section per theme**, using the theme as the heading; write these as prose, not bullet lists, explaining what changed and why it matters to people running the project

4. **Upgrade notes**, if anything requires action from adopters (new required configuration, raised dependency floors, removed options, etc.); call these out clearly, either in the relevant theme section or a dedicated section

5. **Thank you**: welcome first-time contributors by name, and thank everyone who filed issues, reviewed pull requests, or otherwise helped

6. **Full changelog**: the release's section of `CHANGELOG.md` inside a collapsed `<details>` block, along with the compare link from the previous tag

## Celebrate contributors

When detailing changes, **credit people by name** where possible, including their GitHub handle at least the first time they're mentioned; e.g. "thanks to Jane Doe (@janedoe)". If the person who filed the resolved issue or committed the pull request is an adopter or new contributor, prioritize crediting them rather than ROOST staff or core contributors (who can be referred to as "we/us"). When crediting someone, if you can't confirm their name, refer to them using their GitHub handle.

Ultimately, use your own judgement on how and when to provide credit in release notes; the changelog, pull requests, issue tracker, and commit log all attribute contributors, so we don't have to be super rigid here. 

When there are first-time contributors, treat that as special! Call it out explicitly, and consider mentioning how many first-time contributors there were for the release.

