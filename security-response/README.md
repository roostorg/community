# Security Response Process and Security Releases
_To report a vulnerability or security issue, go to [SECURITY.md](https://github.com/roostorg/.github/blob/main/SECURITY.md)_

This page contains information on how ROOST handles reported security vulnerabilities. We refer to this as our "security response process," and to project releases made during this process as "security releases." 

## The Security response process
ROOST follows the principles of coordinated vulnerability disclosure (CVD). This means we prioritize working with the reporter to create, test, and distribute a fix. You can read more about CVD in open source projects from the [Open Source Security Foundation](https://github.com/ossf/oss-vulnerability-guide). 

### Life of a security report at ROOST
Anyone can submit a vulnerability report to ROOST. Submission directions are at [SECURITY.md](https://github.com/roostorg/.github/blob/main/SECURITY.md). Reports go to ROOST staff, who triage the report based on the potential severity and impact. The staff will validate the report through re-creation, and determine if it is a bug, missing feature, or security vulnerability. 

If it is a confirmed security vulnerability, the staff will begin developing and testing a patch. Technical Design Committee members or project code owners with relevant expertise may be brought in to validate the vulnerability or patch. A CVE will be created, and once a patch is verified, it will be staged for release and disclosure communications prepared. 

### Security releases
The severity, impact, and timing of the vulnerability will determine if the security patch is released as part of the next scheduled patch release, or a one-time, security release is tagged. In general, the default is to merge patches as soon as they are available and create security releases.  

Security releases will be announced through GitHub Security Advisories (visible in the "Security" tab on the corresponding project) and announced on the [security-announce@roost.tools mailing list](https://groups.google.com/a/roost.tools/g/security-announce). The announcement will describe the vulnerablity, the affected versions, and what if any action users need to take to apply the patch. 

If you are a vendor offering ROOST tools, you may receive early notification of security patch release dates. To qualify, your offering must be hosted in such a way that users cannot self-patch. Please email hello@roost.tools for more information.  

## Process evolution and ethos
As with other ROOST processes, our security response process will continuously evolve as our projects do and as we receive user feedback. Our ethos is to have the "minimum viable governance" for our security release process that is responsive to security reporters and effectively protects our users.  
