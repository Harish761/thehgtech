#!/usr/bin/env python3
"""Generate the Dirty Frag / Page Cache Curse article HTML."""

import os

# Read Part 1 (head) that was already written
with open("articles/dirty-frag-page-cache-curse-2026.html", "r") as f:
    head = f.read()

# Read Copy Fail article to extract mobile header + desktop header boilerplate
with open("articles/copy-fail-cve-2026-31431.html", "r") as f:
    cf = f.read()

# Extract mobile header block
mob_start = cf.index("<!-- Mobile Header -->")
mob_end = cf.index("<!-- Desktop Header -->")
mobile_header = cf[mob_start:mob_end]

# Extract desktop header block
desk_start = cf.index("<!-- Desktop Header -->")
desk_end = cf.index('<main class="article-container">')
desktop_header = cf[desk_start:desk_end]

body = f"""
<body>
    {mobile_header}
    {desktop_header}
    <div class="article-container">
        <a href="/articles.html" class="back-link"><i class="fas fa-arrow-left"></i> Back to Articles</a>
        <article>
            <header class="article-header">
                <div class="article-meta">
                    <span><i class="far fa-calendar-alt"></i> May 10, 2026</span>
                    <span><i class="far fa-clock"></i> 25 min read</span>
                    <span><i class="fas fa-folder-open"></i> Vulnerability Research</span>
                </div>
                <h1>The Page Cache Curse: Why Linux Keeps Getting Rooted by the Same Bug Class</h1>
            </header>

            <img src="/images/articles/dirty-frag-page-cache-curse-2026.png" alt="The Page Cache Curse - Dirty Frag Linux Kernel Vulnerability" class="featured-image">

            <div class="article-content">

                <p style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-bottom: 2rem;"><em>Linux had four root-level exploits in the same vulnerability class in ten years. Dirty COW. Dirty Pipe. Copy Fail. And now Dirty Frag. This is not a coincidence &mdash; it is a structural pattern. And if you are not hardening against it, you are gambling with your infrastructure.</em></p>

                <p>Just days after the security community finished deploying emergency patches for <a href="/articles/copy-fail-cve-2026-31431.html" style="color: var(--accent-cyan);">Copy Fail (CVE-2026-31431)</a>, researchers disclosed <strong>Dirty Frag</strong> &mdash; a new, independent privilege escalation chain that exploits the exact same underlying weakness: the Linux kernel's page cache. And the worst part? Patching Copy Fail does absolutely nothing to protect you from Dirty Frag.</p>

                <div class="success-box" style="margin-bottom: 2rem;">
                    <strong><i class="fas fa-bullseye"></i> Key Takeaways</strong>
                    <ul style="color: var(--text-secondary); margin-bottom: 0; padding-left: 1.25rem; line-height: 1.8; font-size: 0.95rem; margin-top: 0.5rem;">
                        <li><strong>New Threat:</strong> Dirty Frag (CVE-2026-43284 + CVE-2026-43500) is a deterministic, race-condition-free privilege escalation in the Linux kernel's IPsec ESP and RxRPC subsystems.</li>
                        <li><strong>Same Class, Different Bug:</strong> It belongs to the same page-cache corruption family as Dirty COW (2016), Dirty Pipe (2022), and Copy Fail (2026). Patching one does NOT fix the others.</li>
                        <li><strong>Container Escape:</strong> The shared page cache means container workloads can compromise the host node.</li>
                        <li><strong>The Pattern:</strong> Linux has had 4 critical page-cache LPEs in 10 years. This article explains why it keeps happening and how to harden against the next one.</li>
                    </ul>
                </div>

                <h2>Part 1: Dirty Frag &mdash; Technical Breakdown</h2>

                <p>Dirty Frag chains two separate vulnerabilities in the Linux kernel's network fragment handling:</p>

                <table>
                    <thead><tr><th>CVE</th><th>Subsystem</th><th>Component</th><th>Mechanism</th></tr></thead>
                    <tbody>
                        <tr><td><strong>CVE-2026-43284</strong></td><td>IPsec / XFRM</td><td><code>esp4</code>, <code>esp6</code></td><td>In-place decryption on shared page fragments</td></tr>
                        <tr><td><strong>CVE-2026-43500</strong></td><td>RxRPC</td><td><code>rxrpc</code></td><td>Fragment reassembly corrupts page cache pages</td></tr>
                    </tbody>
                </table>

                <p>Unlike many kernel exploits that rely on winning a race condition (making them unreliable in practice), Dirty Frag is <strong>deterministic</strong>. The exploit triggers a logic bug, not a timing bug. This means it works reliably on every attempt, across every distribution, without needing per-target offsets or KASLR bypasses.</p>

                <h3>The Attack Chain</h3>

                <div class="architecture-diagram">
 ┌─────────────────────────────────────────────────────────┐
 │                    USERSPACE (Attacker)                  │
 │                                                         │
 │  1. Create raw socket + bind to IPsec ESP or RxRPC      │
 │  2. Send crafted encrypted packet with shared fragments  │
 │  3. Kernel performs IN-PLACE decryption on page cache    │
 │  4. Attacker now controls content of cached pages        │
 │  5. Target a setuid binary (e.g., /usr/bin/su)           │
 │  6. Execute the corrupted binary → ROOT                  │
 └───────────────────────┬─────────────────────────────────┘
                         │
                         ▼
 ┌─────────────────────────────────────────────────────────┐
 │                    KERNEL (Page Cache)                   │
 │                                                         │
 │   ┌──────────┐    ┌──────────┐    ┌──────────┐         │
 │   │ Page 0   │    │ Page 1   │    │ Page 2   │         │
 │   │ (clean)  │    │(CORRUPT) │    │ (clean)  │         │
 │   └──────────┘    └──────────┘    └──────────┘         │
 │                        ▲                                │
 │                        │                                │
 │          ESP/RxRPC decrypts INTO this page              │
 │          instead of allocating a new buffer             │
 └─────────────────────────────────────────────────────────┘
                         │
                         ▼
 ┌─────────────────────────────────────────────────────────┐
 │                    FILESYSTEM                           │
 │                                                         │
 │   /usr/bin/su  ──reads from──▶  Corrupted Page 1       │
 │   (setuid root)                 (attacker shellcode)    │
 │                                                         │
 │   Result: Unprivileged user executes as ROOT            │
 └─────────────────────────────────────────────────────────┘</div>

                <p>The critical insight is that the ESP and RxRPC subsystems perform <strong>in-place decryption</strong> on page fragments that are shared with the page cache. When the kernel decrypts an incoming encrypted packet, it writes the decrypted output directly into a page that may also be backing a file on disk. The attacker controls the "decrypted" content, effectively gaining arbitrary write access to any cached file.</p>

                <div class="technical-box">
                    <h3><i class="fas fa-code"></i> The Core Vulnerability (Simplified)</h3>
                    <p style="font-size: 0.95rem;">The ESP decryption path in <code>net/ipv4/esp4.c</code> fails to check whether the destination buffer is a shared page fragment:</p>
<pre><code class="language-c">// Vulnerable path in esp4 output handler
// The kernel decrypts directly into the skb fragment page
// WITHOUT checking if that page is shared with the page cache
sg_init_table(sg, nfrags);
skb_to_sgvec(skb, sg, esp->esph_offset, skb->len - esp->esph_offset);

// This crypto operation writes decrypted data IN-PLACE
// If the fragment page == a page cache page, we corrupt the file
err = crypto_aead_decrypt(req);</code></pre>
                    <p style="font-size: 0.95rem;">The fix (commit <code>f4c50a4034e6</code>) ensures a private copy of the page is made before decryption, breaking the shared reference.</p>
                </div>

                <h2>Part 2: The Page Cache Curse &mdash; A Decade of the Same Bug</h2>

                <p>Dirty Frag is not an isolated incident. It is the fourth major privilege escalation exploiting the Linux page cache in ten years. This pattern reveals a <strong>structural weakness</strong> in how the Linux kernel manages its most critical shared resource.</p>

                <div class="timeline-box">
                    <div class="timeline-item">
                        <div class="timeline-year">2016</div>
                        <div class="timeline-detail">
                            <h4>Dirty COW (CVE-2016-5195)</h4>
                            <p>Race condition in the memory management subsystem's copy-on-write mechanism. An attacker could race <code>madvise(MADV_DONTNEED)</code> against a write to gain write access to read-only mapped files. Exploited in the wild. CVSS 7.8.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2022</div>
                        <div class="timeline-detail">
                            <h4>Dirty Pipe (CVE-2022-0847)</h4>
                            <p>Logic flaw in the pipe/splice subsystem. A <code>PIPE_BUF_FLAG_CAN_MERGE</code> flag was incorrectly preserved, allowing an unprivileged user to overwrite data in arbitrary cached files. Deterministic, no race. CVSS 7.8.</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2026<br><small>Apr</small></div>
                        <div class="timeline-detail">
                            <h4>Copy Fail (CVE-2026-31431)</h4>
                            <p>Logic flaw in <code>algif_aead</code> (AF_ALG crypto API). The kernel failed to properly copy data during AEAD operations, allowing page cache corruption via the userspace crypto interface. Deterministic. CVSS 7.8. <a href="/articles/copy-fail-cve-2026-31431.html" style="color: var(--accent-cyan);">Read our full analysis &rarr;</a></p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-year">2026<br><small>May</small></div>
                        <div class="timeline-detail">
                            <h4>Dirty Frag (CVE-2026-43284 + CVE-2026-43500)</h4>
                            <p>In-place decryption in IPsec ESP and RxRPC fragment handling corrupts shared page cache pages. Deterministic, chains two CVEs for reliable root. Container escape confirmed.</p>
                        </div>
                    </div>
                </div>

                <h3>Why Does This Keep Happening?</h3>

                <p>The Linux page cache is a <strong>performance-critical, system-wide shared resource</strong>. Every file read from disk is cached in memory through the page cache. When a process reads <code>/usr/bin/su</code>, the kernel does not read the file from disk every time &mdash; it serves the cached copy from the page cache.</p>

                <p>This design is brilliant for performance. But it creates a massive trust problem: <strong>every kernel subsystem that touches page-backed buffers must correctly handle page ownership</strong>. If any subsystem writes to a page cache page without first making a private copy (copy-on-write), it can corrupt the cached representation of any file on the system.</p>

                <div class="warning-box">
                    <h3><i class="fas fa-exclamation-triangle"></i> The Structural Problem</h3>
                    <p>The Linux kernel has <strong>30+ million lines of code</strong> across thousands of subsystems. The page cache is touched by memory management, filesystem drivers, network stack, crypto subsystem, pipe/splice, and dozens more. Each subsystem independently implements its own buffer management. There is no centralized enforcement mechanism that prevents a subsystem from accidentally writing to a shared page cache page.</p>
                    <p>This means every new subsystem, every new driver, and every new feature that touches page-backed buffers is a potential new page-cache corruption vector. The bug class is not being eliminated &mdash; it is being <strong>discovered one subsystem at a time</strong>.</p>
                </div>

                <h2>Part 3: The CVE Explosion &mdash; Linux by the Numbers</h2>

                <p>A common defense of Linux security is that it is "open source, so bugs get found and fixed faster." The data tells a more nuanced story:</p>

                <table>
                    <thead><tr><th>Year</th><th>Linux Kernel CVEs</th><th>Notable Event</th></tr></thead>
                    <tbody>
                        <tr><td>2018</td><td>157</td><td>&mdash;</td></tr>
                        <tr><td>2019</td><td>277</td><td>&mdash;</td></tr>
                        <tr><td>2020</td><td>120</td><td>&mdash;</td></tr>
                        <tr><td>2021</td><td>163</td><td>&mdash;</td></tr>
                        <tr><td>2022</td><td>354</td><td>Dirty Pipe disclosed</td></tr>
                        <tr><td>2023</td><td>1,736</td><td>&mdash;</td></tr>
                        <tr><td>2024</td><td style="color: var(--accent-red); font-weight: 700;">3,529</td><td>Linux becomes its own CNA</td></tr>
                        <tr><td>2025</td><td style="color: var(--accent-red); font-weight: 700;">5,803</td><td>Highest year on record</td></tr>
                        <tr><td>2026</td><td>1,181 (YTD May)</td><td>Copy Fail + Dirty Frag</td></tr>
                    </tbody>
                </table>

                <p>The sharp inflection in 2024 is largely attributed to the Linux kernel project becoming its own <strong>CVE Numbering Authority (CNA)</strong>, which led to more aggressive and transparent registration of security fixes as CVEs. Many of these are minor issues. But the critical takeaway is this:</p>

                <div class="technical-box">
                    <h3><i class="fas fa-chart-line"></i> What the Numbers Mean for Defenders</h3>
                    <ul style="color: var(--text-secondary); line-height: 1.8;">
                        <li><strong>Volume is unsustainable:</strong> At 5,800+ CVEs per year, manual patch management is impossible. Automated, prioritized patching is mandatory.</li>
                        <li><strong>Raw CVE count ≠ risk:</strong> Most kernel CVEs are low-severity. But the ones that matter (page cache class) are catastrophic. You need severity-based triage.</li>
                        <li><strong>Transparency is good:</strong> More CVEs being reported means more bugs are being fixed upstream. But it also means your vulnerability scanners are noisier than ever.</li>
                    </ul>
                </div>

                <h2>Part 4: The Hardening Playbook &mdash; 7 Defenses Against the Next Page Cache Bug</h2>

                <p>Patching individual CVEs is necessary but insufficient. The page cache bug class will produce more variants. Here is how to build defense-in-depth against the entire class:</p>

                <h3>1. Linux Kernel Runtime Guard (LKRG)</h3>
                <p>LKRG reached version 1.0 in early 2026, making it production-ready. It monitors critical kernel structures at runtime and detects unauthorized modifications &mdash; exactly the kind of corruption that page cache exploits produce.</p>
<pre><code class="language-bash"># Install LKRG (Debian/Ubuntu)
sudo apt install lkrg-dkms

# Verify it is loaded
sudo dmesg | grep LKRG
# Expected: [LKRG] Loading Linux Kernel Runtime Guard

# Check status
cat /proc/sys/lkrg/status</code></pre>

                <h3>2. Kernel Lockdown Mode</h3>
                <p>Lockdown mode restricts access to kernel internals even for root. It prevents loading unsigned modules, blocks access to <code>/dev/mem</code>, and limits debugging interfaces that attackers use for persistence after a page cache exploit.</p>
<pre><code class="language-bash"># Enable lockdown mode (add to kernel boot parameters)
# In /etc/default/grub:
GRUB_CMDLINE_LINUX="lockdown=confidentiality"

# Apply
sudo update-grub && sudo reboot

# Verify
cat /sys/kernel/security/lockdown
# Expected: none [integrity] confidentiality</code></pre>

                <h3>3. SELinux / AppArmor in Enforcing Mode</h3>
                <p>Mandatory Access Control limits what even a root-level exploit can do. A compromised process with root via page cache corruption still cannot violate SELinux policy boundaries.</p>
<pre><code class="language-bash"># Check SELinux status
getenforce
# Should return: Enforcing

# If Permissive, switch to Enforcing
sudo setenforce 1
# Make permanent in /etc/selinux/config:
# SELINUX=enforcing</code></pre>

                <h3>4. Blacklist Unnecessary Kernel Modules</h3>
                <p>Every page cache exploit has targeted a specific kernel subsystem. If you do not use IPsec, RxRPC, or AF_ALG, disable them entirely:</p>
<pre><code class="language-bash"># Create module blacklist for page-cache attack surface reduction
cat &lt;&lt; 'EOF' | sudo tee /etc/modprobe.d/page-cache-hardening.conf
# Dirty Frag: Disable IPsec ESP if not needed
install esp4 /bin/false
install esp6 /bin/false

# Dirty Frag: Disable RxRPC if not needed
install rxrpc /bin/false
install af_rxrpc /bin/false

# Copy Fail: Disable AF_ALG AEAD
install algif_aead /bin/false

# Dirty Pipe: splice is core, cannot disable
# Dirty COW: mm is core, cannot disable
EOF

# Apply without reboot
sudo depmod -a</code></pre>

                <div class="warning-box">
                    <h3><i class="fas fa-exclamation-triangle"></i> Before Blacklisting</h3>
                    <p>Verify your workload does not depend on these modules. IPsec (<code>esp4</code>/<code>esp6</code>) is used by VPN solutions like strongSwan and Libreswan. RxRPC is used by AFS (Andrew File System). Check with <code>lsmod | grep -E "esp4|esp6|rxrpc|algif"</code> before disabling.</p>
                </div>

                <h3>5. Live Kernel Patching</h3>
                <p>The window between CVE disclosure and reboot is the most dangerous period. Live patching eliminates it:</p>
<pre><code class="language-bash"># Ubuntu Livepatch (free for up to 5 machines)
sudo snap install canonical-livepatch
sudo canonical-livepatch enable YOUR_TOKEN

# Check status
canonical-livepatch status --verbose

# For RHEL/CentOS: kpatch
sudo yum install kpatch
sudo kpatch list</code></pre>

                <h3>6. eBPF-Based Runtime Monitoring</h3>
                <p>Deploy Falco or Tetragon to detect page cache exploitation attempts in real time:</p>
<pre><code class="language-yaml"># Falco rule: Detect suspicious socket creation for known attack vectors
- rule: Suspicious AF_ALG or RxRPC Socket
  desc: Detects creation of AF_ALG or AF_RXRPC sockets (page cache exploit vectors)
  condition: >
    evt.type = socket and
    (evt.arg.domain = AF_ALG or evt.arg.domain = AF_RXRPC)
  output: >
    Suspicious kernel socket created (user=%user.name command=%proc.cmdline
    socket_domain=%evt.arg.domain container=%container.id)
  priority: WARNING
  tags: [kernel, exploit, page_cache]</code></pre>

                <h3>7. Container Isolation: Beyond Namespaces</h3>
                <p>Standard Docker/Kubernetes namespaces do NOT isolate the page cache. For true isolation against this bug class:</p>
                <ul>
                    <li><strong>Use gVisor or Kata Containers:</strong> They run workloads in lightweight VMs with separate kernels, completely isolating the page cache.</li>
                    <li><strong>Drop capabilities:</strong> Use <code>securityContext.capabilities.drop: [ALL]</code> in pod specs.</li>
                    <li><strong>Enable Seccomp profiles:</strong> Block <code>socket(AF_ALG)</code>, <code>socket(AF_RXRPC)</code>, and <code>splice()</code> syscalls in container profiles.</li>
                </ul>

                <h2>Part 5: Hunting for Exploitation</h2>

                <p>If you suspect your systems may have been compromised before patching, here are the detection queries:</p>

<pre><code class="language-bash"># Check if vulnerable modules are loaded
lsmod | grep -E "esp4|esp6|rxrpc|algif_aead"

# Search for suspicious AF_ALG socket creation in audit logs
ausearch -m SOCKADDR -i | grep -E "AF_ALG|AF_RXRPC"

# Check for modified setuid binaries (compare against package manager)
rpm -Va 2>/dev/null | grep '^..5' | grep -E 'bin|sbin'  # RHEL/CentOS
debsums -c 2>/dev/null | grep -E 'bin|sbin'              # Debian/Ubuntu

# Monitor for active exploitation with auditd
auditctl -a always,exit -F arch=b64 -S socket -F a0=38 -k af_alg_socket
auditctl -a always,exit -F arch=b64 -S socket -F a0=33 -k rxrpc_socket</code></pre>

                <h2>Conclusion: Prepare for the Fifth One</h2>

                <p>The page cache curse is not over. Dirty COW. Dirty Pipe. Copy Fail. Dirty Frag. Four exploits, four different subsystems, one underlying structural weakness. The Linux kernel's trust model for page-backed buffers has been violated repeatedly, and there is no architectural change on the horizon that eliminates the entire class.</p>

                <p>The next page cache exploit is not a matter of <em>if</em>, but <em>when</em>. The question is whether your infrastructure will be hardened against it when it arrives. Deploy LKRG, enable lockdown mode, blacklist unnecessary modules, and implement runtime monitoring. Do not wait for the fifth CVE.</p>

                <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 3rem; font-style: italic;">This analysis is based on vulnerability disclosures from kernel.org, CISA KEV, and vendor security advisories verified as of May 10, 2026. Details may evolve as patches are deployed across distributions.</p>

                <div style="background: rgba(0, 217, 255, 0.03); border: 1px solid var(--border); padding: 1.5rem; border-radius: 8px; margin: 2rem 0; text-align: center;">
                    <p style="margin: 0; font-size: 1rem; color: var(--text-secondary);">Read our full technical breakdown of Copy Fail: <a href="/articles/copy-fail-cve-2026-31431.html" style="color: var(--accent-cyan); font-weight: 500; text-decoration: none;">Copy Fail (CVE-2026-31431): Why It Matters &amp; Fixes &rarr;</a></p>
                </div>

            </div>

            <div class="article-footer" style="margin-top: 3rem; padding-top: 2rem; border-top: 1px solid var(--border);">
                <p><strong>Author:</strong> Harish G</p>
                <p><strong>Published:</strong> May 10, 2026</p>
                <p><strong>Last Updated:</strong> May 10, 2026</p>
            </div>
        </article>

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
    </div>

    <footer>
        <p style="text-align: center; color: var(--text-muted); padding: 2rem;">&copy; 2026 TheHGTech. All rights reserved.</p>
    </footer>

    <script src="/interaction-bar.js?v=20260220"></script>
    <script src="../ui-enhancements.js?v=20260516" defer></script>
    <script src="/command-palette.js" defer></script>
    <script src="/mobile-nav.js" defer></script>
</body>
</html>
"""

# Combine head + body
full_html = head + body

output_path = "articles/dirty-frag-page-cache-curse-2026.html"
with open(output_path, "w", encoding="utf-8") as f:
    f.write(full_html)

print(f"✅ Article written: {output_path}")
print(f"   Size: {len(full_html):,} bytes")
print(f"   Lines: {full_html.count(chr(10)):,}")
