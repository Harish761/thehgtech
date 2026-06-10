// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-11T00:09:52.490725+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-11T00:09:52.185846+05:30",
    "lastUpdatedFormatted": "Jun 11, 2026 at 12:09 AM IST",
    "comparisonPeriod": "Jun 10 \u2013 Jun 11, 2026",
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
                "hxxps://track-ghk[.]click/gh",
                "hxxps://lnk[.]ink/eBflI",
                "hxxps://pahdidj[.]one/gh",
                "hxxps://lnk[.]ink/PnsMC",
                "hxxps://rodovias-dr9[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1031,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1031,
                "newInLastHour": 135,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1a10d4ab0d73298451579db6ac3cf3be39c4d8ada45b0b2f504a4110640a2fc1",
                " \"3d9ee40c6b7b67f193511b665d005945179f0d5a9870e8ecb4e4cef495213de6",
                " \"2965669bedfa9dada3d7bb77e0d860502ca1f36cf9d2b1edc0bee49fea3bb389",
                " \"783008a032b58cbc5b194bfdb579e392b8519db1482f60ce7cf6084f599c3b75",
                " \"3cfabffff6d7f05710445d8e06df02e2953c15bda0eea8e652b5fe0b9a3108e2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1660,
                "newInLastHour": 10,
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
                "1[.]0[.]203[.]197",
                "1[.]140[.]115[.]178",
                "1[.]140[.]118[.]126",
                "1[.]140[.]98[.]29",
                "1[.]159[.]65[.]249"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7735,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7735,
                "newInLastHour": 7735,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]110[.]170",
                "1[.]12[.]51[.]198",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18398,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18398,
                "newInLastHour": 18398,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://herxydns[.]hugugbime[.]xyz/1f270248-9894-4efa-9d6d-2be90ef09192",
                "hxxp://61[.]53[.]74[.]178:56056/bin[.]sh",
                "hxxp://59[.]101[.]188[.]13:56456/i",
                "hxxps://5wtpqrho[.]azmoondadrasi[.]xyz/?ublib=d6d47cb9-5c0f-494a-8f81-e6ef03496bed",
                "hxxp://182[.]113[.]40[.]92:40707/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4373,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4373,
                "newInLastHour": 4339,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"herxydns[.]hugugbime[.]xyz\"",
                " \"hxxps://kik[.]glamisdunesrentals[.]com/\"",
                " \"kik[.]glamisdunesrentals[.]com\"",
                " \"hxxps://kik[.]gagahsm188[.]top/\"",
                " \"kik[.]gagahsm188[.]top\""
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
            "iocCount": 9919,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9919,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e2fdfc3f1a9e23e7ce2f26868f8c7065a4896dc8",
                "845f3e3a700d5018e36f523e23d75b7c43cabea0",
                "14a5975bdcb2ad65a1db0f0809c18a8d89a0276e",
                "99bc361047301dd49afbfe7f8ee38e1736cad160",
                "185ba0134595e7e8fa4ba332d6eb3582b90e6cc8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50473,
            "activeSources": 8,
            "criticalAlerts": 29165,
            "activeCampaigns": 244
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19274,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9891,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3291,
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18266,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]75[.]175:58428/bin[.]sh",
                    "hxxps://uulyqc[.]barnamenevisi[.]xyz/62cdcc81-5732-41a6-bd68-1e42332daf9a",
                    "hxxp://smart[.]abuse[.]st/arm4"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]140[.]115[.]178",
                    "1[.]140[.]118[.]126"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1650,
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
                "count": 1403,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193[.]233[.]202[.]16:3389\"",
                    " \"8[.]148[.]201[.]210:10553\"",
                    " \"38[.]76[.]164[.]56:8083\""
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
                "count": 585,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "39c142adbc6b401266f5cb025b7218246e36df74",
                    "cf62ecd77ed61f4b597c5a0fb29912f9d80a2d6b",
                    "244fab9da420579102b57ce615f0304b64c76d6b"
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
                "name": " \"js.iclickfix\"",
                "count": 515,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"boldthrives[.]com\"",
                    " \"allcountiesroofingltd[.]co[.]uk\"",
                    " \"altecva[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45928,
        "lastCalculated": "2026-06-11 00:09 IST"
    }
};
