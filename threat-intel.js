// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-23T19:56:01.427088+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-23T19:56:01.073237+05:30",
    "lastUpdatedFormatted": "Jul 23, 2026 at 07:56 PM IST",
    "comparisonPeriod": "Jul 22 \u2013 Jul 23, 2026",
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
                "hxxps://www[.]roblox[.]com[.]mu/users/2377452159/profile",
                "hxxp://sp6ct-brovik-biz8-kensar-molten[.]pages[.]dev/",
                "hxxp://xvtly64lkww-snhgj54zwur-7b4f2a-jmr05p[.]pages[.]dev/",
                "hxxps://learn-ledzr-start[.]pages[.]dev/",
                "hxxp://irdfes[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 743,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 743,
                "newInLastHour": 64,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"59378e29d34ff5bd1a2f9f14cb71b0a443ca9fb9e7a6162305c3b94ec65f907e",
                " \"0ea17807b709db137a996ba1d021f86e89a1a8257d5bb04494caa78049d4c75d",
                " \"be2503e89f34fa3465632f691c073c3f5ba835dd3e59fc3cb0ae7ba33a485766",
                " \"002bf149ae3940af57bd6c009927a589870255c3a2154d8f434461d11337a76b",
                " \"1cdbb37dde622d4228c77ee75284bd2194c7301cbf15a5351e79aeec22ffbd1f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]0[.]251[.]12",
                "1[.]0[.]251[.]255",
                "1[.]0[.]253[.]184",
                "1[.]10[.]247[.]163",
                "1[.]1[.]130[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9586,
                "newInLastHour": 9586,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]171[.]170",
                "1[.]15[.]227[.]58",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15337,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15337,
                "newInLastHour": 15337,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]44[.]41:60969/i",
                "hxxp://113[.]228[.]134[.]22:50099/bin[.]sh",
                "hxxp://182[.]113[.]43[.]32:32781/bin[.]sh",
                "hxxp://110[.]36[.]89[.]246:52906/i",
                "hxxp://110[.]36[.]89[.]246:52906/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4259,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4259,
                "newInLastHour": 4047,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ccbcpickens[.]org\"",
                " \"hxxp://105[.]184[.]28[.]228:59307/Mozi[.]a\"",
                " \"hxxp://153[.]117[.]6[.]49:50145/Mozi[.]m\"",
                " \"hxxp://153[.]117[.]29[.]53:54397/Mozi[.]a\"",
                " \"hxxp://218[.]59[.]12[.]92:42984/Mozi[.]m\""
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
            "iocCount": 10243,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10243,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "16508580f31edaaf4cbe08f9c417840fa4f918d0",
                "544c1e86e02e5ac18fabe17fff152e4c7e370990",
                "6ca71f241dad148aaee6ea4a345e1ef1adaa0ffb",
                "cfce3aaff2ad3eae49b37a60d606984bd1492e16",
                "b8b339de5ea80d17fb5ce2eb144d7ba28b33337a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47178,
            "activeSources": 8,
            "criticalAlerts": 26130,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16049,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10081,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3307,
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
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 15300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]39[.]255[.]227:57592/i",
                    "hxxp://222[.]137[.]38[.]14:58676/i",
                    "hxxp://115[.]57[.]199[.]189:44029/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]225[.]205",
                    "1[.]0[.]251[.]12",
                    "1[.]0[.]253[.]184"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1651,
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
                "count": 1419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "c11fd105f60ade90dc2611391ee6aa93e6c73375"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1412,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]86[.]65[.]202:22\"",
                    " \"47[.]92[.]208[.]27:22\"",
                    " \"106[.]75[.]11[.]70:801\""
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 620,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9000e46cabc64219fb1447d59d5443afcb412e36",
                    "e05145a93b7b5def1ca6c0e356cc4cdba3cbed9f",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 429,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                    "572029fec2909ba613cee3c3698b8a49af83b428"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"elf.mozi\"",
        "totalAttacksThisHour": 44497,
        "lastCalculated": "2026-07-23 19:56 IST"
    }
};
