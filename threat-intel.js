// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-20T18:51:11.300372+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-20T18:51:11.002636+05:30",
    "lastUpdatedFormatted": "Mar 20, 2026 at 06:51 PM IST",
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
            "iocCount": 655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 655,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bdf731c1a813df3c97b75d6fbebad5a5cf89e22a54931b89a00a409358324b1b",
                " \"fa22e94a98d19959c82580dc1cafcfc6ec762ed57dea9f48e3b7d0f9279a8cce",
                " \"7e9171fa04a9019727f31dfb23e735cfc63daf01788cfaeb809705e926173ac4",
                " \"5dbb46d0d8c0d5eaab40d620ce2636ab2a8da5575eef4ae80f91b4318f0e8e0d",
                " \"9ee28afc75d82838e07a0db2e9e5685eb008c12c4bef528d9af97670a562b155"
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
            "iocCount": 5347,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5347,
                "newInLastHour": 5347,
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
            "iocCount": 20428,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20428,
                "newInLastHour": 20428,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://proto-h4ul[.]withregw[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]123[.]210:55914/bin[.]sh",
                "hxxps://neo-rnount[.]withregw[.]in[.]net/verification[.]google",
                "hxxp://112[.]249[.]78[.]255:38086/i",
                "hxxps://anch0-bridge[.]withregw[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1572,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1572,
                "newInLastHour": 1549,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"103[.]215[.]77[.]214:8848\"",
                " \"microsoft-symantec[.]art\"",
                " \"45[.]192[.]169[.]50:8000\"",
                " \"proto-h4ul[.]withregw[.]in[.]net\"",
                " \"gaurdagent[.]com\""
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
            "iocCount": 9323,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9323,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c783a24f93905bfe4aac11a466a70c6454a67d1d",
                "ff792e74745c791376163915b18d340d305def87",
                "a4ba61d5a30556326740600fd04ad5dfa7664c4f",
                "f480d671e8426ceac3f5f31071195e21ee8179e7",
                "38b2bdef9fc5007af8e2fe63e3dc03fddc554abd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48553,
            "activeSources": 8,
            "criticalAlerts": 30404,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21093,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9311,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 554,
                "trend": "up",
                "percentage": 23
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
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]155[.]202[.]167:51648/i",
                    "hxxps://neo-c1iff[.]trueslak[.]in[.]net/verification[.]google",
                    "hxxp://110[.]37[.]118[.]101:49747/i"
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
                "count": 1536,
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
                "count": 643,
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
                "count": 477,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"neo-c1iff[.]trueslak[.]in[.]net\"",
                    " \"merlithar1[.]trueslak[.]in[.]net\"",
                    " \"adzpzg[.]trueslak[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 438,
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
                "name": " \"unknown\"",
                "count": 381,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://clou-dprotect[.]com/irghajlrjcqboouuum\"",
                    " \"hxxps://clou-dprotect[.]com/zzlhnmevqbhluvizzm\"",
                    " \"hxxps://clou-dprotect[.]com/aolrjcpzwqflvuxgfs\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.bumblebee\"",
        "totalAttacksThisHour": 42676,
        "lastCalculated": "2026-03-20 18:51 IST"
    }
};
