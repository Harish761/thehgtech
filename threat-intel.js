// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-27T12:08:51.615571+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-27T12:08:51.247492+05:30",
    "lastUpdatedFormatted": "Apr 27, 2026 at 12:08 PM IST",
    "comparisonPeriod": "Apr 26 \u2013 Apr 27, 2026",
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
                "hxxp://www[.]instagram-clone-v2-nextjs[.]vercel[.]app/",
                "hxxp://trezorswalletin[.]webflow[.]io/",
                "hxxp://www[.]service-cloudflare[.]com/",
                "hxxp://www[.]amazon-clone-jet-eight-44[.]vercel[.]app/",
                "hxxp://loggiinbitmartt[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 778,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 778,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bf35bfdb2f4fce37e932d42eee556b89c1799c86d2f1f9ebaeedbea18c38237b",
                " \"5af6b3b7d269d548c6e750424c45c6e9e34495b750a7e889bded7f0842efde12",
                " \"e8e97604d6b1fdf1221dcc0ddb85cddc7cbd96ab7014c0d2046f8fecabe3537f",
                " \"1af3a4460ff0e26ec404fa847fdf7ad90590bb98ee915e590e72920e4e148e05",
                " \"eb11e9e446bb14380d22304f7c15d7fb3af08d1443dc019285ca90896e97340e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1591,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]141[.]16[.]115",
                "1[.]169[.]39[.]171",
                "1[.]169[.]9[.]130",
                "1[.]183[.]41[.]171",
                "1[.]192[.]178[.]240"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4115,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4115,
                "newInLastHour": 4115,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]13[.]22[.]203",
                "1[.]145[.]117[.]19",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26082,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26082,
                "newInLastHour": 26082,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]23[.]193[.]75:53299/i",
                "hxxps://streamsol[.]sleazyhe2ded[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxps://vorline8et[.]sleazyhe2ded[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxp://113[.]228[.]109[.]3:34549/i",
                "hxxp://222[.]140[.]184[.]232:50276/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 856,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 856,
                "newInLastHour": 853,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://packetswitchings[.]com[.]ng/wp-blog-footer[.]php?data=\"",
                " \"vorline8et[.]sleazyhe2ded[.]in[.]net\"",
                " \"hxxps://packetswitchings[.]com[.]ng/wp-blog-footer[.]php?fp=1\"",
                " \"gdxmgmf8[.]sleazyhe2ded[.]in[.]net\"",
                " \"hxxps://mdasnmitrot[.]com/ooaoll[.]js\""
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
            "iocCount": 9641,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9641,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "273c74ce7170a85b37f91741ce7faa534639e29a",
                "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                "baec0b516b841d0291da5463777d12e63c0851a9",
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d",
                "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54086,
            "activeSources": 8,
            "criticalAlerts": 36362,
            "activeCampaigns": 190
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26749,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9613,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 157,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 83
            },
            {
                "name": "Tech",
                "percentage": 16
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 26007,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://open-6[.]raxen-serv[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxp://125[.]41[.]104[.]139:47020/bin[.]sh",
                    "hxxps://gold-land-4m[.]raxen-serv[.]in[.]net/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]141[.]16[.]115",
                    "1[.]169[.]9[.]130"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1576,
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
                "count": 1405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
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
                "name": "Vidar",
                "count": 514,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 439,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"open-6[.]raxen-serv[.]in[.]net\"",
                    " \"gold-land-4m[.]raxen-serv[.]in[.]net\"",
                    " \"noir-2[.]raxen-serv[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 403,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46411,
        "lastCalculated": "2026-04-27 12:08 IST"
    }
};
