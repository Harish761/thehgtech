// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-14T10:31:49.124334+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-14T10:31:48.786383+05:30",
    "lastUpdatedFormatted": "Jun 14, 2026 at 10:31 AM IST",
    "comparisonPeriod": "Jun 13 \u2013 Jun 14, 2026",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]tioshxnsu[.]top/",
                "hxxps://www[.]roblox[.]com[.]et/users/276111199329/profile",
                "hxxps://old[.]citiretailservices[.]citibankonlline[.]com/?ch=1&js=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9[.]eyJhdWQiOiJKb2tlbiIsImV4cCI6MTc4MTM5NDgzNSwiaWF0IjoxNzgxMzg3NjM1LCJpc3MiOiJKb2tlbiIsImpzIjoxLCJqdGkiOiIzMnNjNTdkYWoxYjVxZXNibmsxYXVkZ3AiLCJuYmYiOjE3ODEzODc2MzUsInRzIjoxNzgxMzg3NjM1MDUyNzYxfQ[.]OQzJHyNkOo-uJxtejQEvn2vC7rujHxI8MEMutF1U5mU&sid=5f734050-6772-11f1-a590-843cf7263a1a",
                "hxxps://www[.]robiox[.]com[.]py/users/416132331125/profile",
                "hxxp://steamcomimunity[.]com/tradeoffer/new/partner=783662133token=l4hhebGA21835"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 444,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 444,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c6e5a9c9ff5a718335c07fb5ded90ab146243561b5f5d29b9534022866fd599f",
                " \"6b44f2b6e89c3a16a38adfa0bba47f2bfdea48a022bc521370f7352b2918e40f",
                " \"778db3b9e8d802fcdc05acaa6af42ac5da28422573ea19eb4e9c6177b5183f08",
                " \"75a4bd2ff63c51ea110173a609272f3ebd4fc1ef2c77a2ca25c77bbd34e35568",
                " \"9ec672a4beb8dfdd3433aabaf4b73b54793f3f9723e8df59dcf5ffed57446720"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 495,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.58.56.0/24",
                "2.59.152.0/24",
                "2.59.153.0/24",
                "5.101.81.0/24",
                "5.101.82.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 15000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]185[.]224",
                "1[.]12[.]229[.]231",
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236",
                "1[.]159[.]85[.]99"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5720,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5720,
                "newInLastHour": 5720,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]229[.]57",
                "1[.]14[.]28[.]29",
                "1[.]15[.]134[.]139",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17266,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17266,
                "newInLastHour": 17266,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]220[.]90[.]250:53481/bin[.]sh",
                "hxxp://125[.]42[.]244[.]94:58975/bin[.]sh",
                "hxxp://123[.]12[.]196[.]139:35512/bin[.]sh",
                "hxxp://42[.]231[.]64[.]77:48785/i",
                "hxxps://pwzkdexx[.]mechanicsayalat[.]xyz/b382aba8-b81f-4bb2-b632-05e41d793252"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3616,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3616,
                "newInLastHour": 3568,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pwzkdexx[.]mechanicsayalat[.]xyz\"",
                " \"c3ord92p[.]ravanshenasiganji[.]xyz\"",
                " \"ozaauajb[.]mechanickhodakarami[.]shop\"",
                " \"errmx[.]defamogadas[.]xyz\"",
                " \"8df2a2834beb8e7f61290ad647a943b76d37a7e9\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 5,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9805,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9805,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc",
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48837,
            "activeSources": 8,
            "criticalAlerts": 28207,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18302,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9905,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3028,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17790,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]229[.]186[.]82:44836/i",
                    "hxxps://igrbuyo[.]pokerkade[.]online/c898c073-9e03-4ca3-a721-c4083f4a3753",
                    "hxxps://kl23rl6f[.]nahjolbalage[.]xyz/?ublib=6d861f61-8ec0-46a4-9305-e7027cc46536"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]35[.]79",
                    "1[.]164[.]107[.]152",
                    "1[.]177[.]162[.]3"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1696,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "1.10.16.0/20",
                    "1.19.0.0/16",
                    "1.32.128.0/18"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1410,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]27[.]245[.]127:8080\"",
                    " \"120[.]27[.]245[.]127:443\"",
                    " \"120[.]27[.]245[.]127:80\""
                ]
            },
            {
                "name": "Dridex",
                "count": 737,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "550e1cde5c59d03b6f3b9bd3ebfc4af6c7dbec48",
                    "38ecc7c543c90d25571eae05fbd1948a310761b7",
                    "6c1cd5f3b4f1a6da97a199397b1bae8226aac7bc"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 589,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                    "0505fd5b451911f764cd457d591ec4d355e609c8",
                    "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 424,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "736a1766d64ab37f96483dcbcd159c86fc49834e",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41900,
        "lastCalculated": "2026-06-14 10:31 IST"
    }
};
