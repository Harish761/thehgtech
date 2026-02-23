Title: a russian hacker used chatgpt to compromise 600 fortigate firewalls across 55 countries. amazon threat intel just published the full breakdown.

Body:

so amazon threat intelligence dropped a blog post on feb 20 from their CISO CJ Moses about this. between jan 11 and feb 18 a russian speaking financially motivated actor popped 600+ fortigate devices across 55 countries using commercial AI tools.

the kicker is the guy wasnt even good. amazon assessed him as "low to medium technical skill" with terrible opsec. they found his server with all his tools, AI generated attack plans, stolen configs, everything just sitting there.

and heres what kills me — he didnt use a zero day. he didnt find some crazy fortinet bug. he just found management interfaces exposed to the internet with weak passwords and no MFA. thats it. the AI wrote him python and go scripts to parse and decrypt the stolen configs because he literally couldnt do it himself.

once inside he pulled full device configs — vpn creds, admin passwords, firewall rules, internal network maps. then used the vpn creds to get into AD, dump credential databases, and go after backup infrastructure. classic pre-ransomware playbook.

the part that should scare everyone is the scale. one dude (or small group) with no real skills hit 600 devices across 55 countries in 5 weeks because AI filled in every gap in his knowledge. scanning methodology? AI. custom tools? AI. lateral movement planning? AI. when he hit a hardened target (mfa enabled, management port not exposed) he just moved on to the next soft target.

amazon says expect more of this from both skilled and unskilled actors throughout 2026.

the fix is embarrassingly basic. dont expose your management port. turn on mfa. dont reuse vpn passwords for AD. thats literally it. this entire campaign dies against even basic hardening.

wrote up the full technical breakdown with the detection sigma rules and fortgate cli commands to check if youre compromised https://thehgtech.com/articles/ai-hacker-fortigate-600-devices-2026.html

sources are the AWS security blog (CJ Moses, feb 20), bleepingcomputer, the hacker news, computing.co.uk
