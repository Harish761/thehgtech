// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-28T00:53:08.341501+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-28T00:53:08.053469+05:30",
    "lastUpdatedFormatted": "Mar 28, 2026 at 12:53 AM IST",
    "comparisonPeriod": "Mar 27 \u2013 Mar 28, 2026",
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
                "hxxp://litere[.]uvt[.]ro/conferinte",
                "hxxp://one[.]link/evink/1",
                "hxxp://insta-verify-now[.]cyou/",
                "hxxps://www[.]robiox[.]com[.]py/games/1537690962/Bee-Swarm-Simulator?privateServerLinkCode=046669058921466022733654381262",
                "hxxps://www[.]robiox[.]com[.]py/games/88270880256027/WORKING-SUSSY-SWAP-SIMULATOR-2?privateServerLinkCode=005277144126727567749812678521"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 770,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 770,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"daaf92a3eb075770eeb95d618f49046246d83b3dea7855ea503a91b249c8e87b",
                " \"727a5adad5f1e298c5aaff0503cd445b93f20d09de08313dd51c072a58ccccc9",
                " \"ae3038f730e9e85bac4f57222821e24cc3b78a23555d74e762ba129bc8d9eec0",
                " \"9189499c98ba9a90ecebfb73b559d6bd44009fb7c58ed53f1a103a5b6e51a3f4",
                " \"1f5b84a5c549e271b28099f1d01fd7f62c01bfc5e1819349ee909745a83c4b48"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1553,
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
                "1[.]14[.]3[.]240",
                "1[.]177[.]162[.]2",
                "1[.]182[.]191[.]117",
                "1[.]183[.]46[.]50",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4332,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4332,
                "newInLastHour": 4332,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]192[.]202[.]92",
                "1[.]204[.]166[.]3",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21170,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21170,
                "newInLastHour": 21170,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ext1infra[.]hastyraja[.]in[.]net/verification[.]google",
                "hxxp://121[.]231[.]159[.]254:3745/i",
                "hxxp://110[.]182[.]236[.]7:49179/i",
                "hxxps://svc4sat[.]playrevenater[.]in[.]net/verification[.]google",
                "hxxp://120[.]28[.]197[.]150:60037/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1084,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1084,
                "newInLastHour": 1070,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ext2proxy[.]hastyraja[.]in[.]net\"",
                " \"ext1infra[.]hastyraja[.]in[.]net\"",
                " \"hu[.]yunduans[.]com\"",
                " \"svc4sat[.]playrevenater[.]in[.]net\"",
                " \"144[.]31[.]48[.]132:34556\""
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
            "iocCount": 9410,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9410,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38e6803834672d7669a414b41a68a80800041309",
                "b39ef781d5025993ed84ed86715d0e1ad16e3520",
                "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                "5b2a562d69edcf47f050790a2b8a2a04816ed1e5",
                "7730cc62a58f9c1c91704b5805e186e977b816b3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49187,
            "activeSources": 8,
            "criticalAlerts": 31278,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21901,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9377,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 416,
                "trend": "down",
                "percentage": -64
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
                "percentage": 90
            },
            {
                "name": "Tech",
                "percentage": 9
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21106,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://dev1proc[.]banchiktend[.]in[.]net/verification[.]google",
                    "hxxp://175[.]168[.]253[.]206:46688/i",
                    "hxxps://cl4link[.]conditoverwinter[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]177[.]162[.]2",
                    "1[.]182[.]191[.]117"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1550,
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
                "count": 1394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02"
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
                "count": 653,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "38e6803834672d7669a414b41a68a80800041309",
                    "b39ef781d5025993ed84ed86715d0e1ad16e3520",
                    "5b2a562d69edcf47f050790a2b8a2a04816ed1e5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 549,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a",
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 459,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dev1proc[.]banchiktend[.]in[.]net\"",
                    " \"cl4link[.]conditoverwinter[.]in[.]net\"",
                    " \"cl3dev[.]conditoverwinter[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 451,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7730cc62a58f9c1c91704b5805e186e977b816b3",
                    "0a95355a64c3fe3f52695f97595037481ca11c4d",
                    "36ab4c53471d9071a08c916360e6b9e44b7bcf51"
                ]
            },
            {
                "name": "OffLoader",
                "count": 363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                    "f72b15a90b86d3b726a98c4b54b1912ff67f0014",
                    "f9c3b7e52c81b2001740f7fcdb39339549af04dc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41911,
        "lastCalculated": "2026-03-28 00:53 IST"
    }
};
