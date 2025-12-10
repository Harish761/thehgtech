// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-10T14:10:38.077583+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-10T14:10:37.726268+05:30",
    "lastUpdatedFormatted": "Dec 10, 2025 at 02:10 PM IST",
    "comparisonPeriod": "Dec 09 \u2013 Dec 10, 2025",
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
                "hxxps://www[.]robiox[.]com[.]py/users/476431298791/profile",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/pag1_files/saved_resource(2)[.]html/",
                "hxxps://roblox[.]com[.]ge/games/920587237/DAY-9-Adopt-Me?privateServerLinkCode=57328233226280364464937420557884",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/pag1_files/saved_resource(4)[.]html/",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/saved_resource(3)[.]html/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1666,
                "newInLastHour": 144,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7815ad55f60d7c6adfb81217300cb898a2cb5b570a89a5f45520967731bd1eac",
                " \"ea8167c61681db5a133270595a261ea3f0a8f9f2cdb2b8b1b31b9911dcd601ae",
                " \"3a957865951c7b1f03533017f69f030fd54bddc116ddb90799cdced217a35d11",
                " \"d42b4e0a968df2f299da9a2fef8e5cee57bf64ca15095b4591b03333ffb21000",
                " \"ed04963fb0be269ce89ce73ac5cd91a5c4b06e3999cfbda45e9d43e8beb63628"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1497,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1497,
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]118[.]23",
                "1[.]176[.]134[.]251",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7147,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7147,
                "newInLastHour": 7147,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]15[.]24[.]14",
                "1[.]161[.]49[.]186",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28824,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28824,
                "newInLastHour": 28824,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]133[.]98[.]101:55616/i",
                "hxxp://221[.]14[.]172[.]114:51920/i",
                "hxxp://115[.]61[.]116[.]220:35972/bin[.]sh",
                "hxxp://117[.]204[.]164[.]249:50917/bin[.]sh",
                "hxxp://115[.]50[.]38[.]78:38384/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3755,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3755,
                "newInLastHour": 3560,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"delta[.]intrl2bi1e[.]ru\"",
                " \"guard[.]intrl2bi1e[.]ru\"",
                " \"49[.]12[.]116[.]30:443\"",
                " \"95[.]217[.]26[.]38:443\"",
                " \"hto[.]demisemarzban[.]top\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8608,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d1f7fd94b5fdc4a570d49ff0e3891ce80c27e4ec",
                "ec6031f63b6551e10f61276781c325e6028cb1bf",
                "48f665e237042042432ae4d2aba268d6b091e2af",
                "1020b90292c49ca733fc79c1bd967dc657d774ca",
                "ae6ca91be0e1145adf2f7120ca3edec533d7573f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 59150,
            "activeSources": 8,
            "criticalAlerts": 38698,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30119,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8579,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1992,
                "trend": "stable",
                "percentage": 1
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
                "count": 28547,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://185[.]14[.]92[.]152/nuts/bolt",
                    "hxxp://222[.]138[.]151[.]183:53082/i",
                    "hxxp://51[.]81[.]104[.]115/nuts/bolts"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]251",
                    "1[.]177[.]22[.]68"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1497,
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
                "count": 1359,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195",
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 1013,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"api-logs-b794[.]onrender[.]com\"",
                    " \"hxxps://api-logs-b794[.]onrender[.]com/api/send\"",
                    " \"hxxps://api-logs-b794[.]onrender[.]com/api/dcinjection-send\""
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 763,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"142[.]202[.]189[.]107:50001\"",
                    " \"107[.]189[.]21[.]140:7000\"",
                    " \"69[.]167[.]11[.]28:443\""
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 403,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"repositorylinux[.]info\"",
                    " \"gfxnick[.]emerald[.]usbx[.]me\"",
                    " \"merahmerona[.]sbs\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 54985,
        "lastCalculated": "2025-12-10 14:10 IST"
    }
};
