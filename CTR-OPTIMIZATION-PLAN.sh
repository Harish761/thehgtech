#!/bin/bash
# CTR Optimization Script for TheHGTech Guides

# This script tracks what changes need to be made
# Each entry: filename | old_title | new_title | new_description | topic

cat << 'EOF'
GUIDES TO OPTIMIZE:

1. container-security.html
   OLD: Container Security: Docker & Kubernetes Guide | TheHGTech
   NEW: Container Security: Docker & Kubernetes Hardening [2025]
   DESC: 🐳 Secure Docker containers & Kubernetes clusters. Image scanning, pod security, network policies & RBAC. Production checklist included.

2. cve-prioritization-patch-management.html
   OLD: CVE Prioritization & Patch Management Guide 2025 | TheHGTech
   NEW: CVE Prioritization: CVSS vs EPSS Risk-Based Patching [2025]
   DESC: 🎯 Stop patching everything. Prioritize CVEs using CVSS, EPSS & CISA KEV. Risk-based vulnerability management workflow + free prioritization matrix.

3. dora-compliance.html
   OLD: DORA Compliance Guide 2025 | Digital Operational Resilience Act
   NEW: DORA Compliance Checklist: Financial Sector Requirements [2025]
   DESC: 🏦 Complete DORA compliance guide for financial institutions. ICT risk management, incident reporting & third-party oversight. Deadline timeline included.

4. edr-vs-xdr.html
   OLD: EDR vs XDR: Complete Security Guide 2025
   NEW: EDR vs XDR: What's the Difference & When to Choose Each [2025]
   DESC: ⚔️ EDR vs XDR explained simply. Real comparison: features, cost, use cases. When to upgrade from EDR to XDR. Decision framework included.

5. incident-response-automation.html
   OLD: Incident Response Automation Guide
   NEW: Incident Response Automation: SOAR Playbook Templates [2025]
   DESC: ⚡ Automate IR with SOAR playbooks. Phishing, malware & ransomware response automation. 10+ playbook templates + implementation guide.

6. insider-threat-detection.html
   NEW: Insider Threat Detection: UEBA & Behavioral Analytics [2025]
   DESC: 🕵️ Detect insider threats before data exfiltration. UEBA implementation, behavioral indicators & investigation playbooks included.

7. iso-27001-certification-roadmap.html
   NEW: ISO 27001 Certification: Complete Roadmap & Timeline [2025]
   DESC: 📋 Get ISO 27001 certified step-by-step. 12-month implementation timeline, control mapping & audit preparation. 93% first-time pass rate tips.

8. iso-27001-gap-analysis.html
   NEW: ISO 27001 Gap Analysis: Assessment Template & Checklist [2025]
   DESC: ✅ Free ISO 27001 gap analysis template. Self-assessment checklist for all 93 controls. Risk treatment prioritization framework included.

9. malware-hash-analysis.html
   NEW: Malware Hash Analysis: IOC Investigation Guide [2025]
   DESC: 🔬 Analyze malware file hashes. VirusTotal, MalwareBazaar & sandbox analysis. Reverse engineering basics for SOC analysts.

10. mitre-attack-mapping.html
    NEW: MITRE ATT&CK Mapping: Detection Engineering Guide [2025]
    DESC: 🎯 Map threats to MITRE ATT&CK. Detection rule creation, coverage analysis & purple team exercises. Navigator templates included.

11. network-segmentation-zero-trust.html
    NEW: Network Segmentation for Zero Trust: Implementation Guide [2025]
    DESC: 🔒 Implement Zero Trust network segmentation. Micro-segmentation, identity-aware proxies & east-west traffic control.

12. nist-csf-2-implementation.html
    NEW: NIST CSF 2.0 Implementation: Complete Framework Guide [2025]
    DESC: 🏛️ Implement NIST Cybersecurity Framework 2.0. New Govern function explained. Control mapping to ISO 27001, SOC 2 & CIS.

13. openphish-integration.html
    NEW: OpenPhish Feed Integration: Phishing URL Detection [2025]
    DESC: 🎣 Integrate OpenPhish threat feed. Real-time phishing URL detection for SIEM, email gateway & firewall. API examples included.

14. penetration-testing-methodology.html
    NEW: Penetration Testing Methodology: Ethical Hacking Guide [2025]
    DESC: 🔓 Complete pentest methodology from recon to reporting. PTES, OWASP & MITRE frameworks. Tool recommendations & report templates.

15. phishing-simulation-security-awareness.html
    NEW: Phishing Simulation: Security Awareness Program Guide [2025]
    DESC: 🎣 Run effective phishing simulations. Campaign templates, metrics that matter & employee training. Reduce click rates by 80%.

16. ransomware-response-playbook.html
    NEW: Ransomware Response Playbook: Incident Handling Guide [2025]
    DESC: 💀 Step-by-step ransomware incident response. Containment, eradication & recovery. Evidence preservation + negotiation considerations.

17. securing-ai-ml-pipelines.html
    NEW: Securing AI/ML Pipelines: MLOps Security Guide [2025]
    DESC: 🤖 Secure your ML pipelines. Model poisoning prevention, data lineage & adversarial attack defense. MLSecOps framework included.

18. security-metrics-kpis-dashboard.html
    NEW: Security Metrics & KPIs: CISO Dashboard Guide [2025]
    DESC: 📊 30 security metrics that matter. MTTD, MTTR, vulnerability aging & risk reduction. Executive dashboard templates included.

19. siem-log-analysis.html
    NEW: SIEM Log Analysis for Beginners: Detection Rules [2025]
    DESC: 📋 Learn SIEM log analysis from scratch. Sigma rules, common attack patterns & investigation techniques. Perfect for SOC analysts.

20. soc-analyst-fundamentals.html
    NEW: SOC Analyst Fundamentals: Complete Career Guide [2025]
    DESC: 🎓 Become a SOC analyst. Skills roadmap, certifications & daily workflow. Interview questions + career progression tips.

21. soc2-compliance-checklist.html
    NEW: SOC 2 Compliance Checklist: Trust Services Criteria [2025]
    DESC: ✅ Complete SOC 2 Type II checklist. All 5 trust services criteria covered. Control implementation + audit preparation guide.

22. splunk-spl-guide.html
    NEW: Splunk SPL Query Guide: Search Commands & Examples [2025]
    DESC: 🔍 Master Splunk SPL. 50+ query examples for security monitoring. Detection rules, dashboards & reporting commands.

23. third-party-risk-management.html
    NEW: Third-Party Risk Management (TPRM): Vendor Security [2025]
    DESC: 🤝 Manage vendor security risks. Assessment questionnaires, continuous monitoring & breach notification requirements.

24. threat-hunting-techniques.html
    NEW: Threat Hunting Techniques: Proactive Detection Guide [2025]
    DESC: 🔎 Become a threat hunter. Hypothesis-driven hunting, MITRE ATT&CK scenarios & hunting playbooks. IOC and TTP-based techniques.

25. threat-intelligence-feeds-comparison.html
    NEW: Threat Intelligence Feeds Comparison: Free vs Paid [2025]
    DESC: 📡 Compare 15+ threat intel feeds. OpenPhish, AlienVault, VirusTotal & more. Integration guides + ROI analysis.

26. threat-intelligence-feeds-integration.html
    NEW: Threat Intelligence Feeds Integration: SIEM & SOAR [2025]
    DESC: 🔌 Integrate threat intel into your stack. STIX/TAXII, API integration & automation. SIEM, EDR & firewall examples.

27. threat-intelligence-soc.html
    NEW: Threat Intelligence for SOC Analysts: Operational TI [2025]
    DESC: 🎯 Use threat intel in daily SOC operations. IOC enrichment, actor tracking & intelligence-driven detection.

28. windows-event-log-analysis.html
    NEW: Windows Event Log Analysis: Security Monitoring Guide [2025]
    DESC: 🪟 Master Windows security logs. Event IDs 4624, 4625, 4688 & more. Sigma rules + Sysmon configuration templates.

29. zero-day-detection.html
    NEW: Zero-Day Detection: Hunting Unknown Threats [2025]
    DESC: 🔍 Detect zero-days before patches exist. Behavioral analysis, anomaly detection & deception technology.

30. ztna-deployment.html
    NEW: Zero Trust Network Access (ZTNA): Implementation Guide [2025]
    DESC: 🔐 Deploy ZTNA for remote access. Replace VPN with identity-aware access. Vendor comparison + migration strategy.

COMPARISONS TO OPTIMIZE:

31. splunk-vs-elastic-security-vs-logrhythm.html
    NEW: Splunk vs Elastic vs LogRhythm: SIEM Comparison [2025]
    DESC: ⚖️ Honest SIEM comparison. Splunk, Elastic Security & LogRhythm. Pricing, features & deployment options analyzed.

EOF
