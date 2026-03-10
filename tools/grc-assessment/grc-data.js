const THEHGTECH_GRC_DATA = {
    "version": "1.3",
    "framework": "TheHGTech GRC Core Framework (ISO 27001:2022 Conceptually Aligned)",
    "domains": [
        {
            "id": "domain_5",
            "name": "Organizational Controls",
            "icon": "fa-sitemap",
            "description": "Foundational governance, strategic policies, and executive involvement required to secure the organization.",
            "controls": [
                {
                    "control_id": "5.1",
                    "control_title": "Information Security Policies",
                    "auditor_question": "Are information security policies defined, approved by management, published, and communicated to relevant personnel?",
                    "evidence_required": "Provide the master Information Security Policy with evidence of annual executive approval and distribution logs.",
                    "objective": "Ensure strategic alignment and management backing for the entire security program.",
                    "remediation_advice": "Draft a unified Information Security Policy document. Have the CEO or Board sign it. Set a recurring calendar invite for an annual review and update session."
                },
                {
                    "control_id": "5.2",
                    "control_title": "Information Security Roles and Responsibilities",
                    "auditor_question": "Are all information security responsibilities explicitly mapped to individual roles rather than ambiguous team designations?",
                    "evidence_required": "Provide an organizational chart highlighting security roles and job descriptions detailing explicit security duties.",
                    "objective": "Prevent security tasks from falling through the cracks by establishing clear, individual accountability.",
                    "remediation_advice": "Update HR job descriptions for IT and Security personnel to explicitly list their security responsibilities. Maintain an internal RACI matrix for incident response."
                },
                {
                    "control_id": "5.3",
                    "control_title": "Segregation of Duties",
                    "auditor_question": "Are conflicting duties (e.g., development vs. production deployment) separated to prevent unauthorized changes or fraud?",
                    "evidence_required": "Provide an access matrix or Git workflow documentation showing how developers are restricted from pushing directly to production without review.",
                    "objective": "Mitigate the risk of intentional fraud or accidental catastrophic errors by requiring a two-person rule for critical actions.",
                    "remediation_advice": "Enforce branch protection rules in GitHub/GitLab requiring at least one approving review before merging to main. Revoke direct production access for standard developers."
                },
                {
                    "control_id": "5.4",
                    "control_title": "Management Responsibilities",
                    "auditor_question": "Does management compel all active staff and contracted external parties to adhere strictly to established Information Security Policies?",
                    "evidence_required": "Provide the employee handbook or external contractor SLA agreement containing an explicitly signed Information Security acknowledgement.",
                    "objective": "Establish a legal and operational baseline mandating compliance from all parties accessing company data.",
                    "remediation_advice": "Incorporate a 'Security Acceptable Use' clause into all standard employment contracts and external vendor Master Service Agreements (MSAs)."
                },
                {
                    "control_id": "5.5",
                    "control_title": "Contact with Authorities",
                    "auditor_question": "Does the organization maintain documented, up-to-date contact channels with relevant law enforcement and regulatory authorities?",
                    "evidence_required": "Provide the organization's Incident Response Plan detailing exact phone numbers and emails for local regulatory bodies (e.g., CISA, FBI).",
                    "objective": "Ensure rapid legal escalation and compliance with breach notification laws during a critical cyber incident.",
                    "remediation_advice": "Create an 'Emergency Contacts' appendix within the primary Incident Response Plan listing law enforcement and legal counsel."
                },
                {
                    "control_id": "5.6",
                    "control_title": "Contact with Special Interest Groups",
                    "auditor_question": "Is the security team actively engaged with specialized intelligence forums, professional security associations, or ISACs?",
                    "evidence_required": "Provide a roster of current memberships to organizations like InfraGard, FS-ISAC, or ISACA.",
                    "objective": "Ensure the organization receives early warning of emerging threats specific to its industry.",
                    "remediation_advice": "Enlist key security personnel in relevant industry-specific Information Sharing and Analysis Centers (ISACs) or regional cybersecurity task forces."
                },
                {
                    "control_id": "5.7",
                    "control_title": "Threat Intelligence",
                    "auditor_question": "Is actionable tactical and strategic threat intelligence actively collected and utilized to fortify defensive controls?",
                    "evidence_required": "Provide evidence of an integrated Threat Intelligence Feed (e.g., inside a SIEM) or threat reports presented to management.",
                    "objective": "Transition the security posture from reactive to proactive by preemptively analyzing emerging adversary maneuvers.",
                    "remediation_advice": "Integrate open-source (OSINT) or commercial threat intelligence feeds via STIX/TAXII into your primary EDR or SIEM platform."
                },
                {
                    "control_id": "5.8",
                    "control_title": "Information Security in Project Management",
                    "auditor_question": "Are security requirements scoped and funded at the inception of all new projects, rather than bolted on at the end?",
                    "evidence_required": "Provide a project management charter or sprint planning template demonstrating a 'Security Review' gate.",
                    "objective": "Embed security natively into the Software Development Life Cycle (SDLC) or enterprise deployments (Shift-Left).",
                    "remediation_advice": "Require a formal security architecture review sign-off before any new major application or infrastructure change goes to production."
                },
                {
                    "control_id": "5.9",
                    "control_title": "Inventory of Information and Other Associated Assets",
                    "auditor_question": "Is an accurate, comprehensive inventory maintained outlining all critical information assets (including data, hardware, and software)?",
                    "evidence_required": "Provide the authoritative IT Asset Management (ITAM) database or spreadsheet listing assets and owners.",
                    "objective": "Provide definitive visibility over the organizational attack surface and assign accountability for every asset.",
                    "remediation_advice": "Deploy an automated ITAM discovery tool (e.g., Lansweeper, AWS Config) to continuously map and document active enterprise assets."
                },
                {
                    "control_id": "5.10",
                    "control_title": "Acceptable Use of Information and Other Associated Assets",
                    "auditor_question": "Are there explicit, documented rules governing the acceptable usage and handling guidelines for organizational tech assets?",
                    "evidence_required": "Provide the published Acceptable Use Policy (AUP) and evidence of employee attestation/signature upon hire.",
                    "objective": "Define clear boundaries to prevent shadow-IT and unsafe data handling practices by employees.",
                    "remediation_advice": "Draft an Acceptable Use Policy explicitly banning unauthorized browser extensions, personal cloud storage for work data, and unapproved generative AI tools."
                },
                {
                    "control_id": "5.11",
                    "control_title": "Return of Assets",
                    "auditor_question": "Is there a formal process ensuring employees and external parties return all organizational assets upon termination of their agreement?",
                    "evidence_required": "Provide an offboarding checklist signed by HR and IT confirming the return of a laptop and access badges for a recently departed employee.",
                    "objective": "Prevent hardware theft and unauthorized data retention by former personnel.",
                    "remediation_advice": "Implement a mandatory HR offboarding workflow that holds final offboarding sign-off until IT confirms physical asset retrieval."
                },
                {
                    "control_id": "5.12",
                    "control_title": "Classification of Information",
                    "auditor_question": "Is information classified in terms of legal requirements, value, criticality, and sensitivity (e.g., Public, Internal, Confidential)?",
                    "evidence_required": "Provide the Data Classification Policy and examples of classified documents.",
                    "objective": "Ensure information receives an appropriate level of protection based on its actual risk and value.",
                    "remediation_advice": "Establish a simple 3 or 4-tier data classification matrix (Public, Internal, Confidential, Restricted) and train employees on identifying data types."
                },
                {
                    "control_id": "5.13",
                    "control_title": "Labelling of Information",
                    "auditor_question": "Are sensitive documents and emails appropriately labelled according to the data classification scheme?",
                    "evidence_required": "Provide screenshots demonstrating email or document headers indicating 'Confidential' or 'Internal Use Only'.",
                    "objective": "Ensure personnel are constantly aware of the sensitivity of the data they are handling to prevent inadvertent disclosure.",
                    "remediation_advice": "Enable automated tagging in Microsoft Purview or Google Workspace to force employees to select a data classification unpon creating a new document or email."
                },
                {
                    "control_id": "5.14",
                    "control_title": "Information Transfer",
                    "auditor_question": "Are formal rules, procedures, and encrypted channels mandated for transferring information internally and to external parties?",
                    "evidence_required": "Provide the secure data transfer procedure and evidence of using secure mechanisms (e.g., SFTP, encrypted portals) over unencrypted email.",
                    "objective": "Protect data in transit from interception and tampering.",
                    "remediation_advice": "Mandate TLS 1.2+ for all data pathways and deploy a secure file transfer solution for sending large or sensitive files to external clients."
                },
                {
                    "control_id": "5.15",
                    "control_title": "Access Control",
                    "auditor_question": "Are rules governing logical and physical access control established and documented based on business requirements?",
                    "evidence_required": "Provide the formal Access Control Policy outlining Role-Based Access Control (RBAC) mandates.",
                    "objective": "Limit access exclusively to authorized entities based on the Principle of Least Privilege (PoLP).",
                    "remediation_advice": "Document an RBAC model specifying exactly what systems HR, Finance, and Engineering are allowed to access by default."
                },
                {
                    "control_id": "5.16",
                    "control_title": "Identity Management",
                    "auditor_question": "Is the complete lifecycle of digital identities (creation, modification, suspension) formally controlled and documented?",
                    "evidence_required": "Provide HR-to-IT onboarding/offboarding workflow documents and standard Service Desk ticketing logs.",
                    "objective": "Prevent unauthorized privilege escalation and ensure no orphaned accounts exist when employees leave.",
                    "remediation_advice": "Integrate HR software directly with the core Identity Provider (Okta/Entra) to trigger automated, instant account suspensions upon termination."
                },
                {
                    "control_id": "5.17",
                    "control_title": "Authentication Information",
                    "auditor_question": "Is the allocation and management of secret authentication information (passwords, API keys) strictly controlled?",
                    "evidence_required": "Provide evidence of a corporate password manager implementation or vaulting system for service account credentials.",
                    "objective": "Prevent the compromise of credentials through poor handling, plaintext storage, or shoulder surfing.",
                    "remediation_advice": "Deploy an enterprise password manager (e.g., 1Password, Bitwarden) and enforce rules banning the local storage of API keys in code."
                },
                {
                    "control_id": "5.18",
                    "control_title": "Access Rights",
                    "auditor_question": "Are detailed audits of user access rights across all critical systems conducted at regular, scheduled intervals?",
                    "evidence_required": "Provide the final sign-off sheet from a recent quarterly or bi-annual access review proving that stale accounts were removed.",
                    "objective": "Identify and revoke stale access or privilege creep that accumulates as personnel change roles over time.",
                    "remediation_advice": "Mandate quarterly User Access Reviews (UAR) where department heads must manually re-certify the exact software accesses possessed by their direct reports."
                },
                {
                    "control_id": "5.19",
                    "control_title": "Information Security in Supplier Relationships",
                    "auditor_question": "Are processes established to assess and manage information security risks associated with the use of supplier products and services?",
                    "evidence_required": "Provide a completed vendor risk assessment questionnaire or SOC 2 review for a major cloud provider or software vendor.",
                    "objective": "Mitigate risks introduced by supply chain dependencies and third-party data processing.",
                    "remediation_advice": "Implement a Vendor Risk Management (VRM) program. Require all critical vendors to provide a SOC 2 Type II report before finalizing procurement."
                },
                {
                    "control_id": "5.20",
                    "control_title": "Addressing Information Security within Supplier Agreements",
                    "auditor_question": "Are rigorous information security requirements contractually embedded in all agreements with third-party suppliers?",
                    "evidence_required": "Provide an SLA or vendor contract highlighting specific data breach notification clauses and security requirements.",
                    "objective": "Ensure legal enforcement of security standards across the vendor ecosystem.",
                    "remediation_advice": "Work with legal counsel to draft a standard 'Data Processing Agreement' (DPA) requiring vendors to report any breaches to you within 48-72 hours."
                },
                {
                    "control_id": "5.21",
                    "control_title": "Managing Information Security in the ICT Supply Chain",
                    "auditor_question": "Are specific processes established to manage security risks associated with Information and Communication Technology (ICT) products during their lifecycle?",
                    "evidence_required": "Provide evidence of Software Bill of Materials (SBOM) review or firmware integrity checking processes for acquired hardware/software.",
                    "objective": "Protect against implanted malware or backdoors in purchased technology products before deployment.",
                    "remediation_advice": "Require software vendors to provide an SBOM demonstrating that third-party open-source components are updated and free from known critical CVEs."
                },
                {
                    "control_id": "5.22",
                    "control_title": "Monitoring, Review and Change Management of Supplier Services",
                    "auditor_question": "Are suppliers actively monitored, and are changes to their service delivery reviewed to ensure security is maintained?",
                    "evidence_required": "Provide minutes from an annual vendor review meeting highlighting SLA performance or security incident follow-ups.",
                    "objective": "Ensure that a supplier's security posture does not degrade over the life of the contract.",
                    "remediation_advice": "Institute an annual reassessment policy for all Tier 1 vendors requiring them to submit updated compliance certifications (ISO/SOC2)."
                },
                {
                    "control_id": "5.23",
                    "control_title": "Information Security for Use of Cloud Services",
                    "auditor_question": "Are processes established to manage the shared responsibility model regarding acquisition, use, management, and exit from cloud services?",
                    "evidence_required": "Provide a cloud security architecture document outlining customer vs. provider responsibilities for platforms like AWS, GCP, or Azure.",
                    "objective": "Prevent misconfigurations in cloud environments by distinctly defining what the organization must actively secure.",
                    "remediation_advice": "Establish Cloud Security Posture Management (CSPM) tools to automatically check for misconfigurations like public S3 buckets in your cloud accounts."
                },
                {
                    "control_id": "5.24",
                    "control_title": "Information Security Incident Management Planning and Preparation",
                    "auditor_question": "Is a formalized, step-by-step incident response playbook actively maintained and approved by leadership?",
                    "evidence_required": "Provide the master Incident Response Plan (IRP) document.",
                    "objective": "Ensure a consistent, rapid, and legally compliant methodology is executed when a cyber attack occurs.",
                    "remediation_advice": "Draft an IRP utilizing the PICERL methodology (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned)."
                },
                {
                    "control_id": "5.25",
                    "control_title": "Assessment and Decision on Information Security Events",
                    "auditor_question": "Are documented procedures heavily utilized to rapidly assess security events and categorize them accurately as information security incidents?",
                    "evidence_required": "Provide the incident classification matrix grading severity (e.g., SEV-1 to SEV-4) based on business impact.",
                    "objective": "Ensure that genuine threats are escalated immediately while minimizing the noise of false positives.",
                    "remediation_advice": "Establish an alert triage flowchart detailing exactly who determines when a 'potential event' gets officially declared a 'security incident'."
                },
                {
                    "control_id": "5.26",
                    "control_title": "Response to Information Security Incidents",
                    "auditor_question": "Are incidents actively responded to in accordance with the documented procedures in the Incident Response Plan?",
                    "evidence_required": "Provide a post-incident report from a recent (or simulated) event showing containment, eradication, and communication timelines.",
                    "objective": "Limit the blast radius and damage caused by a cyber attack through coordinated, pre-planned actions.",
                    "remediation_advice": "Run an annual tabletop simulation encompassing ransomware scenarios to train executives and IT staff on rapid response workflows."
                },
                {
                    "control_id": "5.27",
                    "control_title": "Learning from Information Security Incidents",
                    "auditor_question": "Is knowledge gained from resolving security incidents actively used to improve controls and reduce the likelihood of future attacks?",
                    "evidence_required": "Provide a completed 'Lessons Learned' document resulting from a past incident or tabletop exercise, showing specific process improvements.",
                    "objective": "Create a continuous feedback loop that hardens the organization after every successful or attempted breach.",
                    "remediation_advice": "Mandate a 'Post-Mortem' meeting within 7 days of concluding any SEV-1 or SEV-2 incident to document gaps and assign remediation Jira tickets."
                },
                {
                    "control_id": "5.28",
                    "control_title": "Collection of Evidence",
                    "auditor_question": "Are procedures established for the identification, collection, acquisition, and preservation of digital evidence related to incidents?",
                    "evidence_required": "Provide the digital forensics policy detailing chain of custody procedures for compromised endpoints.",
                    "objective": "Ensure evidence remains legally admissible and intact for potential law enforcement prosecution or regulatory defense.",
                    "remediation_advice": "Establish a policy requiring the immediate disconnection (but not powering down) of compromised machines, and utilization of write-blockers during imaging."
                },
                {
                    "control_id": "5.29",
                    "control_title": "Information Security During Disruption",
                    "auditor_question": "Are primary security controls intentionally designed to remain active or fail-secure during massive system disruptions or disaster recovery scenarios?",
                    "evidence_required": "Provide the Business Continuity Plan (BCP) indicating that remote backup environments still strictly enforce access controls like MFA.",
                    "objective": "Prevent attackers from exploiting the chaos of an outage to access unprotected backup systems.",
                    "remediation_advice": "Audit the disaster recovery environment to ensure the exact same firewall rules and MFA conditional access policies are applied to the failover site."
                },
                {
                    "control_id": "5.30",
                    "control_title": "ICT Readiness for Business Continuity",
                    "auditor_question": "Is ICT readiness planned, implemented, maintained, and rigorously tested to ensure continuity of operations during disruptions?",
                    "evidence_required": "Provide an audit trail or sign-off form from an annual disaster recovery fail-over test.",
                    "objective": "Ensure the business can survive and operate despite hardware failures or localized disasters.",
                    "remediation_advice": "Conduct an annual full or partial failover test scaling application infrastructure to secondary regions/zones to verify recovery time objectives (RTOs)."
                },
                {
                    "control_id": "5.31",
                    "control_title": "Legal, Statutory, Regulatory and Contractual Requirements",
                    "auditor_question": "Are all relevant legal, statutory, regulatory, and contractual security requirements explicitly identified and kept up to date?",
                    "evidence_required": "Provide a compliance register tracking applicable laws (e.g., GDPR, CCPA, HIPAA) mapped to internal policies.",
                    "objective": "Avoid crippling fines or legal liabilities resulting from non-compliance with regional data protection laws.",
                    "remediation_advice": "Maintain a master spreadsheet (Compliance Register) detailing every jurisdiction you operate in and their specific data breach notification windows."
                },
                {
                    "control_id": "5.32",
                    "control_title": "Intellectual Property Rights",
                    "auditor_question": "Are procedures implemented to ensure compliance with legislative, regulatory, and contractual requirements on the use of intellectual property?",
                    "evidence_required": "Provide the software usage policy explicitly banning piracy and evidence of license management tools.",
                    "objective": "Protect the organization from catastrophic lawsuits driven by unlicensed software usage or copyright infringement.",
                    "remediation_advice": "Enforce strict endpoint security policies preventing users from installing external, unlicensed software. Utilize MDM to audit installed applications."
                },
                {
                    "control_id": "5.33",
                    "control_title": "Protection of Records",
                    "auditor_question": "Are organizational records heavily protected from loss, destruction, falsification, and unauthorized access in accordance with retention needs?",
                    "evidence_required": "Provide the Data Retention Policy and evidence of immutable, WORM (Write Once Read Many) storage used for critical logs or financial records.",
                    "objective": "Ensure the integrity and availability of historical data required for compliance or potential litigation.",
                    "remediation_advice": "Enable Object Lock or compliance-mode retention policies on AWS S3 buckets storing audit trails to prevent deletion by ransomware."
                },
                {
                    "control_id": "5.34",
                    "control_title": "Privacy and Protection of PII",
                    "auditor_question": "Are stringent processes in place to ensure the privacy and protection of Personally Identifiable Information (PII) according to relevant legislation?",
                    "evidence_required": "Provide the external Privacy Policy and the internal procedures for handling Data Subject Access Requests (DSARs).",
                    "objective": "Safeguard user privacy and prevent costly class-action lawsuits or fines under frameworks like GDPR or CCPA.",
                    "remediation_advice": "Implement data mapping to understand exactly where PII flows. Build a standardized, trackable process for honoring user deletion requests within 30 days."
                },
                {
                    "control_id": "5.35",
                    "control_title": "Independent Review of Information Security",
                    "auditor_question": "Is the organization's approach to managing information security reviewed independently at planned intervals?",
                    "evidence_required": "Provide the executive summary from a recent external penetration test or an external ISO/SOC2 audit report.",
                    "objective": "Eliminate blind spots by having an unbiased, third-party subject matter expert validate the internal security posture.",
                    "remediation_advice": "Conduct an annual penetration test performed by an entirely external cyber security consultancy. Track their findings to full remediation."
                },
                {
                    "control_id": "5.36",
                    "control_title": "Compliance with Policies, Rules and Standards",
                    "auditor_question": "Do managers consistently review the compliance of information processing within their domain of responsibility against security policies?",
                    "evidence_required": "Provide minutes from a monthly or quarterly management meeting outlining the remediation of identified internal policy deviations.",
                    "objective": "Ensure that security operations are acting in accordance with the theoretical rules set by governance.",
                    "remediation_advice": "Establish an internal audit schedule. Have department heads conduct self-assessments against the core critical controls and report to the CISO."
                },
                {
                    "control_id": "5.37",
                    "control_title": "Documented Operating Procedures",
                    "auditor_question": "Are operating procedures for all critical information processing facilities documented, maintained, and continually available to personnel?",
                    "evidence_required": "Provide an internal wiki page (e.g., Confluence) containing standardized Runbooks detailing the exact server patching or reboot process.",
                    "objective": "Ensure knowledge is not isolated to single individuals and operational errors are minimized during maintenance.",
                    "remediation_advice": "Require Engineering and IT to document standard operating procedures (SOPs) for all infrastructure tasks. Review SOPs annually."
                }
            ]
        },
        {
            "id": "domain_6",
            "name": "People Controls",
            "icon": "fa-users",
            "description": "Lifecycle security for employees, contractors, and human error mitigation.",
            "controls": [
                {
                    "control_id": "6.1",
                    "control_title": "Screening",
                    "auditor_question": "Are background verification checks carried out for all candidates prior to employment, proportional to business requirements?",
                    "evidence_required": "Provide HR policy on background checks and an anonymized receipt/report from your background check vendor for a recent hire.",
                    "objective": "Reduce the risk of insider threats by verifying candidate history before granting access to sensitive assets.",
                    "remediation_advice": "Partner with a background screening vendor (e.g., Checkr) and make a cleared background check a mandatory condition in all employment offer letters."
                },
                {
                    "control_id": "6.2",
                    "control_title": "Terms and Conditions of Employment",
                    "auditor_question": "Do employment agreements explicitly state the employee's legal responsibilities for protecting the organization's confidential data?",
                    "evidence_required": "Provide a standard template employment contract containing an NDA and an information security responsibility clause.",
                    "objective": "Establish a legally binding obligation for personnel to protect company assets both during and after their tenure.",
                    "remediation_advice": "Require all new hires and contractors to sign a Non-Disclosure Agreement (NDA) on Day 1 before receiving access to any internal IT systems."
                },
                {
                    "control_id": "6.3",
                    "control_title": "Information Security Awareness, Education and Training",
                    "auditor_question": "Do all employees and contractors receive ongoing, relevant information security awareness training?",
                    "evidence_required": "Provide the completion report from your training platform showing >95% completion rate for the current year, and the curriculum syllabus.",
                    "objective": "Transform the workforce into a human firewall to detect social engineering and phishing.",
                    "remediation_advice": "Deploy a security awareness platform (e.g., KnowBe4). Mandate training during onboarding and annually thereafter. Conduct monthly simulated phishing campaigns."
                },
                {
                    "control_id": "6.4",
                    "control_title": "Disciplinary Process",
                    "auditor_question": "Is there a formal, communicated disciplinary process utilized when employees commit severe internal security policy violations?",
                    "evidence_required": "Provide the HR penalty matrix outlining actions taken for repeat security offenses (e.g., failing phishing tests repeatedly vs. intentional data exfiltration).",
                    "objective": "Deter intentional insider threats by outlining severe, concrete consequences for malicious or recklessly negligent actions.",
                    "remediation_advice": "Publish a disciplinary playbook alongside the security policy outlining escalating warnings up to and including termination for severe security violations."
                },
                {
                    "control_id": "6.5",
                    "control_title": "Responsibilities After Termination or Change of Employment",
                    "auditor_question": "Are information security responsibilities and duties that remain valid after termination explicitly defined, documented, and enforced?",
                    "evidence_required": "Provide exit interview documentation proving departing employees are explicitly reminded of their ongoing NDA obligations.",
                    "objective": "Ensure highly sensitive intellectual property is not stolen or leaked to competitors upon an employee's departure.",
                    "remediation_advice": "Create an HR exit-interview checklist requiring departing personnel to surrender all physical hardware and sign a document reaffirming their post-employment confidentiality agreement."
                },
                {
                    "control_id": "6.6",
                    "control_title": "Confidentiality or Non-disclosure Agreements",
                    "auditor_question": "Are universally robust NDAs executed outlining the exact definitions and handling instructions for confidential information?",
                    "evidence_required": "Provide a copy of the active corporate NDA template. Highlight definitions of what constitutes 'Confidential Information'.",
                    "objective": "Provide strong legal recourse in the event of unauthorized organizational data leakage.",
                    "remediation_advice": "Audit current contractor agreements to ensure NDAs natively cover modern data scopes (like source code, customer DBs, and API documentation)."
                },
                {
                    "control_id": "6.7",
                    "control_title": "Remote Working",
                    "auditor_question": "Are technical and policy-based security measures implemented to protect information accessed, processed, or stored at remote working sites?",
                    "evidence_required": "Provide the Remote Work Security Policy detailing the requirement for VPNs and the prohibition of using public Wi-Fi natively.",
                    "objective": "Address the expanded attack surface created by 'Work From Anywhere' models and home networks.",
                    "remediation_advice": "Deploy Always-On corporate VPNs (e.g., Zscaler, GlobalProtect) and mandate Full Disk Encryption (BitLocker/FileVault) for all mobile endpoints."
                },
                {
                    "control_id": "6.8",
                    "control_title": "Information Security Event Reporting",
                    "auditor_question": "Is there a simple, documented, and universally understood mechanism for employees to report suspected security weaknesses or incidents?",
                    "evidence_required": "Provide a screenshot of the internal 'Report a Phishing Email' button or the intranet page detailing how to contact the security team.",
                    "objective": "Ensure rapid detection of incidents by empowering the entire company to report anomalies.",
                    "remediation_advice": "Add a 'Phish Alert' button to employee email clients. Create a dedicated Slack/Teams channel (e.g., #security-alerts) and document the escalation path during onboarding."
                }
            ]
        },
        {
            "id": "domain_7",
            "name": "Physical Controls",
            "icon": "fa-building",
            "description": "Perimeter security, badging, facility protections, and environmental controls.",
            "controls": [
                {
                    "control_id": "7.1",
                    "control_title": "Physical Security Perimeters",
                    "auditor_question": "Are security perimeters (e.g., walls, card-controlled gates, staffed reception desks) utilized to protect areas containing sensitive information?",
                    "evidence_required": "Provide a floor plan highlighting secure zones and logs showing badge entry requirements for the server room or main office.",
                    "objective": "Prevent unauthorized physical access, damage, and interference to the organization's information and information processing facilities.",
                    "remediation_advice": "Install electronic badge readers at all primary entrances. Implement a strict visitor management system requiring sign-ins, ID checks, and guest escorts."
                },
                {
                    "control_id": "7.2",
                    "control_title": "Physical Entry",
                    "auditor_question": "Are secure areas protected by robust entry controls to ensure only authorized personnel are allowed access?",
                    "evidence_required": "Provide an audit log showing that electronic access to the MDF/Server room is explicitly restricted down to authorized IT personnel directly.",
                    "objective": "Mitigate the risk of 'tailgating' and ensure a forensic audit trail of all physical human motion into high-risk zones.",
                    "remediation_advice": "Implement anti-passback rules on badge readers for critical datacenters to completely eliminate tailgating."
                },
                {
                    "control_id": "7.3",
                    "control_title": "Securing Offices, Rooms and Facilities",
                    "auditor_question": "Is physical security tailored to address specific risks introduced by the precise nature of the facility (e.g., windows facing public streets)?",
                    "evidence_required": "Provide evidence of privacy filming on ground floor windows or the physical relocation of sensitive print servers away from public lobbies.",
                    "objective": "Prevent opportunistic or targeted external visibility of proprietary actions inside the physical boundary.",
                    "remediation_advice": "Ensure no monitors displaying financial or customer data are visible from public hallways or exterior glass walls."
                },
                {
                    "control_id": "7.4",
                    "control_title": "Physical Security Monitoring",
                    "auditor_question": "Are premises continuously monitored for unauthorized physical access via intrusion alarms and CCTV?",
                    "evidence_required": "Provide CCTV retention policy (e.g., 30 days) and a maintenance log or invoice from the physical security monitoring vendor.",
                    "objective": "Deter physical intrusion and provide forensic evidence in the event of a facility breach.",
                    "remediation_advice": "Install CCTV cameras covering all entry/exit points and high-security zones (server rooms). Ensure cameras record to a secure, tamper-proof location."
                },
                {
                    "control_id": "7.5",
                    "control_title": "Protecting Against External and Environmental Threats",
                    "auditor_question": "Are essential IT facilities specifically hardened against environmental hazards like fires, floods, and large-scale power failures?",
                    "evidence_required": "Provide the service record for the server room's FM-200 fire suppression system, or evidence of Uninterruptible Power Supplies (UPS).",
                    "objective": "Maintain business continuity by protecting critical hardware against destructive physical acts of nature.",
                    "remediation_advice": "Deploy water-leak detection sensors under data room raised floors and install massive UPS battery backups configured for automated graceful server shutdowns."
                },
                {
                    "control_id": "7.6",
                    "control_title": "Working in Secure Areas",
                    "auditor_question": "Are special restrictions applied and monitored for personnel operating directly inside highly secure zones?",
                    "evidence_required": "Provide facility policy indicating that no photographic devices or mobile phones are authorized on the datacenter floor.",
                    "objective": "Prevent the exfiltration of data via unauthorized physical media or photography in highly classified operations centers.",
                    "remediation_advice": "Erect clear signage prohibiting camera use or unescorted visitor access on the walls of secure facilities and server rooms."
                },
                {
                    "control_id": "7.7",
                    "control_title": "Clear Desk and Clear Screen",
                    "auditor_question": "Is there a policy enforcing that sensitive physical documents are locked away and computer screens are locked when unattended?",
                    "evidence_required": "Provide the acceptable use policy detailing clean desk rules, and a screenshot of the group policy object (GPO) enforcing a 15-minute screen lock timeout.",
                    "objective": "Reduce the risk of opportunistic data theft from vacant workspaces.",
                    "remediation_advice": "Enforce a forced screen lock via MDM (Intune, Jamf) after 10-15 minutes of inactivity. Provide lockable filing cabinets for departments handling paper records."
                },
                {
                    "control_id": "7.8",
                    "control_title": "Equipment Siting and Protection",
                    "auditor_question": "Is IT equipment positioned and protected to minimize risks from unauthorized access, interception, or environmental hazards?",
                    "evidence_required": "Provide evidence that core network switches are locked in secure MDF closets, not exposed on open office walls.",
                    "objective": "Prevent basic physical hardware tampering (e.g., unplugging network cables, plugging in unauthorized rogue access points).",
                    "remediation_advice": "Ensure all networking equipment, switches, and core routers are kept inside locked, ventilated racks where access is tightly restricted."
                },
                {
                    "control_id": "7.9",
                    "control_title": "Security of Assets Off-Premises",
                    "auditor_question": "Are organizational assets secured appropriately when taken off-premises, considering the different risks compared to office locations?",
                    "evidence_required": "Provide policy restricting leaving corporate laptops in unattended vehicles, and MDM policy enforcing full disk encryption.",
                    "objective": "Ensure data remains protected when hardware travels into volatile public environments.",
                    "remediation_advice": "Mandate the use of privacy screens for traveling employees and enforce BitLocker/FileVault encryption to protect data if the asset is stolen."
                },
                {
                    "control_id": "7.10",
                    "control_title": "Storage Media",
                    "auditor_question": "Are removable storage media strictly managed, tracked, and securely destroyed when no longer needed?",
                    "evidence_required": "Provide the policy banning unencrypted USB usage or a log showing the destruction of legacy backup tapes.",
                    "objective": "Prevent data loss through inherently insecure and easily misplaced portable storage devices.",
                    "remediation_advice": "Use Endpoint Detection and Response (EDR) to block USB mass storage capabilities entirely, or restrict usage to company-issued hardware-encrypted USBs only."
                },
                {
                    "control_id": "7.11",
                    "control_title": "Supporting Utilities",
                    "auditor_question": "Is equipment protected from power failures and other disruptions caused by failures in supporting utilities?",
                    "evidence_required": "Provide maintenance logs for standby diesel generators or documentation of primary/secondary redundant power circuit lines.",
                    "objective": "Ensure IT continuity despite grid-level electrical or cooling failures.",
                    "remediation_advice": "Connect critical servers and cooling infrastructure to Uninterruptible Power Supplies (UPS) and routinely test automatic failover to backup generators."
                },
                {
                    "control_id": "7.12",
                    "control_title": "Cabling Security",
                    "auditor_question": "Are power and telecommunications cabling carrying data or supporting information services protected from interception or damage?",
                    "evidence_required": "Provide physical evidence or policy stating all network cables are run in locked conduits or wire trays away from public reach.",
                    "objective": "Prevent physical wiretapping or accidental network severing.",
                    "remediation_advice": "Ensure all physical cabling routing is shielded and kept entirely within the secured corporate physical perimeter, avoiding public access zones."
                },
                {
                    "control_id": "7.13",
                    "control_title": "Equipment Maintenance",
                    "auditor_question": "Is equipment correctly maintained to ensure its continuous availability, integrity, and confidentiality?",
                    "evidence_required": "Provide a service schedule or vendor maintenance contract for critical network infrastructure.",
                    "objective": "Prevent unexpected hardware failure driven by lack of routine maintenance.",
                    "remediation_advice": "Log and track the lifecycle and warranty status of all physical hardware. Apply firmware updates rigorously to infrastructure layer devices."
                },
                {
                    "control_id": "7.14",
                    "control_title": "Secure Disposal or Re-use of Equipment",
                    "auditor_question": "Are rigorous checks applied when equipment is disposed of or reassigned to guarantee that all sensitive data is securely wiped?",
                    "evidence_required": "Provide cryptographic wipe logs (e.g., NIST 800-88 compliant) or physical destruction certificates from an e-waste vendor.",
                    "objective": "Preclude the recovery of organizational data from legacy hardware sold on secondary markets.",
                    "remediation_advice": "Partner with a certified e-waste provider to physically shred old hard drives, and issue certificates of destruction for your compliance records."
                }
            ]
        },
        {
            "id": "domain_8",
            "name": "Technological Controls",
            "icon": "fa-server",
            "description": "Cybersecurity architecture, cryptography, endpoint protection, and operational technology.",
            "controls": [
                {
                    "control_id": "8.1",
                    "control_title": "User Endpoint Devices",
                    "auditor_question": "Are all organizational endpoints (laptops, mobile devices) centrally managed and secured through Mobile Device Management (MDM)?",
                    "evidence_required": "Provide a screenshot from the MDM console showing inventory and applied policies (e.g., remote wipe enabled, disk encryption enforced).",
                    "objective": "Ensure all devices touching company data meet baseline security configurations and can be wiped if lost or stolen.",
                    "remediation_advice": "Deploy an MDM solution like Microsoft Intune or Jamf Pro. Enforce policies requiring BitLocker/FileVault encryption, complex passwords, and automatic OS updates."
                },
                {
                    "control_id": "8.2",
                    "control_title": "Privileged Access Rights",
                    "auditor_question": "Are privileged (administrator or root) access rights tightly restricted, heavily monitored, and only allocated definitively on a strict business-need basis?",
                    "evidence_required": "Provide the active list of Global Admins in the cloud tenant and an audit log demonstrating MFA is required and logs are actively monitored for privileged commands.",
                    "objective": "Limit the blast radius should a high-level administrative account be fully compromised.",
                    "remediation_advice": "Implement Privileged Access Management (PAM) tools. Require Just-In-Time (JIT) access requests for production databases instead of standing always-on admin rights."
                },
                {
                    "control_id": "8.3",
                    "control_title": "Information Access Restriction",
                    "auditor_question": "Are technological controls enforced to ensure users or systems can only read/write data in accordance with the established access control policy?",
                    "evidence_required": "Provide evidence of File Share Permissions or Cloud IAM Role definitions demonstrating strict boundary enforcement separating department data.",
                    "objective": "Ensure technical environments mirror the theoretical policies regarding 'Least Privilege'.",
                    "remediation_advice": "Conduct an audit of AWS IAM Policies to ensure no overarching 'AdministratorAccess' wildcards (*) are tied to standard user or developer accounts."
                },
                {
                    "control_id": "8.4",
                    "control_title": "Access to Source Code",
                    "auditor_question": "Is read and write access to the organization's proprietary source code strictly controlled and logged?",
                    "evidence_required": "Provide Git repository settings showing that direct pushes to 'main' are banned and only approved engineers can view high-value algorithm repos.",
                    "objective": "Prevent the theft of crucial intellectual property and stop the injection of malicious supply-chain backdoors into product code.",
                    "remediation_advice": "Enforce strong RBAC controls inside GitHub/GitLab. Maintain detailed audit logs of all user clones, pulls, and pushes."
                },
                {
                    "control_id": "8.5",
                    "control_title": "Secure Authentication",
                    "auditor_question": "Is Multi-Factor Authentication (MFA) strictly enforced universally for accessing internal systems, VPNs, and cloud applications?",
                    "evidence_required": "Provide the IdP (Identity Provider) conditional access policy proving MFA is enforced globally without bypasses for standard users.",
                    "objective": "Virtually eliminate the risk of account takeovers resulting from compromised or reused passwords.",
                    "remediation_advice": "Implement SSO via Okta or Entra ID and enforce MFA for all applications. Transition away from SMS-based MFA to Authenticator Apps or hardware tokens (e.g., YubiKey)."
                },
                {
                    "control_id": "8.6",
                    "control_title": "Capacity Management",
                    "auditor_question": "Is the ongoing capacity (compute, storage, bandwidth) of critical systems actively monitored to prevent resource exhaustion and service outages?",
                    "evidence_required": "Provide screenshots from AWS CloudWatch or Datadog showing automated alerting when server CPU or disk space exceeds 80% utilization.",
                    "objective": "Protect system availability against unexpected traffic surges or inadvertent internal resource starvation (Denial of Service).",
                    "remediation_advice": "Configure automated infrastructure monitoring tools to ping the engineering team via PagerDuty/Slack if server storage crosses critical capacity thresholds."
                },
                {
                    "control_id": "8.7",
                    "control_title": "Protection Against Malware",
                    "auditor_question": "Are modern, signature-less, and behavioral anti-malware (EDR/XDR) controls deployed and centrally monitored on all endpoints and servers?",
                    "evidence_required": "Provide the dashboard screenshot of an active EDR (e.g., CrowdStrike, SentinelOne) showing all fleets are covered and definitions are actively updating.",
                    "objective": "Detect, block, and contain complex malware, ransomware, and fileless attacks before they execute.",
                    "remediation_advice": "Upgrade legacy signature-based antivirus to a Next-Generation Endpoint Detection and Response (EDR) platform offering behavioral telemetry."
                },
                {
                    "control_id": "8.8",
                    "control_title": "Management of Technical Vulnerabilities",
                    "auditor_question": "Is a technical vulnerability management program in place that scans systems regularly and patches critical flaws within defined SLAs?",
                    "evidence_required": "Provide the most recent vulnerability scan report and evidence that a critical CVE was patched within the mandated SLA (e.g., 14 days).",
                    "objective": "Prevent exploitation by identifying and remediating known software vulnerabilities rapidly.",
                    "remediation_advice": "Deploy a continuous vulnerability scanner (e.g., Nessus, Qualys, or built-in EDR vulnerability modules). Establish an SLA requiring critical CVSS > 9.0 patches within 7-14 days."
                },
                {
                    "control_id": "8.9",
                    "control_title": "Configuration Management",
                    "auditor_question": "Are hardened, baseline security configurations systematically deployed and monitored for drift across all IT architectures?",
                    "evidence_required": "Provide evidence of an automated configuration tool (Ansible, Terraform) or CIS Benchmark scans indicating systems match secure baselines.",
                    "objective": "Ensure servers and cloud infrastructure are not deployed with insecure default settings (e.g., open S3 buckets, default admin passwords).",
                    "remediation_advice": "Adopt Center for Internet Security (CIS) Benchmarks for OS hardening. Utilize Infrastructure as Code (IaC) to lock down cloud deployments."
                },
                {
                    "control_id": "8.10",
                    "control_title": "Information Deletion",
                    "auditor_question": "Are procedures implemented to ensure sensitive data is securely and irrecoverably wiped from IT systems when it is no longer required?",
                    "evidence_required": "Provide a certificate of destruction from an IT asset disposal vendor, or the script used to cryptographically wipe cloud storage volumes.",
                    "objective": "Comply with data privacy 'Right to be Forgotten' laws and prevent data harvesting from decommissioned hardware.",
                    "remediation_advice": "Contract with a certified, environmentally compliant electronic waste destruction firm to securely shred old hard drives."
                },
                {
                    "control_id": "8.11",
                    "control_title": "Data Masking",
                    "auditor_question": "Is sensitive data (such as PII or PCI) masked, anonymized, or tokenized according to organizational policy before being used in testing environments?",
                    "evidence_required": "Provide architectural diagrams or database procedures showing that live production user data is never copied 'in the clear' into UAT or QA sandbox networks.",
                    "objective": "Minimize the exposure of highly sensitive customer data to lower-security development and testing environments.",
                    "remediation_advice": "Implement automated data scrubbing/masking scripts that swap out realistic names and credit cards for dummy data during the production database copy process."
                },
                {
                    "control_id": "8.12",
                    "control_title": "Data Leakage Prevention",
                    "auditor_question": "Are technical controls deployed to detect and prevent the unauthorized exfiltration of sensitive data to external unapproved platforms?",
                    "evidence_required": "Provide the DLP policy configuration showing blocks on transferring PII to personal cloud storage (e.g., personal Google Drive, USB drives).",
                    "objective": "Stop insider threats and compromised accounts from stealing massive amounts of intellectual property.",
                    "remediation_advice": "Configure Microsoft Purview or your EDR to block USB mass storage devices. Implement rules blocking the upload of documents marked 'Confidential' to non-corporate domains."
                },
                {
                    "control_id": "8.13",
                    "control_title": "Information Backup",
                    "auditor_question": "Are backup copies of critical information, software, and systems maintained and regularly tested in accordance with the agreed backup policy?",
                    "evidence_required": "Provide the Backup Policy detailing frequency schedules, plus the log file from a successful backup restoration test conducted in the last quarter.",
                    "objective": "Ensure survival and recovery from massive data loss events, particularly coordinated ransomware encryption attacks.",
                    "remediation_advice": "Implement a 3-2-1 backup strategy. Critically, ensure at least one full backup copy is immutable and air-gapped from the primary production domain to survive ransomware."
                },
                {
                    "control_id": "8.14",
                    "control_title": "Redundancy of Information Processing Facilities",
                    "auditor_question": "Are critical IT infrastructures equipped with high-availability or sufficient redundancy to meet the required Service Level Agreements (SLAs)?",
                    "evidence_required": "Provide cloud architecture showing multi-AZ (Availability Zone) active-active deployments or load balancers configured for automatic failover.",
                    "objective": "Eliminate Single Points of Failure (SPOFs) that could lead to widespread organizational downtime.",
                    "remediation_advice": "Architect critical core web applications across at least two distinct geographic cloud availability zones using active-active load balancing."
                },
                {
                    "control_id": "8.15",
                    "control_title": "Logging",
                    "auditor_question": "Are logs recording user activities, exceptions, faults, and information security events continuously produced, securely centralized, and protected against tampering?",
                    "evidence_required": "Provide a screenshot of the SIEM or central log aggregation tool (e.g., Splunk, ELK) demonstrating ingest from firewalls, servers, and IdPs.",
                    "objective": "Enable comprehensive post-incident forensic investigations and real-time threat detection analytic alerts.",
                    "remediation_advice": "Ship all endpoint, firewall, and authentication logs to a centralized, write-once-read-many (WORM) storage bucket or a dedicated SIEM platform."
                },
                {
                    "control_id": "8.16",
                    "control_title": "Monitoring Activities",
                    "auditor_question": "Are centralized logs and networks continuously monitored by analytic systems or personnel to detect anomalous behavior and potential security events?",
                    "evidence_required": "Provide the SLA from an external Managed Detection and Response (MDR) provider or SOC, and a screenshot of the primary SIEM alerting dashboard.",
                    "objective": "Reduce the total dwell-time of an active adversary operating inside the network by detecting them rapidly.",
                    "remediation_advice": "If an internal 24/7/365 Security Operations Center (SOC) is not feasible, contract with a reputable MDR vendor to actively monitor telemetry and triage alerts."
                },
                {
                    "control_id": "8.17",
                    "control_title": "Clock Synchronization",
                    "auditor_question": "Are the clocks of all internal information processing systems synchronized to a single, authoritative external time source?",
                    "evidence_required": "Provide evidence of Network Time Protocol (NTP) configurations pulling from a standard source like time.nist.gov.",
                    "objective": "Ensure log timestamps are perfectly accurate to allow complex post-incident forensic correlation across multiple systems.",
                    "remediation_advice": "Configure all servers, domain controllers, and networking equipment to sync to a trusted, authoritative NTP server."
                },
                {
                    "control_id": "8.18",
                    "control_title": "Use of Privileged Utility Programs",
                    "auditor_question": "Is the use of utility programs capable of overriding system and application controls tightly restricted and closely audited?",
                    "evidence_required": "Provide evidence restricting tools like PsExec or mimikatz inside the EDR policies.",
                    "objective": "Prevent the abuse of legitimate administrative dual-use tools by malicious actors to bypass standard security monitoring.",
                    "remediation_advice": "Audit systems for high-risk administration tools. Restrict execution of these utilities to explicit administrative jump-boxes."
                },
                {
                    "control_id": "8.19",
                    "control_title": "Installation of Software on Operational Systems",
                    "auditor_question": "Are robust procedures and technical controls in place to strictly manage and authorize the installation of software on operational systems?",
                    "evidence_required": "Provide evidence of an application whitelisting deployment or MDM policy prohibiting standard users from installing software.",
                    "objective": "Stop the execution of malicious software, unsanctioned shadow IT, and unlicensed applications.",
                    "remediation_advice": "Revoke local administrator rights from all standard users and deploy an application control solution (e.g., AppLocker) to strictly whitelist authorized binaries."
                },
                {
                    "control_id": "8.20",
                    "control_title": "Networks Security",
                    "auditor_question": "Are networks fundamentally secured and actively managed to protect the information residing on them?",
                    "evidence_required": "Provide network topology diagrams highlighting stateful firewalls, intrusion detection systems (IDS), and DMZs.",
                    "objective": "Control the flow of traffic and block unauthorized external intrusion attempts traversing the network.",
                    "remediation_advice": "Deploy Next-Generation Firewalls (NGFW) with deep packet inspection capabilities and implement strict egress filtering rules closing unused outbound ports."
                },
                {
                    "control_id": "8.21",
                    "control_title": "Security of Network Services",
                    "auditor_question": "Are the security mechanisms, service levels, and management requirements of any network services formally identified and included in supplier agreements?",
                    "evidence_required": "Provide SLAs for network service providers (e.g., ISPs or Cloud connectivity partners) noting DDoS protection or guaranteed uptime.",
                    "objective": "Ensure essential network services provided by third parties are resilient against attack.",
                    "remediation_advice": "Procure Managed DDoS protection (e.g., Cloudflare, AWS Shield) for critical external-facing routing infrastructure."
                },
                {
                    "control_id": "8.22",
                    "control_title": "Segregation of Networks",
                    "auditor_question": "Is the network segmented to isolate sensitive data environments (e.g., production databases, PCI environments) from general corporate usage and guest Wi-Fi?",
                    "evidence_required": "Provide a network topology diagram and firewall rules proving that guest Wi-Fi cannot route to internal servers.",
                    "objective": "Contain horizontal propagation (lateral movement) of malware or threat actors if an initial endpoint is compromised.",
                    "remediation_advice": "Implement Zero Trust Network Access (ZTNA) or strict VLANs with internal firewalls. Use AWS VPC subnetting and Security Groups to restrict traffic to only required ports."
                },
                {
                    "control_id": "8.23",
                    "control_title": "Web Filtering",
                    "auditor_question": "Is access to external websites strictly managed and filtered to reduce exposure to malicious content?",
                    "evidence_required": "Provide the web proxy or DNS filtering dashboard showing active blocks against categorizations like 'Malware Sites', 'Phishing', and 'Adult Content'.",
                    "objective": "Prevent employees from intentionally or inadvertently navigating to websites that serve malware or drain productivity.",
                    "remediation_advice": "Deploy a DNS-level web filtering solution (e.g., Cisco Umbrella, NextDNS) to block resolution of known malicious domains enterprise-wide."
                },
                {
                    "control_id": "8.24",
                    "control_title": "Use of Cryptography",
                    "auditor_question": "Are rigorous rules in place for the cryptographic protection of data at rest and data in transit, securely managing keys throughout their whole lifecycle?",
                    "evidence_required": "Provide the Cryptography Policy and evidence that data is encrypted in transit (TLS 1.2+) and at rest (AES-256).",
                    "objective": "Prevent the exposure of sensitive data to parties intercepting network traffic or physically stealing hard disks.",
                    "remediation_advice": "Mandate TLS 1.2+ minimum on all web applications. Utilize managed Key Management Services (AWS KMS, Azure Key Vault) to protect database encryption keys."
                },
                {
                    "control_id": "8.25",
                    "control_title": "Secure Development Life Cycle",
                    "auditor_question": "Are rigid rules for the secure development of software and systems established and applied from the initial design phase through production deployment?",
                    "evidence_required": "Provide the formal DevSecOps / SDLC policy document outlining required security gates (e.g., code reviews, DAST scanning).",
                    "objective": "Prevent the introduction of systemic software vulnerabilities into the proprietary technology stack.",
                    "remediation_advice": "Adopt a DevSecOps pipeline model. Integrate automated SAST (Static Application Security Testing) tools directly into the CI/CD pipeline."
                },
                {
                    "control_id": "8.26",
                    "control_title": "Application Security Requirements",
                    "auditor_question": "Are baseline information security requirements rigorously identified, specified, and approved when developing or acquiring new applications?",
                    "evidence_required": "Provide a product requirements document (PRD) demonstrating security prerequisites (e.g., 'must support SAML SSO') were scoped before procurement.",
                    "objective": "Ensure software is securely designed by default, mitigating the high cost of retroactively bolting on security later.",
                    "remediation_advice": "Create an 'Application Security Checklist' that engineering must complete during the requirements gathering phase of any new project."
                },
                {
                    "control_id": "8.27",
                    "control_title": "Secure System Architecture and Engineering Principles",
                    "auditor_question": "Are secure engineering principles actively utilized and documented when designing new IT architectures?",
                    "evidence_required": "Provide architecture design documentation showing adherence to principles like 'Defense in Depth' or 'Fail Secure'.",
                    "objective": "Ensure technical environments are engineered to inherently limit the impact of a partial compromise.",
                    "remediation_advice": "Train site-reliability and architecture engineering teams on standard secure architecture models like Zero Trust and Defense in Depth."
                },
                {
                    "control_id": "8.28",
                    "control_title": "Secure Coding",
                    "auditor_question": "Are secure coding principles actively applied by developers to minimize the introduction of vulnerabilities like those found in the OWASP Top 10?",
                    "evidence_required": "Provide the secure coding checklist and evidence of SAST scanning blocking a build due to a critical hardcoded credential.",
                    "objective": "Eliminate fundamentally exploitable logic flaws (like SQL injection or XSS) directly in the source code.",
                    "remediation_advice": "Train developers annually on the OWASP Top 10. Implement IDE-level linting tools to catch insecure code patterns as they are typed."
                },
                {
                    "control_id": "8.29",
                    "control_title": "Security Testing in Development and Acceptance",
                    "auditor_question": "Are intensive security testing processes rigorously performed and validated during the software development life cycle?",
                    "evidence_required": "Provide a Dynamic Application Security Testing (DAST) scan report or external penetration test results from the pre-production environment.",
                    "objective": "Ensure applications are functionally validated against real-world attack simulations before interacting with live customer data.",
                    "remediation_advice": "Integrate automated DAST tools into the UAT (User Acceptance Testing) environment to dynamically attack the application before production release."
                },
                {
                    "control_id": "8.30",
                    "control_title": "Outsourced Development",
                    "auditor_question": "Are the exact same rigorous security boundaries and processes mandated for external outsourced software developers as internal staff?",
                    "evidence_required": "Provide the contract with the offshore dev firm explicitly stating they must adhere to the internal SDLC and submit code to SAST scans.",
                    "objective": "Prevent vulnerabilities from being introduced through loosely secured external engineering pipelines.",
                    "remediation_advice": "Enforce that all external developer code must be committed directly into the organizational Github repository to ensure internal CI/CD security checks are run."
                },
                {
                    "control_id": "8.31",
                    "control_title": "Separation of Development, Test and Production Environments",
                    "auditor_question": "Are development, testing, and production environments logically and physically separated to prevent accidental modifications or data exposure?",
                    "evidence_required": "Provide an AWS network diagram showing distinct separated VPCs for DEV, QA, and PROD with no direct routing between them.",
                    "objective": "Prevent untested code from crashing live systems and prevent developers from casually viewing production database records.",
                    "remediation_advice": "Utilize distinct cloud accounts for Production vs. non-Production environments. Strip developer write access to the Production account entirely."
                },
                {
                    "control_id": "8.32",
                    "control_title": "Change Management",
                    "auditor_question": "Are all changes to organization-wide IT systems, networks, and applications subject to a rigorous, documented change control process?",
                    "evidence_required": "Provide an approved Change Advisory Board (CAB) ticket detailing a recent firewall change, complete with rollback instructions and executive approval.",
                    "objective": "Minimize the risk of system outages or inadvertently degraded security postures resulting from ad-hoc configuration changes.",
                    "remediation_advice": "Implement an ITIL-aligned Change Management process in Jira or ServiceNow requiring peer-review and testing validation before major IT changes are executed."
                },
                {
                    "control_id": "8.33",
                    "control_title": "Test Information",
                    "auditor_question": "Is test information completely devoid of live production data (PII/Cardholder Data) unless it is functionally masked or securely authorized?",
                    "evidence_required": "Provide DB architecture diagrams showing automated scrubbing mechanisms when production databases are cloned down for Q/A testing.",
                    "objective": "Ensure lower-tier, loosely secured testing environments do not become a massive target due to holding live customer data.",
                    "remediation_advice": "Ban the practice of migrating unmasked production data to lower environments. Use synthetic data generation tools to seed testing databases."
                },
                {
                    "control_id": "8.34",
                    "control_title": "Protection of Information Systems During Audit Testing",
                    "auditor_question": "Are intensive security audits and technical assessments (like penetration testing) rigorously planned to ensure they do not accidentally crash production systems?",
                    "evidence_required": "Provide the Rules of Engagement (ROE) document signed by an external penetration tester acknowledging strict 'Do Not DoS' bounds.",
                    "objective": "Ensure the process of verifying security does not inadvertently cause a massive Denial of Service outage.",
                    "remediation_advice": "Always establish a formal Rules of Engagement (RoE) prior to any red-team or penetration testing explicitly defining out-of-bounds destructive testing."
                }
            ]
        }
    ]
};
