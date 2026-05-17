// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-17T22:39:48.214296+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-17T22:39:47.906341+05:30",
    "lastUpdatedFormatted": "May 17, 2026 at 10:39 PM IST",
    "comparisonPeriod": "May 16 \u2013 May 17, 2026",
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
                "hxxps://cn[.]mpmxzu[.]com/home/register?code=49443",
                "hxxps://roblox[.]com[.]ml/users/246689392158/profile",
                "hxxp://www[.]s[.]id/robloxusers3316424profile/",
                "hxxps://sahithikamma[.]github[.]io/Netflix-Clone/",
                "hxxps://avanteshipping[.]com/wp-content/aktualisierung/easybk-de/lg/7WEVBU8090/Select/login[.]php?cgi=GiELKO3wYgb73SkZHcabpx57rVT8RQgiiAohZwh067Pf9jqiAMA3n55UAdzdQBRNvcgI3qsG3aGiDzWnC3O4FPRkDXr6VwYkuCzMy4yEiLJh9"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 661,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 661,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"342b3a213e9bf7ccd880a245106867e584dee2c14eb8025fc0fbd4820852a218",
                " \"8484bc15ecc198118f1965caba4eefee54e89ce721abe672d2eb837e48c26689",
                " \"3b21f0224c8ed9d1efb133a6093dfc56ed0fbf3829123696796b708970c6044b",
                " \"3b4416e2fc2c5642d0238ba1dda543e4cf5c131ab1b1af2bd8260cb0d3296f4d",
                " \"1ce808d1d4bb89ecd9c2eb1932c1dad00de80978d13f358a4ea18f5e7074e88e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
                "newInLastHour": 32,
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
                "1[.]11[.]228[.]4",
                "1[.]15[.]51[.]236",
                "1[.]157[.]23[.]212",
                "1[.]157[.]2[.]5",
                "1[.]157[.]71[.]165"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5319,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5319,
                "newInLastHour": 5319,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]205[.]204[.]213",
                "1[.]214[.]117[.]218",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25009,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25009,
                "newInLastHour": 25009,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]40[.]150[.]115:48664/i",
                "hxxp://115[.]52[.]29[.]200:33015/bin[.]sh",
                "hxxps://jcdlhks8[.]node-pulse[.]digital/?ublib=04a5ed38-c774-4926-94ad-75b693ad6146",
                "hxxp://42[.]239[.]189[.]168:49160/bin[.]sh",
                "hxxp://182[.]113[.]36[.]26:38559/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 585,
                "newInLastHour": 585,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"aimgrub2-cloud-sphere-get[.]garden\"",
                " \"jcdlhks8[.]node-pulse[.]digital\"",
                " \"ofx3xjbp[.]node-pulse[.]digital\"",
                " \"node-pulse[.]digital\"",
                " \"siteyet-script-horizon-go[.]garden\""
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
            "iocCount": 9664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9664,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "76f87f2fb9c132bdc5fa55c996c303ae7c6dac8f",
                "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                "42874ed125e23b73be13b7b8a7b89305ce979661",
                "bb1df8c1e6236408eb85294e9ce002f9222e57db"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52624,
            "activeSources": 8,
            "criticalAlerts": 35067,
            "activeCampaigns": 187
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25451,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9616,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 302,
                "trend": "down",
                "percentage": -33
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
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24818,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]142[.]210[.]194:44931/i",
                    "hxxps://great-fauna-tcpipgay-go-system[.]garden/d6ce0e64-d74c-4fcf-976a-799cadc7963b/google[.]ct",
                    "hxxp://123[.]9[.]93[.]220:57721/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]140[.]8[.]117",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1612,
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
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
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
                "count": 675,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
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
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661",
                    "bb1df8c1e6236408eb85294e9ce002f9222e57db"
                ]
            },
            {
                "name": "OffLoader",
                "count": 398,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46412,
        "lastCalculated": "2026-05-17 22:39 IST"
    }
};
