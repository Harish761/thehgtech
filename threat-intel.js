// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-14T00:38:52.859023+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-14T00:38:52.555331+05:30",
    "lastUpdatedFormatted": "Mar 14, 2026 at 12:38 AM IST",
    "comparisonPeriod": "Mar 13 \u2013 Mar 14, 2026",
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
                "hxxp://roblox[.]com[.]ge/communities/5773131333/",
                "hxxps://mayankkumarw201-afk[.]github[.]io/netflix/",
                "hxxp://pub-e7b64c658d8647888de66296dd65df4a[.]r2[.]dev/index[.]html",
                "hxxps://94050105[.]xyz/",
                "hxxp://httpss-roblox[.]co/users/1721859/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 631,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cbd018a884e5314f5fb1cebf973012d7c420c6d0f633aeda37dfeff3cd739e61",
                " \"dd94c6b2076036c2fcbcdacc46e99bba82341ddcabcd3f6469bdf30395dbbe22",
                " \"62e944ff83ea367605a8b0b8f040aa8a88dab5397dd5b5bd358f56a43374995f",
                " \"89ba7c3f6f35c9c515c34f5995c825091e3361645511302cbb0748f29cefc5ec",
                " \"6463e3a87acbf6cb38a31a3fa0a79e1dbe24451d36a9cb9bed279ee434a565e6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1518,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1518,
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
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5620,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5620,
                "newInLastHour": 5620,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]231[.]28",
                "1[.]164[.]175[.]79",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19595,
                "newInLastHour": 19595,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]105[.]169:34906/i",
                "hxxps://otyhyn[.]gorun[.]in[.]net/verification[.]google",
                "hxxp://210[.]97[.]100[.]192:40017/i",
                "hxxp://115[.]52[.]16[.]7:40051/bin[.]sh",
                "hxxp://90[.]227[.]85[.]74:33976/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1465,
                "newInLastHour": 1460,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"effect-decide[.]gl[.]at[.]ply[.]gg\"",
                " \"otyhyn[.]gorun[.]in[.]net\"",
                " \"delivelagoo[.]gorun[.]in[.]net\"",
                " \"myfairshare[.]org\"",
                " \"opticparcel[.]gorun[.]in[.]net\""
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
            "iocCount": 9238,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9238,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4ee62bf47053d694373113a1c4eecc04bcb4c857",
                "ae5460fc8c44e01fefa9ca3b6a5ae8499e9b5bf7",
                "4ec241d16098181c4e15f1f324ba96db74f2e7bc",
                "9f301a45cd5aa087acc97ff0746bea7a05b366de",
                "407d4bc9cc3b67c3a5e48aeae8f384639df29105"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47789,
            "activeSources": 8,
            "criticalAlerts": 29491,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20270,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9221,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1051,
                "trend": "stable",
                "percentage": -2
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19566,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]239[.]230[.]180:50648/bin[.]sh",
                    "hxxp://182[.]126[.]115[.]113:52478/i",
                    "hxxp://59[.]103[.]86[.]150:39914/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]154[.]151",
                    "1[.]15[.]118[.]23",
                    "1[.]159[.]119[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1532,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "count": 638,
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
                "count": 540,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 524,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]126[.]149[.]104:20200\"",
                    " \"194[.]163[.]168[.]11:9999\"",
                    " \"108[.]62[.]141[.]15:8010\""
                ]
            },
            {
                "name": "Vidar",
                "count": 402,
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
                "name": "OffLoader",
                "count": 356,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae5460fc8c44e01fefa9ca3b6a5ae8499e9b5bf7",
                    "343a308d6aa6ef72febb594eb35d88f843d50852",
                    "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 26991,
        "lastCalculated": "2026-03-14 00:38 IST"
    }
};
