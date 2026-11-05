# Requests for Comments (RFCs)

Most changes to ROOST projects happen iteratively through everyday issues and pull requests; however, important and large-impact decisions benefit from a more structured process.

The **Request for Comments (RFC)** process enables contributors to offer a structured proposal, solicit community feedback, and arrive at a formal decision. The RFC process includes a minimum comment period, giving other contributors, adopters, and the wider community a predictable place to find and cadence to chime in on larger-impact decisions.

As with most of our community processes, the RFC process itself may be adjusted over time based on community feedback and as we learn what works.

## When to open an RFC

There's no hard-and-fast rule for when an RFC is required; however, as a rule of thumb, contributors should consider at least:

- **One-way doors**: decisions that would be difficult to reverse or would have ripple effects once implemented

- **Adopter impact**: large changes requiring communication to or extra work for adopters

- **Contributor impact**: substantial work or disruption for those contributing day-to-day

- **Superseding an RFC**: decisions that would conflict with or override a previously-accepted RFC

Bug fixes, small features, and other changes that are easy to revert, iterate on, or revisit later generally don't warrant an RFC as they can be addressed via follow-up issues or pull requests.

If a project [maintainer](roles.md#maintainers) or ROOST staff member determines an issue or pull request needs broader feedback, they may ask the author to open an RFC for it before moving forward.

## Who can open an RFC

The RFC process is intended for contributors, maintainers, and community members who are invested in a project's direction.

## Opening an RFC

To open an RFC, a contributor must create a new GitHub issue using the **RFC** form on the relevant repository. For ROOST-wide or cross-project changes, this is the [community repository](https://github.com/roostorg/community/issues/new/choose). Maintainers and ROOST staff may transfer an RFC issue between ROOST repositories if required.

An RFC requires at least:

- **Summary:** what's being proposed, in a few sentences
- **Proposal:** including as much detail is useful
- **Impact:** who and/or what will be affected, e.g. adopters, contributors, security, or other projects
 
A good RFC also includes:

- **Motivation:** context including the problem it solves or why it is being raised now
- **Alternatives:** other approaches considered, including why they weren't chosen
- **Feedback wanted:** specific open questions, especially for specific stakeholders or groups

Once opened, an RFC is referred to by its GitHub repo and issue number, e.g. `community#92`.

## Comment period

An RFC must remain open for comment for **at least 14 days** to ensure community members with diverse timezones and schedules have a chance to review and respond. This cadence also aligns with our bi-weekly project working group meetings and ROOST-wide office hours.

New or pending RFCs should be discussed at each relevant working group meeting or office hours. Feedback and discussion on an RFC at those meetings should be summarized on the RFC issue for visibility.

Community members with feedback, concerns, or other insights related to the RFC should comment on the GitHub issue during this period. If no comments are received, the maintainer or decision maker may assume the RFC was uncontroversial and thus may be accepted without further discussion.

## Making a decision

After the minimum comment period, the RFC's decision-maker must review the comments and may:

- **Accept** the proposal, possibly with changes based on feedback
- **Reject** the proposal based on feedback
- **Extend** the comment period, e.g. if feedback is still coming in or significant changes were made

The decision-maker is determined by the scope of the RFC:

- **A single project**: the project's [maintainer(s)](roles.md#maintainers)
- **ROOST-wide or cross-project RFCs**, a ROOST staff member (e.g. community, product, or engineering)

The decision must be recorded as a comment on the RFC issue summarizing the reasoning, including how major feedback was addressed. Rejected RFCs are closed as "not planned." Accepted RFCs are labeled as "accepted," and remain open to track implementation.