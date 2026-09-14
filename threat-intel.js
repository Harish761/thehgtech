// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-15T03:27:59.235070+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-15T03:27:58.973595+05:30",
    "lastUpdatedFormatted": "Sep 15, 2026 at 03:27 AM IST",
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
            "iocCount": 604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 604,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6546bdb224efc722030e60a0eefba1b327094081218bcd6a597f581ab326643d",
                " \"f10f34bdf2c7c49a54fe1acd8b51f1ca6ef23705f56b4f3fe72ba0714a67a5cc",
                " \"f61f4b6be052b4bc7d2590edd37544f210e0b79df968e739a00e586de66dd86f",
                " \"0df31ae16304556ffb96e5c5be3b0f5508223d21e3313d77cdf4e799d80effd7",
                " \"417ba8fd1d9879c1a85307bac243a9a5a6f548ebd370a0ff0dfd5bfa7c48a77a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1721,
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
                "1[.]189[.]89[.]152",
                "1[.]20[.]172[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5110,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5110,
                "newInLastHour": 5110,
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
            "iocCount": 12657,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12657,
                "newInLastHour": 12657,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]59[.]10[.]50:42559/bin[.]sh",
                "hxxp://125[.]43[.]226[.]64:40375/i",
                "hxxp://182[.]117[.]113[.]198:38038/i",
                "hxxp://113[.]231[.]20[.]5:58013/i",
                "hxxp://113[.]231[.]20[.]5:58013/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7782,
                "newInLastHour": 6946,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://srtylab[.]shop:8213/exports\"",
                " \"hxxp://teculse[.]click:9210/images\"",
                " \"hxxp://gyadazs[.]shop:5627/documents\"",
                " \"shiftfwd[.]com\"",
                " \"scubapc[.]com\""
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
            "iocCount": 10687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10687,
                "newInLastHour": 0,
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
            "totalIndicators": 48454,
            "activeSources": 8,
            "criticalAlerts": 23954,
            "activeCampaigns": 280
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13273,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10681,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5129,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]172[.]57",
                    "1[.]14[.]121[.]115",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 12650,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]53[.]244[.]182:36990/i",
                    "hxxp://221[.]14[.]41[.]222:53006/bin[.]sh",
                    "hxxp://118[.]232[.]137[.]101:37450/i"
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
                "count": 1447,
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
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5[.]104[.]86[.]108:8881\"",
                    " \"162[.]35[.]122[.]126:3389\"",
                    " \"162[.]35[.]122[.]126:22\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1046,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]erecycling[.]shop\"",
                    " \"parsebazar[.]com\"",
                    " \"lan-trad[.]fr\""
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
                "count": 630,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"littlevictories[.]info\"",
                    " \"pagyamorim[.]com[.]br\"",
                    " \"nigerianationalsanitationconference[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"osx.macsync\"",
        "totalAttacksThisHour": 40034,
        "lastCalculated": "2026-09-15 03:27 IST"
    }
};
