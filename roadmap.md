# ROOST Product Roadmap

This roadmap outlines the development priorities for ROOST's open source trust and safety infrastructure and specifically addresses the needs the ROOST team is currently equipped to be building against. We look forward to ideas, suggestions, and feedback from the community; any feature requests not on the roadmap will be logged in a separate “wishlist” that collects the systems and tools most wanted across the open source safety ecosystem. Whether you're evaluating ROOST for your platform, looking to contribute, or coordinating work across project teams, this document will help you understand where we're headed and how to get involved.

> [!NOTE]
> Timelines are based on assumptions on team sizing and overall engineering contributions.

## Our Approach

ROOST believes safety infrastructure should be freely available to all regardless of organizational size or resources; transparent and auditable to enable public trust; community-governed to reflect user perspectives and needs; and open source to reduce vendor lock-in and maximize flexibility.

[Read more about our approach](https://roost.tools/blog/open-by-design-roost-s-approach-to-safety-tool-development/) and [view our community documentation on GitHub](https://github.com/roostorg/community).

## [The DIRE Framework](https://ssrn.com/abstract=5369158)

ROOST's projects map to how trust and safety teams actually operate. Our roadmap covers:

- **Detection**: Identifying potential risks in accounts, behaviors, and content through classifiers, hash matching, and behavioral signals
- **Investigation**: Analyzing broad attack patterns by evaluating context beyond individual entities, or diving deep into a single incident
- **Review**: Applying human judgment to assess content against policies
- **Enforcement**: Taking action and meeting reporting obligations

### Out of scope

ROOST is deliberately not building certain things. These decisions emerged from ecosystem research and partner conversations. We'll revisit them regularly as we learn more and our community grows.

- We are not creating new detection capabilities ourselves. Instead, we are making those models more usable and interoperable.

  - Of new detection capabilities, novel CSAM detection is an urgent need in the market and ecosystem and we welcome exploration and partnership in this area.

- We are not working on age verification or identity technologies as of now, since many specialized teams are already advancing those areas.

- We are not building end-user-facing tools, whether they are end-user reporting components or tools for people to use as they navigate online platforms. Our focus is on internal tools for organizations that host content, and we hope these can be used by others for other user-facing projects.

There may be other technologies that ROOST isn’t building, but would like to see built. One example is technology that makes it easier for our tools to be compatible with a broader set of systems, like adaptors that provide a way for our tools to integrate with more classifiers or APIs. Another example could be a user reporting component that packages data to review in Coop, or built-in trauma reduction.

## Project Overview

Important notes:

- Features are grouped by release version with estimated timelines
- Priorities may shift based on community feedback and contributor availability
- Some advanced features (marked “Next”) depend on sustained resourcing and team growth
- We welcome feedback on priorities through [GitHub Discussions]

**About AI in ROOST tools:** AI is radically upturning trust and safety, but not every organization wants or needs AI-powered investigation. As we build more AI integrations in our stack, non-AI-enhanced versions of ROOST tools will remain available and tagged for organizations that prefer non-AI workflows; support of these early versions will depend on the project’s long-term support policy. Our AI work focuses on helping organizations understand how AI works in safety contexts and where it strategically fits into their tech stacks, while ensuring everything remains fully customizable and self-hostable.

ROOST's two flagship projects are Coop and Osprey, announced in [July 2025](https://roost.tools/blog/roost-announces-coop-and-osprey-free-open-source-trust-and-safety-infrastructure-for-the-ai-era/).

| [Osprey]                                                    | [Coop]                                                                        |
| :---------------------------------------------------------- | :---------------------------------------------------------------------------- |
| Built and donated by Discord and open sourced through ROOST | ROOST-acquired IP from [Cove](https://getcove.com/)                           |
| Human-crafted rules actioned at scale                       | Flexible review tool for labeling multiple formats (ie. content and accounts) |
| High QPS processing for streaming and batched data          | Queue orchestration, audit trails, reviewer wellness features                 |
| Open-ended investigation                                    | Configurable actions, entities, and dashboards                                |
| UI for analysts to identify abuse patterns and signals      | Automated routing of tasks into queues                                        |
| Sync and async rule creation and execution                  |                                                                               |

## [Osprey]: Investigation

**Current status:** 🟢 v1.0 in production in organizations such as Bluesky that can handle O(1e8) events/day.

**Project goal:** Provide rules engine infrastructure that can be hosted within an organization so analysts and safety teams are empowered to conduct their own internal investigations and create rules independently. Scale metadata-based investigations beyond what content-focused solutions can achieve. With empowered analysts, engineering teams can focus on org-specific improvements to increase recall.

![Screenshot of Osprey](https://github.com/roostorg/osprey/raw/main/images/query-and-charts.png)

**Solution:** Osprey is a high-performance rules engine for real-time event processing and behavioral analysis. Safety teams use it to detect patterns across multiple events and conduct sophisticated investigations.

**Getting started**: [Development Guide](https://github.com/roostorg/osprey/blob/main/docs/DEVELOPMENT.md)

### v1.0 - Available Now (December 2025)

**Goal**: Reliable, flexible infrastructure that provides the critical functionality of an investigation rules engine that’s capable of running at scale and users can adopt rather than building isolated rules engines from scratch.

**Core features:**

- Self-hostable rules engine with incident response interface
- Real-time streaming data processing at high queries or events per second
- Very flexible definition of user defined functions and custom logic encoded in rules that the engine will process over the input stream. Osprey can evaluate O(1000s) of rules at above scale
- Analytics database (Druid) for event storage and analysis
- Horizontal scaling for enterprise workloads

These features were chosen in order to make the main components of the tool originally built at Discord widely-applicable to others: the core rules engine, the UI, the labeling service, and the coordinator that acts as a load balancer once users start having a large number of sync and async rules. 

### v1.x features - 2026

**Goal**: Remove friction from existing analyst workflows (like pull requests for rule updates) and make Osprey accessible to less technical teams who can identify abuse patterns but may struggle with the current rule process.

**Core features:**

- Code-free rules management through UI
- Shadow mode for testing rules before production
- Batch processing for historical analysis
- Enhanced drill-down capabilities for complex cases

**Early exploration**

* Pattern detection for emerging threats
* An ML Platform can be used to convert Osprey rules into continuous learning classifiers

These features were prioritized after shadowing analysts at Discord and Bluesky to understand their actual workflows of version 1.0. In 1.0, rule updates require pull requests and GitHub file management, which creates friction for analysts who aren’t used to making code changes and slows rule creation/deployment. Shadow mode helps ensure rules are catching what they intend to target, and batch processing allows for deeper investigations beyond near-real time. These changes make Osprey work better for current users while expanding who can effectively use it.

### Next - 2027 and Beyond

**Goal**: Using AI to surface unknown threats and patterns that human analysts might miss, while helping organizations understand where AI fits strategically in their safety operations.

**Core features:**

* AI-powered interface for querying data
* Unsupervised learning (clustering, anomaly detection)
* Automated signal combination for improved recall

These features are exploratory pending v1.1 feedback and resourcing. More information is needed, like whether production deployments reveal specific investigation gaps worth targeting before general-purpose AI assistance.

## [Coop]: Review and Enforcement

**Current status:** 🟢 v0 targeting December 2025

**Project goal:** Provide human-centered review infrastructure that works at scale while protecting reviewer wellbeing, ensuring consistent policy enforcement, and meeting complex reporting obligations.

**Solution:** Coop is a flexible review console for Trust & Safety across different harm types. Built as an open source refactor of Cove ([a commercial tool whose IP was acquired by ROOST](https://roost.tools/blog/roost-announces-coop-and-osprey-free-open-source-trust-and-safety-infrastructure-for-the-ai-era/)), it provides queue orchestration, context-rich review interfaces, reviewer wellness features, and enforcement workflows. Our V0 release includes specialized child safety workflow functionality alongside the core review capabilities.

### v0 - December 2025

**Goal**: Deliver essential review infrastructure that can handle both everyday moderation volumes and complex child safety requirements with excellence. Child safety represents the highest-stakes technical challenge with the broadest organizational need.

**Core features:**

* Self-hostable  
* Queue dashboard with orchestration and decision trails
* Reviewer wellness capabilities built-in (per organization/individual)
* Context-rich review interface (shows threads, user history, related content)
* Abstraction for calling external ML and AI models of your choice
* HMA integration for hash matching (CSAM, TVEC, NCII, internal hash banks, etc.)
* Enhanced NCMEC reporting designed for actionable reports

Organizations need review infrastructure that works for all violation types across accounts and content. Contextual interfaces came from Cove's commercial learnings and the ROOST team’s own T\&S experience about what reviewers actually need to make informed decisions. Reviewer wellness is critical for reducing trauma for T\&S workers and should be part of the initial release rather than an afterthought. Community feedback has validated our initial focus on child safety technology.

### v1.0 - 2026

**Goal**: Build systematic quality into review workflows and create feedback loops between review decisions and investigation systems.

**Core features:**

* In-tool Quality Assurance (QA) for reviewer decisions
* Expanded search
* UI improvements
* Semantic hash detection
* Integrated feedback loops with Osprey
* INHOPE Universal Schema

These features are meant to meet safety teams at their most painful points. QA features emerged from conversations with operations teams who lack systematic approaches beyond spreadsheet-based audits. Improved search across the entire system enables investigations for ad-hoc escalations and spot-checks. Integrated feedback loops with Osprey create a continuous improvement cycle where review decisions help refine detection rules. INHOPE mapping extends our NCMEC work to international child safety cooperation, recognizing that abuse crosses borders.

### Next - 2027

**Goal**: Help users make faster, more consistent decisions by providing policy reasoning and context summaries, while maintaining human-in-the-loop oversight.

Core features:

- Agentic review with structured reasoning (human-in-the-loop)
- Configurable enforcement engines
- Evaluation datasets and benchmarking

These features are subject to change based on adopter feedback of v1 and more information is needed. Evaluation datasets co-developed with subject matter expert organizations would allow organizations to test AI-assisted moderation features against real-world content and validated decisions, moving beyond synthetic benchmarks to measure performance on the nuanced cases that matter most.

## [ROOST Model Community]: Detection

**Current status:** 🟢 Active community, gpt-oss-safeguard model available

**Project goal:** Make open source safety models accessible and integrated into openly available safety tools, bringing advanced AI capabilities to safety teams.

Recognizing that AI models require specialized stewardship distinct from traditional software, ROOST operationalizes their open distribution by partnering with creators to release safety models and iterate on them through the [ROOST Model Community] (RMC).

The ROOST Model Community plays a central role in the Detection capability of the DIRE framework. This complements other Detection integrations such as hash matching.

ROOST will be working with partners to ensure openly available models; [gpt-oss-safeguard](https://roost.tools/blog/a-new-milestone-for-open-source-safety-infrastructure-and-transparency/), built, used and shared by OpenAI, is the first of such models. The RMC also serves as a resource for converting traditional policies into AI-ready prompts and disseminating knowledge across functions so smaller organizations can adopt best practices for different types of harm.

**Current Offerings:**

- Collection of resources, datasets, and papers related to open source safety models
- Hackathons for policy development, model comparisons, and exploration
- A HuggingFace space for comparing different open source safety models for performance and cost
- Office hours for open safety models that act as a conduit for feedback back to model developers and an opportunity to share model implementation support

# Getting Involved

## Evaluating ROOST Tools

For potential users:

- Review technical requirements and integration patterns
- Join our [Discord server] to keep up with office hours, discussions, and ask questions
- Join office hours to discuss your specific situation
- Ask questions in [GitHub Discussions] (features listed are current thinking, will evolve)

## Contributing

Find your area:

- Browse [good first issues](https://github.com/search?q=org%3Aroostorg+label%3A%22good+first+issue%22&type=issues) across repositories
- Review feature planning in [project boards](https://github.com/orgs/roostorg/projects)
- Join working group meetings

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
  
  <dt>NCMEC</dt>
  <dd>National Center for Missing and Exploited Children</dd>
  
  <dt>INHOPE</dt>
  <dd>a member association organization made up of child sexual abuse hotlines around the world that operate in all EU member states, Russia, South Africa, North & South America, Asia, Australia and New Zealand</dd>
  
  <dt></dt>
  <dd></dd>
</dl>

## Areas of Investment

#### Hash Matching for All

Hash matching is a common detection technology that can be used to identify known content like child sexual abuse material (CSAM) or terrorism and violent extremism content (TVEC) governed by organizations like the [National Center for Missing and Exploited Children (NCMEC)](https://www.missingkids.org/gethelpnow/cybertipline/cybertiplinedata) and the [Global Internet Forum to Counter Terrorism (GIFCT)](https://gifct.org/hsdb/). It can also be used for fan-out decisions for organization-specific hash banks of content already deemed violating.

[Hasher-Matcher-Actioner (HMA)](https://github.com/facebook/ThreatExchange/tree/main/hasher-matcher-actioner) is an open-source hash matching system created by Meta that enables detection of known harmful content like TVEC, CSAM, and NCII. While HMA provides powerful matching capabilities, many organizations struggle to deploy it effectively or connect it to their review and enforcement workflows. ROOST makes HMA more usable by integrating it directly with Coop, creating a complete pipeline from hash-based detection through human review to enforcement action, and by hosting the HMA office hours to ensure organizations seeking to integrate HMA find the support they need to do so.

When HMA identifies potential matches, cases flow automatically into Coop's review queues with appropriate context and priority. Reviewers can confirm matches, assess context, and take action without switching systems. This integration transforms HMA from a standalone detection tool into part of a comprehensive safety stack.

#### Actionable NCMEC Reports

In the US, 18 U.S. Code § 2258A requires that electronic service providers are required to report CSAM to the CyberTipline of NCMEC, which acts as a global clearinghouse. In 2024, more than 8% of CyberTipline reports submitted by the tech industry contained so little information that it was not possible for NCMEC to determine where the offense occurred or the appropriate law enforcement agency to receive the report[^1]. While it’s critical for each reporting organization to decide how they navigate what to share in such reports, in practice the tools used to fulfill these obligations don’t easily let organizations who wish to make these reports ensure the information they have chosen to share is actionable for the recipient.

Our work with NCMEC focuses on designing the CyberTip reporting function in ROOST tools to integrate best practices regarding report quality and investigative value.By incorporating feedback from child safety and law enforcement experts, we're defining default data fields that align with hotlines and intake systems that capture the specific information investigators need to take action. This ensures that organizations using  Coop can make their reports  useful for protecting children and prosecuting offenders.

[Osprey]: https://github.com/roostorg/osprey
[Coop]: https://github.com/roostorg/osprey
[ROOST Model Community]: https://github.com/roostorg/model-community
[Discord server]: https://discord.gg/5Csqnw2FSQ
[GitHub Discussions]: https://github.com/orgs/roostorg/discussions

[^1]: [CyberTipline Data](https://www.missingkids.org/gethelpnow/cybertipline/cybertiplinedata)
