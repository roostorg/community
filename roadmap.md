# ROOST Project Roadmap

## H2 2026 Strategic Vision: Platform Reliability & Adopter Success

ROOST builds robust, open source building blocks that trust and safety teams compose into production moderation systems. Our primary focus is delivering production-ready stability, seamless operational workflows, reduced deployment friction, and making our tools outstanding and competitive products. 

Rather than relying on speculative capabilities, ROOST prioritizes hardening core infrastructure, streamlining human reviewer operations, and supporting flexible self-hosted or sovereign deployments.


## Our Approach

ROOST believes safety infrastructure should be freely available to all regardless of organizational size or resources; transparent and auditable to enable public trust; community-governed to reflect user perspectives and needs; and open source to reduce vendor lock-in and maximize flexibility.

[Read more about our approach](https://roost.tools/blog/open-by-design-roost-s-approach-to-safety-tool-development/) and [view our community documentation on GitHub](https://github.com/roostorg/community).

### The DIRE Framework

ROOST's projects map to how trust and safety teams actually operate using the [DIRE Framework](https://ssrn.com/abstract=5369158). Our roadmap covers:

- **Detection**: Identifying potential risks in accounts, behaviors, and content through classifiers, hash matching, and behavioral signals
- **Investigation**: Analyzing broad attack patterns by evaluating context beyond individual entities, or diving deep into a single incident
- **Review**: Applying human judgment to assess content against policies
- **Enforcement**: Taking action and meeting reporting obligations

### Out of scope

ROOST is deliberately not building certain things. These decisions emerged from ecosystem research and partner conversations. We'll revisit them regularly as we learn more and our community grows.

* We are working with partners to develop and evaluate new detection methods in the areas of most pressing harms, including mental health safety, hate speech, grooming and novel CSAM detection   
  * Of new detection capabilities, novel CSAM detection is an urgent need in the market and ecosystem and we welcome exploration and partnership in this area.  
  * We have a [community wishlist of technology that is most needed](https://github.com/orgs/roostorg/discussions/60), please help add to or upvote existing items\!  
* We are not working on age verification or identity technologies as of now, since many specialized teams are already advancing those areas.   
* We are not building end-user-facing tools, whether they are end-user reporting components or tools for people to use as they navigate online platforms. Our focus is on internal tools for organizations that host content, and we hope these can be used by others for other user-facing projects. 

## Project Overview

Important notes:

- Features are grouped by release version with estimated timelines
- Priorities may shift based on community feedback and contributor availability
- Some advanced features (marked “Next”) depend on sustained resourcing and team growth
- We welcome feedback on priorities through [GitHub Discussions]

> [!NOTE]
> **About AI in ROOST tools:** AI is radically upturning trust and safety. As we build more AI integrations in our stack, non-AI-enhanced versions of ROOST tools will remain available and tagged for organizations that prefer non-AI workflows and support of these early versions will depend on the project's long-term support policy. Our AI work focuses on helping organizations understand how AI works in safety contexts and where it strategically fits into their tech stacks, while ensuring everything remains fully customizable and self-hostable.

ROOST's two flagship projects are Coop and Osprey, announced in [July 2025](https://roost.tools/blog/roost-announces-coop-and-osprey-free-open-source-trust-and-safety-infrastructure-for-the-ai-era/).

| [Osprey]                                                    | [Coop]                                                                        |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------- |
| Built and donated by [Discord](https://discord.com/blog/osprey-open-sourcing-our-rule-engine) and open sourced through ROOST | ROOST-acquired IP from [Cove](https://getcove.com/)                           |
| Human-crafted rules actioned at scale                       | Flexible review tool for labeling multiple formats (ie. content and accounts) |
| High QPS processing for streaming and batched data          | Queue orchestration, audit trails, reviewer wellness features                 |
| Open-ended investigation                                    | Configurable actions, entities, and dashboards                                |
| UI for analysts to identify abuse patterns and signals      | Automated routing of tasks into queues                                        |
| Sync and async rule creation and execution                  | Complete CSAM detection and reporting system                                  |

# Core Tooling & Operations Roadmap

## **Pillar 1: Adopter Workflow & Operations**

*Goal: Streamline moderator queues, elevate decision quality, and ensure policy changes run safely in production.*

* [**Analyst Self-Service Tools in Osprey**](https://github.com/roostorg/osprey/milestone/4)**:** Implement code-free rules management and LLM-assisted recommendations to streamline rule authoring and investigation.  
  * Target date/release: ![Now](https://img.shields.io/badge/Now-2ea44f?style=flat-square)
* [**Adopter Papercuts in Coop**](https://github.com/roostorg/coop/milestone/7)**:** Remove high-frequency friction across moderation screens by exposing recent decisions higher in jobs, surfacing contextual actions, enabling NCMEC queue safeguards, and improving video wellness blur behaviors.  
  * Target date/release: ![Now](https://img.shields.io/badge/Now-2ea44f?style=flat-square)
* [**Moderation Operations in Coop**](https://github.com/roostorg/coop/milestone/8)**:** Provide queue visibility, configurable claim timeouts with SLA state warnings, escalation and reassignment flows, role-based access control, CSV bulk actioning, and durable clue notes.  
  * Target date/release: ![Now](https://img.shields.io/badge/Now-2ea44f?style=flat-square)
* [**Moderation Quality Assurance in Coop**](https://github.com/roostorg/coop/milestone/14)**:** Implement secondary reviews, golden sets, automated action sampling, and policy-relevant action-rate context for reviewers without creating separate workflow silos.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)
* [**NCMEC Reporting Completeness**](https://github.com/roostorg/coop/milestone/13)**:** Ensure Coop produces complete, standards-aligned NCMEC reports and can support follow-up reports without losing prior-report relationships. Validate the full workflow continuously so required data or API compatibility cannot silently regress.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)
* [**HMA Enhancements:**](https://github.com/roostorg/coop/milestone/9) **T**urn Coop's existing HMA integration into a complete, organization configurable hash-bank workflow. Organizations should be able to manage bank content, write reviewed media to company verified destinations, capture source specific false positives, tune matching behavior, and operate the integration with clear health and permission boundaries.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)
* [**Policy Change Safety & Portability in Coop**](https://github.com/roostorg/coop/milestone/15)**:** Build production-ready backtesting, explicit rule evaluation ordering, typed signal chains, and validated policy import/export functionality across environments.  
  * Target date/release: ![Later](https://img.shields.io/badge/Later-6e7781?style=flat-square)
* **[Behavioral Signals & Pattern Detection in Osprey](https://github.com/roostorg/osprey/milestone/7):** Expand real-time graph analysis, velocity tracking, and network coordination signals to detect complex abuse patterns across entities.  
  * Target date/release: ![Later](https://img.shields.io/badge/Later-6e7781?style=flat-square)

## **Pillar 2: Infrastructure Reliability & Security**

*Goal: Simplify datastore architectures, harden security postures, and establish smooth operational deployment paths.*

* **[Adopter readiness & Cloud Portability in Osprey](https://github.com/roostorg/osprey/milestone/6):** Enable GCP-independent operations by implementing hermetic image builds, versioned PostgreSQL schema migrations, and pluggable identity/access audit trails for sovereign deployments.  
  * Target date/release: ![Now](https://img.shields.io/badge/Now-2ea44f?style=flat-square)
* [**Simplified Deployment & Data Portability in Coop**](https://github.com/roostorg/coop/milestone/10) Introduce domain-specific interfaces to enable an optional Postgres-only backend path alongside existing Scylla, ClickHouse, and Redis datastores.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)
* [**Platform Reliability & Observability in Coop**](https://github.com/roostorg/coop/milestone/11)**:** Eliminate memory growth leaks, surface webhook delivery diagnostics, introduce outbox pattern durability, and return graceful database outage responses.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)
* [**Self-Hosted Deployment & Upgrade Experience:**](https://github.com/roostorg/coop/milestone/16) Single-process API/client bundling, standard SMTP email drivers, update notifications, proxy setup documentation, and release checklists.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)
* **[Real-time Rule Execution in Osprey:](https://github.com/roostorg/osprey/milestone/5)** Optimize high-throughput rule engine performance, reduce latency, and ensure real-time stability for streaming data processing.  
  * Target date/release: ![Next](https://img.shields.io/badge/Next-0969da?style=flat-square)

## **Pillar 3: Detection, Model Integration & Growing the ROOST Model Community**

*Goal: Expand the ROOST Model Community of open safety models and resources, advance core detection through Pigeon, and expand model interoperability.*

* [**Drive scientific and technical partnerships through the RMC:**](https://github.com/roostorg/model-community) The ROOST Model Community plays a central role in the Detection capability by making open source safety models accessible and integrated into openly available safety tools to bring advanced AI capabilities to safety teams. 
  * **Current Models**:  
    * Mila: [Mila-Suicide-Prevention-Output-Guardrail](https://github.com/roostorg/model-community/tree/main/mila)  
    * Mistral: [Shieldstral-1.0-3B](https://github.com/roostorg/model-community/tree/main/shieldstral)  
    * OpenAI: [gpt-oss-safeguard](https://github.com/roostorg/model-community/tree/main/gpt-oss-safeguard) 
    * Musubi: [PolicyLM-1.7B](https://github.com/roostorg/model-community/tree/main/musubi-policylm) 
    * Roblox: [Sentinel](https://github.com/roostorg/model-community/tree/main/roblox-sentinel), [voice-safety-classifier-v3](https://github.com/roostorg/model-community/tree/main/roblox-voice-safety-classifier), [roblox-pii-classifier-v2](https://github.com/roostorg/model-community/tree/main/roblox-pii-classifier)  
    * Zentropi: [CoPE-B-A4B](https://huggingface.co/zentropi-ai/cope-b-a4b)  
  * **Current Offerings:**  
    * Collection of resources, datasets, and demos related to open source safety models  
    * Hackathons for policy development, model comparisons, and exploration  
    * Office hours for developers, researchers, and practitioners that act as a conduit for feedback back to model developers and an opportunity to share model implementation support
* [**Align on approach for Pigeon (Model Translation Layer)**](https://github.com/roostorg/pigeon/milestone/1)**:** Standardize model specs to enable plug-and-play interoperability with open-weight safety models.  
  * Target date: ![Now](https://img.shields.io/badge/Now-2ea44f?style=flat-square)
* **Agentic Foundations:** Develop the initial Data Abstraction Layer (DAL) and Investigation-Agent module specifications to enable multi-step, agent-driven playbook execution in future releases.  
  * Target date/release: ![Later](https://img.shields.io/badge/Later-6e7781?style=flat-square)

# Getting Involved

## Evaluating ROOST Tools

For potential adopters:

- Review technical requirements and integration patterns
- Join our [Discord server] to keep up with office hours, discussions, and ask questions
- Join [public community meetings](https://roostorg.github.io/community/meetings) to discuss your specific situation
- Ask questions in [GitHub Discussions] (features listed are current thinking, will evolve)

## Contributing

Find your area (and you don't need to code to be a contributor! Feedback, ideas, and bug reports all help):

- Browse [good first issues](https://github.com/search?q=org%3Aroostorg+label%3A%22good+first+issue%22&type=issues) across repositories
- Review feature planning in [project boards](https://github.com/orgs/roostorg/projects)
- Join [working group meetings](https://discord.com/events/1267513495554097295/1448337328077799485)

# Appendix

## Glossary

<dl>
  <dt>T&amp;S</dt>
  <dd>Trust and Safety</dd>
  
  <dt>RMC</dt>
  <dd>ROOST Model Community</dd>
  
  <dt>CSAM</dt>
  <dd>child sexual abuse material</dd>
  
  <dt>OCSEA</dt>
  <dd>online child sexual exploitation and abuse</dd>
  
  <dt>TVEC</dt>
  <dd>terrorism and violent extremism content</dd>
  
  <dt>NCII</dt>
  <dd>non-consensual intimate imagery </dd>
  
  <dt>BYOP</dt>
  <dd>bring your own policy</dd>
  
  <dt>BYOM</dt>
  <dd>bring your own model</dd>

  <dt>MCP</dt>
  <dd>model context protocol</dd>
  
  <dt>NCMEC</dt>
  <dd>National Center for Missing and Exploited Children</dd>
  
  <dt>INHOPE</dt>
  <dd>a member association organization made up of child sexual abuse hotlines around the world that operate in all EU member states, Russia, South Africa, North & South America, Asia, Australia and New Zealand</dd>
  
</dl>

## Areas of Investment

#### Making Tools for a Global Community

Many tools built for safety teams are designed with a North American user in mind, with limited support for non-English languages, regional policy frameworks, or operational contexts outside Western markets. Trust and safety professionals work all over the world, including large numbers in global majority regions where most front-line safety work is performed. Yet these workers often have limited influence over the design and function of the tools they use daily, which may assume high bandwidth, Silicon Valley office conditions, and Western environments rather than reflecting the realities of language fluency, different labor setups, and varying risk profiles they actually face.

ROOST's [open source approach](https://roost.tools/blog/open-by-design-roost-s-approach-to-safety-tool-development/) aims to address both access and design. Developers and emerging platforms can deploy sophisticated safety tools on their own infrastructure without black-box solutions, prohibitive licensing costs, or vendor lock-in, while building in the open means practitioners anywhere can provide feedback and shape how these tools function in their specific contexts. Tools designed for global workers' realities are more likely to reduce harm, burnout, and error than tools optimized only for well-resourced Western contexts. When safety infrastructure is built in public and shaped by diverse practitioners, it becomes more adaptable, more legitimate, and more effective across different regional environments.

We're excited to see [a Traditional Chinese guide to Coop](https://roost.mashbean.net/), developed by [Mashbean Huang](https://mashbean.net/en/about/) for [Matters](https://matters.town/). 

#### Hash Matching for All

Hash matching is a common detection technology that can be used to identify known content like child sexual abuse material (CSAM) or terrorism and violent extremism content (TVEC) governed by organizations like the [National Center for Missing and Exploited Children (NCMEC)](https://www.missingkids.org/gethelpnow/cybertipline/cybertiplinedata) and the [Global Internet Forum to Counter Terrorism (GIFCT)](https://gifct.org/hsdb/). It can also be used for fan-out decisions for organization-specific hash banks of content already deemed violating.

[Hasher-Matcher-Actioner (HMA)](https://github.com/facebook/ThreatExchange/tree/main/hasher-matcher-actioner) is an open-source hash matching system created by Meta that enables detection of known harmful content like TVEC, CSAM, and NCII. While HMA provides powerful matching capabilities, many organizations struggle to deploy it effectively or connect it to their review and enforcement workflows. ROOST makes HMA more usable by integrating it directly with Coop, creating a complete pipeline from hash-based detection through human review to enforcement action, and by hosting the HMA office hours to ensure organizations seeking to integrate HMA find the support they need to do so.

When HMA identifies potential matches, cases flow automatically into Coop's review queues with appropriate context and priority. Reviewers can confirm matches, assess context, and take action without switching systems. This integration transforms HMA from a standalone detection tool into part of a comprehensive safety stack.

ROOST is part of the core maintainer team for HMA.

#### Actionable NCMEC Reports

In the US, 18 U.S. Code § 2258A requires that electronic service providers are required to report CSAM to the CyberTipline of NCMEC, which acts as a global clearinghouse. In 2024, more than 8% of CyberTipline reports submitted by the tech industry contained so little information that it was not possible for NCMEC to determine where the offense occurred or the appropriate law enforcement agency to receive the report[^1]. While it’s critical for each reporting organization to decide how they navigate what to share in such reports, in practice the tools used to fulfill these obligations don’t easily let organizations who wish to make these reports ensure the information they have chosen to share is actionable for the recipient.

Our work with NCMEC focuses on designing the CyberTip reporting function in ROOST tools to integrate best practices regarding report quality and investigative value. By incorporating feedback from child safety and law enforcement experts, we're defining default data fields that align with hotlines and intake systems that capture the specific information investigators need to take action. This ensures that organizations using Coop can make their reports useful for protecting children and prosecuting offenders.

[Osprey]: https://github.com/roostorg/osprey
[Coop]: https://github.com/roostorg/coop
[ROOST Model Community]: https://github.com/roostorg/model-community
[Discord server]: https://discord.gg/5Csqnw2FSQ
[GitHub Discussions]: https://github.com/orgs/roostorg/discussions

[^1]: [CyberTipline Data](https://www.missingkids.org/gethelpnow/cybertipline/cybertiplinedata)