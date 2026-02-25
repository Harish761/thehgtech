SUBREDDIT: r/cybersecurity

---

TITLE: 600 FortiGate firewalls compromised across 55 countries. not a zero-day. just exposed management ports and no MFA.

---

BODY:

honestly this one just makes me tired. 600+ fortigate devices popped because admins left management interfaces open to the internet with weak passwords and no MFA. thats it. thats the whole vulnerability.

the kicker? the attacker wasnt even skilled. amazon threat intel assessed them as low-to-medium skill. they just used AI to fill in everything they didnt know — writing scripts, parsing configs, planning lateral movement. one person did this across 55 countries in 5 weeks.

i went down the rabbit hole reading CJ Moses' blog post on the AWS security blog from feb 20 and a few other reports and put together a breakdown here: https://thehgtech.com/articles/ai-hacker-fortigate-600-devices-2026.html

but seriously. we keep having these conversations. exposed management ports. default creds. no MFA. how is this still happening in 2026?
