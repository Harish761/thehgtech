// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-07T08:55:52.049663+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-07T08:55:51.762616+05:30",
    "lastUpdatedFormatted": "Apr 07, 2026 at 08:55 AM IST",
    "comparisonPeriod": "Apr 06 \u2013 Apr 07, 2026",
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
                "hxxp://juno-web-mail-75544b[.]webflow[.]io/",
                "hxxp://aaktivsipylaterindon[.]prestocu[.]biz[.]id/",
                "hxxps://zk-tiantianyingqiu[.]com/jp/",
                "hxxps://coeinsquarreelogi[.]webflow[.]io/",
                "hxxps://meets-choosing-jefferson-documented[.]trycloudflare[.]com/"
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
                "newInLastHour": 83,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1858b9d82008be3acdec6d8410c33006c36454089a4f0e3f3e3c44a560af4b1d",
                " \"b613964e4d20e3732d599081ebd6e3861610c6ab3fb15dd8807f95fc80e307b2",
                " \"ff646d00330c7c39068e15dbb78b1bc596610b3bdf5a2b3876e8090faacd7c1b",
                " \"5c829195264153eb1b2148b1e2cbc0a0d3fd1c18660449ea85b720c92b85cfe8",
                " \"1fd7675e3bc001c6f6373c87a90fa381b0c2834fca40bce4382dab2da64ac72b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1589,
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
                "1[.]0[.]248[.]118",
                "1[.]123[.]227[.]253",
                "1[.]157[.]102[.]155",
                "1[.]157[.]69[.]63",
                "1[.]178[.]124[.]212"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4265,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4265,
                "newInLastHour": 4265,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]145[.]124[.]191",
                "1[.]207[.]102[.]177",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21438,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21438,
                "newInLastHour": 21438,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://synth-portal[.]dialecticalgrid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxps://anti-node[.]dialecticalgrid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://110[.]37[.]119[.]220:42682/bin[.]sh",
                "hxxps://thesis-sync[.]dialecticalgrid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxps://law-check[.]axiomatrix[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 761,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 761,
                "newInLastHour": 755,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"synth-portal[.]dialecticalgrid[.]in[.]net\"",
                " \"anti-node[.]dialecticalgrid[.]in[.]net\"",
                " \"thesis-sync[.]dialecticalgrid[.]in[.]net\"",
                " \"law-check[.]axiomatrix[.]in[.]net\"",
                " \"167[.]148[.]195[.]179:443\""
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
            "iocCount": 9455,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9455,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "57beeab4afc1c37c717071048978266c9d48d9d5",
                "ed4739e216d716d1acf5ea5c7e0a1af900af57c3",
                "3eb4d7d8bce32ac81b93f1b828f32865d088eeec",
                "7e8dcf46f1bfd2574458730958b846d30cc24f63",
                "4866daa967432d5345a46c395fd6bd3825794c66"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49855,
            "activeSources": 8,
            "criticalAlerts": 32207,
            "activeCampaigns": 190
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22731,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9476,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 239,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 88
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21902,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://coat-logic[.]enameledtack[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                    "hxxp://61[.]53[.]123[.]174:56631/i",
                    "hxxp://123[.]9[.]247[.]90:37586/bin[.]sh"
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
                    "1[.]15[.]227[.]58",
                    "1[.]157[.]102[.]155"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1591,
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
                "count": 1400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea",
                    "42f9fb369604befacac247a220b2275c8e3dbb00",
                    "ee5e5cb42ab6153eb050d953ba58f03cd5b64f80"
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
                "count": 663,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "158c34ec24ca20df4cdce6f85d495a752d1cf446",
                    "5d2d24993bfab8579ce17ba0d5a18ab657c2fc90",
                    "9149e1f1d80f8e5b8bcf4311cfe94d40f7dc4702"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad"
                ]
            },
            {
                "name": "Vidar",
                "count": 478,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "57beeab4afc1c37c717071048978266c9d48d9d5",
                    "be97447135b5337ed8a791276e6bcfe4d6f556f7",
                    "1c1edfab550d090f1278bcdcafc986ac89827f5c"
                ]
            },
            {
                "name": "OffLoader",
                "count": 385,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "448e34bdaa4390ecde578cf01c491ed16d6563a0",
                    "515c241fb00cbbf17827c3bfbdb7ad5378ed0fcd",
                    "7442a9c99b2b550565fea4c0c5a69a7d441c475e"
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
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 41846,
        "lastCalculated": "2026-04-07 08:55 IST"
    }
};
