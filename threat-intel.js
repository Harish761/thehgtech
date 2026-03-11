// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-12T02:17:53.236749+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-12T02:17:52.965371+05:30",
    "lastUpdatedFormatted": "Mar 12, 2026 at 02:17 AM IST",
    "comparisonPeriod": "Mar 11 \u2013 Mar 12, 2026",
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
                "hxxps://login[.]ai[.]crforum[.]co[.]uk/f21c2995-59d9-4f21-96b8-fa9d30778b09/login",
                "hxxps://www[.]roblox[.]com[.]gl/users/345086250874/profile",
                "hxxps://u[.]to/roblox-com-users-3450550874-profile/dXl2Ig",
                "hxxps://roblox[.]cd/games/8737602449/PLS-DONATE?privateServerLinkCode=41734316277659259890189232429580",
                "hxxps://roblox[.]com[.]ge/users/4208486548/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 680,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0ba7e5de76c5e671e3bc5730dd5adb42dda536b249ce8c2e738391da9faf275c",
                " \"38773ef36f826313577cfc0da088415b4d8408dafe7723c2592978ffee7d864d",
                " \"12312bc7cf6ec1db36cef76354f4ed420f484d9b333e912d90671d59247c7a5b",
                " \"e965f80d8e7e41432b4de49b941cb73fc4df1b1f5ef2b640930f5d065e337ef8",
                " \"13ce1b0a3f6e140e1dccba525abbc2c603107697321526a145c69e022a87956c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1533,
                "newInLastHour": 4,
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
                "1[.]12[.]64[.]5",
                "1[.]15[.]118[.]23",
                "1[.]170[.]227[.]213",
                "1[.]177[.]162[.]3",
                "1[.]188[.]103[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6900,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6900,
                "newInLastHour": 6900,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]162[.]231[.]28",
                "1[.]164[.]175[.]119",
                "1[.]168[.]217[.]136",
                "1[.]192[.]189[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19286,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19286,
                "newInLastHour": 19286,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://90[.]227[.]85[.]74:33976/bin[.]sh",
                "hxxp://42[.]230[.]40[.]4:56852/bin[.]sh",
                "hxxp://222[.]137[.]75[.]167:58422/bin[.]sh",
                "hxxps://quick-7[.]novalento[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]106[.]54:53718/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1086,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1086,
                "newInLastHour": 1084,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"quick-7[.]novalento[.]in[.]net\"",
                " \"red-stone[.]novalento[.]in[.]net\"",
                " \"softweb[.]silvaterra[.]in[.]net\"",
                " \"pcfs[.]org[.]pl\"",
                " \"main-hub[.]silvaterra[.]in[.]net\""
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
            "iocCount": 9204,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9204,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b45edee5059c8d032cb67eb6c347bc5c9b6b5cd4",
                "d238aa58c140e5e411718d8e6afcd7689723e518",
                "9b79676ef475463b0085b4fdaa5630348fe0ffaf",
                "240d001d1247df7fa6ab4af3c8ab311bdebf5b95",
                "a31a48281774353a1282ae49b81f0699a15a9d49"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47021,
            "activeSources": 8,
            "criticalAlerts": 29135,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19941,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9194,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 495,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
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
                "count": 19266,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://starlink[.]lunavilla[.]in[.]net/verification[.]google",
                    "hxxps://gold-v5[.]lunavilla[.]in[.]net/verification[.]google",
                    "hxxp://115[.]50[.]68[.]3:48865/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]64[.]5",
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]227[.]213"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1529,
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
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 637,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "56bad084f7d679dfddbe0f1ac2254b191051d348",
                    "363c5465989001701bfd2de6993628e0264dc7e7",
                    "581cff3c3ff5140030c1b2dae80093f37df765df"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 397,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b45edee5059c8d032cb67eb6c347bc5c9b6b5cd4",
                    "d238aa58c140e5e411718d8e6afcd7689723e518",
                    "b918317471273f6346359afabcc1f14c4d22ebfb"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 366,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gold-v5[.]lunavilla[.]in[.]net\"",
                    " \"deep-space[.]lunavilla[.]in[.]net\"",
                    " \"newpoint[.]estrellis[.]in[.]net\""
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42632,
        "lastCalculated": "2026-03-12 02:17 IST"
    }
};
