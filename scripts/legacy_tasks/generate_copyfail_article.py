#!/usr/bin/env python3
"""Generate Copy Fail CVE-2026-31431 article from Claude Mythos template."""
import re

template_path = '/Volumes/Data-Personal/Webpage/thehgtech/articles/claude-mythos-security-analysis-2026.html'
output_path = '/Volumes/Data-Personal/Webpage/thehgtech/articles/copy-fail-cve-2026-31431.html'

with open(template_path, 'r') as f:
    html = f.read()

# Extract everything from <body> to </main> — we'll replace the article content
# Find the main article content section
start_marker = '<main class="article-container">'
end_marker = '</main>'

pre_main = html[:html.index(start_marker)]
post_main = html[html.index(end_marker) + len(end_marker):]

# Fix head metadata
replacements = {
    'Can Claude Mythos Autonomously Exploit Zero-Days? A Security Analysis | TheHGTech [2026]': 
        'Copy Fail (CVE-2026-31431): Linux Kernel LPE — Full Technical Analysis [2026]',
    'Can Claude Mythos Autonomously Exploit Zero-Days? A Security Analysis | TheHGTech':
        'Copy Fail (CVE-2026-31431): The Most Dangerous Linux LPE Since Dirty COW',
    'Can Claude Mythos Autonomously Exploit Zero-Days? A Security Analysis':
        'Copy Fail (CVE-2026-31431): Linux Kernel LPE — Full Technical Analysis',
    'A research-grade technical analysis of Anthropic\'s Claude Mythos (Project Glasswing). We separate the hype from the reality of autonomous AI vulnerability discovery.':
        'Deep technical analysis of CVE-2026-31431 Copy Fail — a 732-byte Python exploit that roots every Linux distro since 2017. Container escape, CVSS 7.8, invisible to file integrity tools.',
    'claude-mythos-security-analysis-2026.png': 'copy-fail-cve-2026-31431.png',
    'claude-mythos-security-analysis-2026.html': 'copy-fail-cve-2026-31431.html',
    'Claude Mythos, Project Glasswing, AI Security, Zero-Day, Anthropic, SOC Analyst, Vulnerability Debt':
        'CVE-2026-31431, Copy Fail, Linux kernel LPE, privilege escalation, algif_aead, AF_ALG, page cache, container escape, Dirty COW',
    '"Cybersecurity Research"': '"Vulnerability Research"',
    'Claude Mythos, Project Glasswing, AI Security, Zero-Day Exploits, Autonomous Vulnerability Discovery':
        'CVE-2026-31431, Copy Fail, Linux Kernel, Privilege Escalation, Container Escape',
    '2026-04-25T12:00:00': '2026-04-30T12:00:00',
}

for old, new in replacements.items():
    pre_main = pre_main.replace(old, new)
    post_main = post_main.replace(old, new)

# Replace the generic FAQ
old_faq_start = '<!-- ========== STRUCTURED DATA - FAQPAGE ========== -->'
old_faq_end = '</script>\n</head>'

faq_section = pre_main[pre_main.index(old_faq_start):pre_main.index('</head>')]
new_faq = """<!-- ========== STRUCTURED DATA - FAQPAGE ========== -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "What is CVE-2026-31431 Copy Fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CVE-2026-31431 is a CVSS 7.8 local privilege escalation in the Linux kernel algif_aead module. A 732-byte Python exploit roots every Linux distro shipped since 2017 with no race conditions or per-distro offsets required."
        }
      },{
        "@type": "Question",
        "name": "Is my Linux system affected by Copy Fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your kernel was built between August 2017 and the April 2026 patch, yes. This covers Ubuntu, Debian, RHEL, SUSE, Amazon Linux, Arch, and all mainstream distributions. AF_ALG is enabled by default."
        }
      },{
        "@type": "Question",
        "name": "Can Copy Fail escape containers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The page cache is shared across the host kernel. A compromised container can corrupt setuid binaries on the host node, escaping container boundaries and compromising the entire Kubernetes node."
        }
      },{
        "@type": "Question",
        "name": "How do I patch CVE-2026-31431?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Update your kernel to include commit a664bf3d603d. As interim mitigation, disable algif_aead: echo install algif_aead /bin/false > /etc/modprobe.d/disable-algif.conf. This will not affect dm-crypt, LUKS, IPsec, SSH, or OpenSSL."
        }
      }]
    }
    </script>
"""
pre_main = pre_main.replace(faq_section, new_faq)

# Build article content
article_body = """    <main class="article-container">
        <a href="/articles.html" class="back-link" style="display: inline-block; margin-bottom: 1.5rem; color: var(--accent-cyan); text-decoration: none;">
            <i class="fas fa-arrow-left"></i> Back to Articles
        </a>

        <article>
            <header class="article-header">
                <div class="article-meta">
                    <span><i class="fas fa-calendar"></i> April 30, 2026</span>
                    <span><i class="fas fa-user"></i> Harish G</span>
                    <span><i class="fas fa-clock"></i> 22 min read</span>
                    <span style="color: var(--accent-red); font-weight: bold;"><i class="fas fa-bug"></i> CVE RESEARCH</span>
                </div>

                <h1 class="article-title">Copy Fail (CVE-2026-31431): The Most Dangerous Linux Kernel LPE Since Dirty COW</h1>
                
                <img src="/images/articles/copy-fail-cve-2026-31431.png" alt="Copy Fail CVE-2026-31431 Linux Kernel Privilege Escalation" class="featured-image">
            </header>

            <div class="article-content">
                <p style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-bottom: 2rem;"><em>A 732-byte Python script can root every Linux distribution shipped since 2017. No race conditions. No per-distro offsets. No on-disk trace. Welcome to Copy Fail — the vulnerability that makes Dirty COW look primitive.</em></p>

                <div class="technical-box" style="margin-top: 0;">
                    <h2 style="font-size: 1.3rem; margin-bottom: 1rem; margin-top: 0; border-bottom: none; color: var(--text-primary);"><i class="fas fa-file-alt"></i> Executive Summary</h2>
                    <ul style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 0;">
                        <li><strong>CVE:</strong> CVE-2026-31431 — Codename: <strong>"Copy Fail"</strong></li>
                        <li><strong>CVSS:</strong> 7.8 HIGH (AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H)</li>
                        <li><strong>CWE:</strong> CWE-669 (Incorrect Resource Transfer Between Spheres)</li>
                        <li><strong>Type:</strong> Local Privilege Escalation (LPE) via page cache corruption</li>
                        <li><strong>Affected:</strong> Every Linux kernel built between August 2017 and April 2026</li>
                        <li><strong>Discovered by:</strong> Theori, using their AI-powered tool <strong>Xint Code</strong></li>
                        <li><strong>Confidence Level:</strong> Confirmed — PoC publicly available, NVD scored, patches merged</li>
                    </ul>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 1rem; margin-bottom: 0;"><em>This analysis is based on the official NVD entry, the <a href="https://copy.fail" style="color: var(--accent-cyan);">copy.fail</a> disclosure site, Theori's GitHub PoC, and oss-security mailing list advisories as of April 30, 2026.</em></p>
                </div>

                <h2>1. Why This CVE Matters</h2>
                <p>Linux kernel privilege escalation vulnerabilities are discovered regularly. Most require race conditions, specific kernel configurations, or complex heap manipulation that makes reliable exploitation difficult. CVE-2026-31431 breaks all of those assumptions.</p>
                
                <p>Copy Fail is a <strong>straight-line logic flaw</strong> — not a memory corruption race. The same exploit binary works unmodified on Ubuntu, RHEL, Amazon Linux, SUSE, Debian, Arch, and every other mainstream distribution. The entire PoC fits in a 732-byte Python script using only the standard library (<code>os</code>, <code>socket</code>, <code>zlib</code>).</p>

                <p>This is the first Linux kernel LPE since Dirty COW (CVE-2016-5195) that achieves universal, reliable, race-free privilege escalation. But unlike Dirty COW, Copy Fail is <strong>invisible to on-disk file integrity monitoring tools</strong> because it operates entirely through the kernel's page cache.</p>

                <h2>2. Technical Deep Dive: The Root Cause</h2>
                <p>The vulnerability lives in the Linux kernel's <strong>Authenticated Encryption with Associated Data (AEAD)</strong> interface, specifically the <code>algif_aead</code> module. This module provides a userspace-accessible cryptographic API via <code>AF_ALG</code> sockets.</p>
                
                <h3>The Offending Commit</h3>
                <p>In August 2017, kernel commit <code>72548b093ee3</code> introduced an optimization to <code>algif_aead</code> that attempted to perform cryptographic operations "in-place" — using overlapping source and destination buffers. The goal was to avoid unnecessary memory copies during encryption/decryption operations.</p>

                <p>The fatal flaw: when a user combines <code>AF_ALG</code> sockets with the <code>splice()</code> system call, <strong>page cache pages from readable files end up in the destination scatterlist</strong>. The kernel's crypto subsystem then writes authentication tag data directly into those pages — giving an unprivileged user a controlled 4-byte write primitive into the page cache of any readable file on the system.</p>

                <div class="technical-box">
                    <h3><i class="fas fa-code"></i> The Exploit Primitive</h3>
                    <pre><code class="language-python">#!/usr/bin/env python3
# CVE-2026-31431 "Copy Fail" — Simplified exploit flow
# Full PoC: github.com/theori-io/copy-fail-CVE-2026-31431

import os, socket

# Step 1: Create AF_ALG socket for AEAD cipher
sock = socket.socket(socket.AF_ALG, socket.SOCK_SEQPACKET, 0)
sock.bind(("aead", "authencesn(hmac(sha256),cbc(aes))"))

# Step 2: splice() page cache pages of target setuid binary
# into the crypto operation's destination buffer
target_fd = os.open("/usr/bin/su", os.O_RDONLY)

# Step 3: The kernel writes 4 controlled bytes (auth tag)
# directly into the page cache of /usr/bin/su
# Result: Binary is corrupted IN MEMORY ONLY
# On-disk file remains untouched

# Step 4: Execute the now-corrupted setuid binary
os.execve("/usr/bin/su", ["/usr/bin/su"], os.environ)
# uid=0(root) gid=1002(user) groups=1002(user)</code></pre>
                </div>

                <img src="/images/articles/copy-fail-attack-chain.png" alt="CVE-2026-31431 Attack Chain Diagram" class="article-image" loading="lazy">

                <h2>3. Why Copy Fail Is Worse Than Dirty COW</h2>
                <p>The security community has been drawing comparisons to Dirty COW (CVE-2016-5195), but Copy Fail is categorically more dangerous across every metric that matters to defenders.</p>
                
                <img src="/images/articles/copy-fail-vs-dirty-cow.png" alt="Copy Fail vs Dirty COW Comparison" class="article-image" loading="lazy">

                <h3>No Race Condition</h3>
                <p>Dirty COW required winning a race between <code>madvise()</code> and <code>write()</code> — a timing-sensitive operation that could crash the kernel if the window was missed. Copy Fail has no race. The exploit follows a deterministic, straight-line code path. It succeeds on the first attempt, every time.</p>

                <h3>No Per-Distro Offsets</h3>
                <p>Most kernel exploits require knowing specific kernel symbol addresses or structure offsets that change between distributions and versions. Copy Fail operates entirely through stable, well-defined syscall interfaces (<code>AF_ALG</code>, <code>splice()</code>) that behave identically across all kernels.</p>

                <h3>Invisible to File Integrity Monitoring</h3>
                <p>This is the most concerning property. When Copy Fail corrupts a setuid binary, the modification occurs <strong>only in the page cache</strong> — the kernel's in-memory representation of the file. The kernel never marks the page as "dirty" for writeback to disk. This means:</p>
                <ul style="color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>AIDE</strong> — Will not detect the modification (checks on-disk checksums)</li>
                    <li><strong>Tripwire</strong> — Will not detect the modification (same reason)</li>
                    <li><strong>dm-verity</strong> — Will not detect the modification (validates disk blocks, not page cache)</li>
                    <li><strong>IMA (Integrity Measurement Architecture)</strong> — May not detect unless configured to re-measure on every <code>exec()</code></li>
                </ul>

                <div class="warning-box">
                    <strong><i class="fas fa-exclamation-triangle"></i> CRITICAL IMPLICATION:</strong>
                    <p style="margin-top: 0.5rem; margin-bottom: 0;">If your incident response playbook relies on comparing file hashes to known-good baselines, <strong>Copy Fail will bypass that detection entirely</strong>. The file on disk passes every integrity check. Only the in-memory representation is corrupted.</p>
                </div>

                <h2>4. Container Escape: The Kubernetes Nightmare</h2>
                <p>The Linux page cache is a <strong>host-level, kernel-shared resource</strong>. All containers running on the same node share the same page cache as the host kernel. This architectural reality transforms Copy Fail from a local privilege escalation into a <strong>container escape primitive</strong>.</p>

                <img src="/images/articles/copy-fail-container-escape.png" alt="Container Escape via Shared Page Cache" class="article-image" loading="lazy">

                <h3>Attack Scenario</h3>
                <p>Consider a Kubernetes cluster running multi-tenant workloads:</p>
                <ol style="color: var(--text-secondary); line-height: 1.6;">
                    <li>Attacker gains code execution inside a container pod (via supply chain compromise, vulnerable application, or malicious PR in CI/CD)</li>
                    <li>The container has no special privileges — no <code>SYS_ADMIN</code>, no <code>privileged: true</code></li>
                    <li>Attacker runs the 732-byte Copy Fail exploit targeting <code>/usr/bin/su</code> on the <strong>host filesystem</strong></li>
                    <li>Because the page cache is shared, the host's copy of <code>/usr/bin/su</code> is corrupted in memory</li>
                    <li>Any process on the host that subsequently executes <code>/usr/bin/su</code> runs the attacker's code as root</li>
                    <li><strong>Result:</strong> Full node compromise — attacker owns the Kubernetes node and all pods on it</li>
                </ol>

                <div class="warning-box">
                    <strong><i class="fas fa-exclamation-triangle"></i> HIGH-PRIORITY TARGETS:</strong>
                    <ul style="margin-top: 0.5rem; margin-bottom: 0; color: var(--text-secondary);">
                        <li><strong>CI/CD Runners:</strong> GitHub Actions self-hosted runners, GitLab runners, Jenkins agents executing untrusted PR code</li>
                        <li><strong>Notebook Hosts:</strong> Jupyter, Databricks, SageMaker — any service executing user-supplied code</li>
                        <li><strong>Shared Build Servers:</strong> Multi-user dev boxes, jump hosts, build farms</li>
                    </ul>
                </div>

                <h2>5. Detection: What Actually Works</h2>
                <p>Given that on-disk integrity tools are blind to this attack, defenders must pivot to behavioral and runtime detection.</p>

                <h3>Sigma Rule: Detect AF_ALG Socket Creation</h3>
                <div class="technical-box">
                    <h3><i class="fas fa-code"></i> Detection Rule — AF_ALG Socket Activity</h3>
                    <pre><code class="language-yaml">title: Suspicious AF_ALG Socket Creation (Copy Fail Indicator)
id: cf-2026-31431-detect
status: experimental
description: Detects creation of AF_ALG sockets which may indicate CVE-2026-31431 exploitation
logsource:
    product: linux
    service: auditd
detection:
    selection:
        type: SYSCALL
        syscall: socket
        a0: '38'  # AF_ALG = 38
    condition: selection
level: high
tags:
    - attack.privilege_escalation
    - attack.t1068
    - cve.2026.31431</code></pre>
                </div>

                <h3>Runtime Detection with auditd</h3>
                <pre><code class="language-bash"># Add audit rule to monitor AF_ALG socket creation
auditctl -a always,exit -F arch=b64 -S socket -F a0=38 -k copy_fail_detect

# Monitor for splice() calls targeting setuid binaries
auditctl -a always,exit -F arch=b64 -S splice -k splice_monitor

# Check current AF_ALG usage on your system
lsof 2>/dev/null | grep AF_ALG
ss -xa | grep alg</code></pre>

                <h3>eBPF-Based Detection</h3>
                <p>For environments running modern kernels with eBPF support, attach a tracepoint to <code>crypto_aead_encrypt</code> and <code>crypto_aead_decrypt</code> to flag any AEAD operations initiated from userspace via <code>AF_ALG</code>. Tools like Falco or Tetragon can implement this with custom rules.</p>

                <h2>6. Remediation: Patch and Harden</h2>

                <div class="success-box">
                    <strong><i class="fas fa-shield-alt"></i> IMMEDIATE ACTION PLAN:</strong>
                    <ul style="margin-top: 0.5rem; line-height: 1.8; margin-bottom: 0;">
                        <li><strong>Priority 1 — Patch:</strong> Update kernel to include commit <code>a664bf3d603d</code>. Check your distro's security advisory tracker.</li>
                        <li><strong>Priority 2 — Interim Mitigation:</strong> Disable <code>algif_aead</code> module immediately:<br>
                            <code>echo "install algif_aead /bin/false" > /etc/modprobe.d/disable-algif.conf && rmmod algif_aead 2>/dev/null</code></li>
                        <li><strong>Priority 3 — Seccomp:</strong> Block <code>AF_ALG</code> socket creation via seccomp profiles for all containers and CI runners</li>
                        <li><strong>Priority 4 — Audit:</strong> Deploy the auditd rules above to detect exploitation attempts</li>
                        <li><strong>Priority 5 — Verify:</strong> Run <code>uname -r</code> and cross-reference against your distro's patched kernel version list</li>
                    </ul>
                </div>

                <h3>What the Module Disable Does NOT Break</h3>
                <p>Disabling <code>algif_aead</code> has near-zero impact on the vast majority of systems:</p>
                <ul style="color: var(--text-secondary); line-height: 1.6;">
                    <li><strong>Not affected:</strong> dm-crypt/LUKS, kTLS, IPsec/XFRM, in-kernel TLS, OpenSSL (default), GnuTLS, NSS, SSH, kernel keyring crypto</li>
                    <li><strong>Potentially affected:</strong> OpenSSL with <code>afalg</code> engine explicitly enabled, some embedded crypto offload paths, or applications binding <code>aead</code>/<code>skcipher</code>/<code>hash</code> sockets directly</li>
                </ul>

                <h2>7. The AI Discovery Angle</h2>
                <p>Copy Fail was discovered by <strong>Theori</strong>, a South Korean security firm, using their AI-powered vulnerability research tool <strong>Xint Code</strong>. According to their disclosure, the tool identified the flaw in approximately one hour of automated analysis against the Linux <code>crypto/</code> subsystem.</p>

                <p>This is a significant data point in the ongoing debate about AI-assisted vulnerability discovery. Xint Code didn't just find a theoretical bug — it surfaced a 9-year-old, universally exploitable logic flaw that the entire Linux kernel security community had missed. The same scanning session reportedly identified additional high-severity bugs still in coordinated disclosure.</p>

                <p>For defenders, the implication is clear: if AI tools can find bugs like this in foundational infrastructure, attackers with similar tooling will be doing the same. The window between AI-powered discovery and patch deployment is the new critical attack surface.</p>

                <h2>8. Disclosure Timeline</h2>
                <table>
                    <thead><tr><th>Date</th><th>Event</th></tr></thead>
                    <tbody>
                        <tr><td><strong>2026-03-23</strong></td><td>Reported to Linux kernel security team by Theori</td></tr>
                        <tr><td><strong>2026-03-24</strong></td><td>Initial acknowledgment from kernel maintainers</td></tr>
                        <tr><td><strong>2026-03-25</strong></td><td>Patches proposed, reviewed, and iterated</td></tr>
                        <tr><td><strong>2026-04-01</strong></td><td>Fix committed to mainline kernel (commit <code>a664bf3d603d</code>)</td></tr>
                        <tr><td><strong>2026-04-22</strong></td><td>CVE-2026-31431 formally assigned</td></tr>
                        <tr><td><strong>2026-04-27</strong></td><td>NVD scored at CVSS 7.8 HIGH by kernel.org</td></tr>
                        <tr><td><strong>2026-04-29</strong></td><td>Public disclosure at <a href="https://copy.fail" style="color: var(--accent-cyan);">copy.fail</a>, PoC released on GitHub</td></tr>
                        <tr><td><strong>2026-04-30</strong></td><td>Major distros begin shipping patched kernels</td></tr>
                    </tbody>
                </table>

                <h2>Key Takeaways</h2>
                <ul style="color: var(--text-secondary); line-height: 1.8; margin-bottom: 2.5rem;">
                    <li><strong>Universal Exploitability:</strong> Every Linux distro since 2017 is affected. The same 732-byte Python script works everywhere — no recompilation, no offsets.</li>
                    <li><strong>Stealth by Design:</strong> The exploit modifies only the page cache. On-disk integrity tools (AIDE, Tripwire, dm-verity) are completely blind to it.</li>
                    <li><strong>Container Escape:</strong> Shared page cache means any pod can compromise the host node. Multi-tenant Kubernetes clusters are the highest-priority patching target.</li>
                    <li><strong>Disable algif_aead Now:</strong> If you cannot patch immediately, disabling the module is a zero-impact mitigation for 99% of workloads.</li>
                    <li><strong>Behavioral Detection Required:</strong> Pivot from file-hash integrity to runtime monitoring (auditd, eBPF, Falco) to detect AF_ALG socket creation.</li>
                    <li><strong>AI-Powered Discovery:</strong> This bug was found by AI in one hour. The era of machine-speed vulnerability discovery is here — patch pipelines must accelerate accordingly.</li>
                </ul>

                <div style="background: rgba(0, 217, 255, 0.03); border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; text-align: center;">
                    <p style="margin: 0; font-size: 1rem; color: var(--text-secondary);">Assess your organization's Linux hardening posture with our <a href="/tools/grc-assessment/" style="color: var(--accent-cyan); font-weight: 500; text-decoration: none;">GRC Assessment Tool</a> or review our <a href="/guides/" style="color: var(--accent-cyan); font-weight: 500; text-decoration: none;">Security Guides</a> for comprehensive defense strategies.</p>
                </div>

                <h2>9. References &amp; Sources</h2>
                <ul style="color: var(--text-secondary); line-height: 1.8;">
                    <li><a href="https://copy.fail" style="color: var(--accent-cyan);">copy.fail</a> — Official disclosure page by Theori</li>
                    <li><a href="https://nvd.nist.gov/vuln/detail/CVE-2026-31431" style="color: var(--accent-cyan);">NVD — CVE-2026-31431</a></li>
                    <li><a href="https://github.com/theori-io/copy-fail-CVE-2026-31431" style="color: var(--accent-cyan);">Theori PoC on GitHub</a></li>
                    <li><a href="https://git.kernel.org/stable/c/a664bf3d603dc3bdcf9ae47cc21e0daec706d7a5" style="color: var(--accent-cyan);">Kernel patch commit a664bf3d603d</a></li>
                    <li><a href="http://www.openwall.com/lists/oss-security/2026/04/29/23" style="color: var(--accent-cyan);">oss-security mailing list advisories</a></li>
                </ul>

                <div class="article-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                    <p><strong>Author:</strong> Harish G</p>
                    <p><strong>Published:</strong> April 30, 2026</p>
                    <p><strong>Last Updated:</strong> April 30, 2026</p>
                </div>
            </div>
        </article>

        <!-- Interaction Bar -->
        <div class="interaction-bar">
            <div class="like-section">
                <button class="like-btn" id="likeBtn" onclick="toggleLike()">
                    <i class="far fa-heart"></i> <span id="likeText">Like this article</span>
                </button>
            </div>
            <div class="action-buttons">
                <div class="share-buttons">
                    <a href="#" onclick="shareTwitter(event)" class="share-btn" title="Share on Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" onclick="shareLinkedIn(event)" class="share-btn" title="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <button onclick="copyLink()" class="share-btn" title="Copy Link"><i class="fas fa-link"></i></button>
                </div>
                <div class="button-separator"></div>
                <button onclick="window.print()" class="print-btn" title="Print Article"><i class="fas fa-print"></i></button>
            </div>
        </div>
    </main>"""

final_html = pre_main + article_body + "\n" + post_main

with open(output_path, 'w') as f:
    f.write(final_html)

print(f"Article written to {output_path}")
print(f"Total size: {len(final_html)} bytes")
