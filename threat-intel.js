// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-20T22:28:28.568342+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-20T22:28:28.278992+05:30",
    "lastUpdatedFormatted": "Mar 20, 2026 at 10:28 PM IST",
    "comparisonPeriod": "Mar 19 \u2013 Mar 20, 2026",
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
                "hxxp://ipfs[.]io/ipfs/bafkreiffddvbp6disumwe2eocy4hbz3dmzh6crxydvogx5l7xvrxtsgp6m",
                "hxxps://netflix-clone-cyan-six[.]vercel[.]app/",
                "hxxps://www[.]netflix-clone-cyan-six[.]vercel[.]app/",
                "hxxps://netcoins--logi-tab-cdn[.]webflow[.]io/",
                "hxxps://netcains-login[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 648,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"578b8982422bdc9eafccf8477c8d1f18be7a2bfd0e9d007236544eda444cdb13",
                " \"149182139a67e57ed056d4280ba7570b030591e87886c679b817b664d8277d3f",
                " \"5dac597e13f6ddef6f0c50afe394bf6945e7105648e00bd1e845af96c90698db",
                " \"2f60f97655a056851cd01186b4e22110d3360c5ed5500da061ec5e8ea6cd73b6",
                " \"f1385cd6c1ca941eaf6c6ed0d7402de547f40403718e4f698a4dd81cbd3f8878"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1534,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1534,
                "newInLastHour": 3,
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
                "1[.]10[.]154[.]89",
                "1[.]10[.]165[.]207",
                "1[.]15[.]118[.]23",
                "1[.]174[.]37[.]137",
                "1[.]177[.]63[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5316,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5316,
                "newInLastHour": 5316,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]163[.]233[.]52",
                "1[.]189[.]21[.]20",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20519,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20519,
                "newInLastHour": 20519,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]120[.]160[.]228:54183/i",
                "hxxp://219[.]155[.]222[.]14:53357/bin[.]sh",
                "hxxp://182[.]113[.]31[.]224:40470/i",
                "hxxps://dc2point[.]operationalsystem[.]in[.]net/verification[.]google",
                "hxxp://175[.]174[.]106[.]223:44857/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1719,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1719,
                "newInLastHour": 1691,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dc4path[.]operationalsystem[.]in[.]net\"",
                " \"dc2point[.]operationalsystem[.]in[.]net\"",
                " \"hxxps://telegram[.]me/t22see\"",
                " \"hxxps://steamcommunity[.]com/profiles/76561198727080522\"",
                " \"dc1proc[.]operationalsystem[.]in[.]net\""
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
            "iocCount": 9334,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9334,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                "23d713f791bed5fda6646d195fe7402cbb5ba95b",
                "e57c93f657e5054142f985327fdff4eb50b349f0",
                "c783a24f93905bfe4aac11a466a70c6454a67d1d",
                "ff792e74745c791376163915b18d340d305def87"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48816,
            "activeSources": 8,
            "criticalAlerts": 30408,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21107,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 840,
                "trend": "up",
                "percentage": 51
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://proto-h4ul[.]withregw[.]in[.]net/verification[.]google",
                    "hxxp://110[.]37[.]123[.]210:55914/bin[.]sh",
                    "hxxps://neo-rnount[.]withregw[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]154[.]89",
                    "1[.]10[.]165[.]207",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1533,
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
                "count": 1391,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 642,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "634e580a85c375140b9a7f5972559dfd4f02033d",
                    "126fb0c3c98f6c3f9e359774e9b174a810eb9871",
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 543,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032",
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 467,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"proto-h4ul[.]withregw[.]in[.]net\"",
                    " \"neo-rnount[.]withregw[.]in[.]net\"",
                    " \"anch0-bridge[.]withregw[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a4ba61d5a30556326740600fd04ad5dfa7664c4f",
                    "2e8bbd7a8e8a1548899ad4598d4b081e59f5e994",
                    "4bc1bc8544803e05f93b5c88cbe0cec626ad95ad"
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
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 42885,
        "lastCalculated": "2026-03-20 22:28 IST"
    }
};
