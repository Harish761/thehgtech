// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-03T02:36:30.599005+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-03T02:36:30.299070+05:30",
    "lastUpdatedFormatted": "Aug 03, 2026 at 02:36 AM IST",
    "comparisonPeriod": "Aug 02 \u2013 Aug 03, 2026",
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
                "hxxps://kkkksgsgdfdjfdhhfdhlhdflhxkkkk-dpxklwputyu8[.]edgeone[.]dev/index[.]html",
                "hxxp://sp4ct-xardevik-biz8-surem-falon[.]pages[.]dev/",
                "hxxp://xefinity[.]weebly[.]com/",
                "hxxps://www[.]roblox[.]com[.]bi/users/960976628439/profile",
                "hxxp://updatecomcastt[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 525,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2093072334c5b85464a0b733ea4f6abe35d074db34304e0d3b5d18132b09ba22",
                " \"8c19a8ace6a6cbeb8d68c82a270659fb03160f263d15cd31db6e6317a148fee7",
                " \"d054f4822da5ea5e99edb57d809b9bacf86cfa3def04fa3711ddf88be7a68790",
                " \"9b272fcffe76786a28735e9f4f1d17d8eefcac68ae15a8f8dea05e07ba9f8dca",
                " \"8b7fcb7a8ca318bbaefb05dec4c4c4910811658e8987ab0360d63548c0990103"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1627,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1627,
                "newInLastHour": 7,
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
                "1[.]120[.]123[.]117",
                "1[.]140[.]3[.]11",
                "1[.]14[.]206[.]120",
                "1[.]159[.]48[.]69",
                "1[.]188[.]101[.]44"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4429,
                "newInLastHour": 4429,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70",
                "1[.]204[.]206[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15188,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15188,
                "newInLastHour": 15188,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://122[.]233[.]97[.]217:35897/bin[.]sh",
                "hxxp://61[.]54[.]60[.]21:57996/i",
                "hxxp://115[.]63[.]202[.]187:56132/i",
                "hxxp://116[.]138[.]247[.]7:47567/i",
                "hxxp://31[.]77[.]227[.]105/bins/cekizsafu"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4258,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4258,
                "newInLastHour": 3869,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"izxeqac[.]kendallfit[.]com\"",
                " \"kendallfit[.]com\"",
                " \"xgfxfq[.]k-optic[.]com\"",
                " \"k-optic[.]com\"",
                " \"wh9d0q5b[.]havenchurchraleigh[.]com\""
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
            "iocCount": 10177,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10177,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "05ba9d18bc4c00bec6bb5ed461fd889259929709",
                "014d51d79c5a5c80042abedb35231581ff07c2e7",
                "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                "7767913e33fac1ed9c448460267ca0e6cbe627b4",
                "fe50e363165e3e8d789daf4dc378f50a70f35a8a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47127,
            "activeSources": 8,
            "criticalAlerts": 25909,
            "activeCampaigns": 234
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15727,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10182,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3390,
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
                "count": 15175,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]225[.]205[.]22:58207/bin[.]sh",
                    "hxxp://180[.]253[.]8[.]96:35401/bin[.]sh",
                    "hxxp://182[.]126[.]83[.]182:58056/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]3[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1657,
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
                "count": 1429,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1386,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"60[.]247[.]206[.]23:808\"",
                    " \"156[.]224[.]18[.]21:25\"",
                    " \"156[.]224[.]18[.]21:22\""
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
                "count": 643,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "05ba9d18bc4c00bec6bb5ed461fd889259929709",
                    "014d51d79c5a5c80042abedb35231581ff07c2e7",
                    "ed0d4b2a9c090b6af6c99fd5b899831da206d835"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
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
                "count": 437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "820cd09994b3e76f6e89926a4b94ec0ccacd888c",
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 38868,
        "lastCalculated": "2026-08-03 02:36 IST"
    }
};
