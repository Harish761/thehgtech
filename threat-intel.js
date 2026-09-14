// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-15T01:46:56.588107+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-15T01:46:56.221448+05:30",
    "lastUpdatedFormatted": "Sep 15, 2026 at 01:46 AM IST",
    "comparisonPeriod": "Sep 14 \u2013 Sep 15, 2026",
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
                "hxxps://sub[.]parsnetsecure[.]ir/",
                "hxxps://shopeejkt4782[.]blogspot[.]com/",
                "hxxps://shopee0488[.]blogspot[.]com/",
                "hxxps://www[.]virtualnextpartner[.]com/",
                "hxxp://app-sushiswaps[.]net/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 596,
                "newInLastHour": 166,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"93e19942883dfdbcf8eb4d2cec12ee758490114fc20d90dc86c601323a49d644",
                " \"4da5cdd61213038b7374fe450de2ef067cb226393509cb3269456ffbe334d225",
                " \"444a636124c0442519139851fe6de6456464444c0af869ecdd9e781ec31003d3",
                " \"46bab3823ff1ca4c8a8c47e08e1bc7ce21ad729815a24b343d8f7846f085a9f9",
                " \"1460f590457333c8131974b347670705ee72709a468abf6f7f8d03c58dcb90a8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1724,
                "newInLastHour": 0,
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
                "1[.]10[.]172[.]57",
                "1[.]14[.]121[.]115",
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]189[.]89[.]152"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5112,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5112,
                "newInLastHour": 5112,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]14[.]64[.]225",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12650,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12650,
                "newInLastHour": 12650,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]53[.]244[.]182:36990/i",
                "hxxp://221[.]14[.]41[.]222:53006/bin[.]sh",
                "hxxp://118[.]232[.]137[.]101:37450/i",
                "hxxps://f003[.]backblazeb2[.]com/file/pruva-downloads-202/Pruva-Buyuk-0[.]1[.]7[.]exe",
                "hxxp://210[.]208[.]104[.]156:38224/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7476,
                "newInLastHour": 6642,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"5[.]104[.]86[.]108:8881\"",
                " \"206[.]237[.]13[.]242:8082\"",
                " \"123[.]57[.]30[.]209:8084\"",
                " \"121[.]89[.]94[.]37:1443\"",
                " \"littlevictories[.]info\""
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
            "iocCount": 10703,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10703,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e458b2ccf8647aee41d64e46d1baadfc49e9e853",
                "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                "7bc298ef18b49cfd44b5b429209035207250e25e",
                "d8f9205907b3bd3de4fb0513e5c53f167064a452",
                "009a05eaf082d20ae13a65abda12afd959cd76de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47393,
            "activeSources": 8,
            "criticalAlerts": 23783,
            "activeCampaigns": 274
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13109,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10674,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 5131,
                "trend": "up",
                "percentage": 19
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]172[.]57",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]121[.]115"
                ]
            },
            {
                "name": "malware_download",
                "count": 12597,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]96[.]143[.]54:59412/i",
                    "hxxp://113[.]221[.]27[.]47:39578/i",
                    "hxxp://42[.]227[.]159[.]175:54532/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1724,
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
                "count": 1446,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]188[.]153:80\"",
                    " \"114[.]215[.]188[.]153:443\"",
                    " \"180[.]184[.]46[.]116:10074\""
                ]
            },
            {
                "name": "Vidar",
                "count": 779,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                    "7bc298ef18b49cfd44b5b429209035207250e25e",
                    "fcfc3b257b12e4c699e343f4c415b60f642d88f6"
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
                "count": 704,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 598,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]gibkerr[.]com/\"",
                    " \"hxxp://23[.]94[.]53[.]109:8888/supershell/login\"",
                    " \"hxxps://gophish[.]rsecure[.]lu/login?next=%2F\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 591,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]154[.]32[.]24:56003\"",
                    " \"66[.]179[.]29[.]5:9000\"",
                    " \"45[.]139[.]104[.]26:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 39882,
        "lastCalculated": "2026-09-15 01:46 IST"
    }
};
