// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-09T01:25:05.285451+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-09T01:25:04.918229+05:30",
    "lastUpdatedFormatted": "May 09, 2026 at 01:25 AM IST",
    "comparisonPeriod": "May 08 \u2013 May 09, 2026",
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
                "hxxp://blyaddddd[.]vercel[.]app/",
                "hxxp://ipfs[.]io/ipfs/bafkreigener3zpogmhclsop3csqwj64suzvs3qq4okisrhdgnqjlqejkvy",
                "hxxp://updates[.]webaccess-alert[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxps://chalaalbretch-challa1[.]pages[.]dev/help/contact/2572367898914052606:4700:310c::ac42:2d30/",
                "hxxps://david-houston3855463331[.]pages[.]dev/help/contact/618399211175438/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1027,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f61c420ec0fadca14a79bad8f5b6dcd9fe162b8eefd9c19957fbb90e3d99da23",
                " \"2071a114d26da204891d670de7035f869763799dc40aba610149e11846a26f12",
                " \"0455e4cb8633c16e918aa08e3e602f3d1b441bf4bb1aaa6588446af97783bb78",
                " \"103bf7cda93749567f7e16e48cd205fd059fdda7f7396a781c6e4a096a3b47d7",
                " \"4d6355f4a967e7e85ccef14a9390bf08d1112598f2ff574beb316c77d24d5aa4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1623,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1623,
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
                "1[.]11[.]228[.]4",
                "1[.]183[.]41[.]171",
                "1[.]191[.]146[.]96",
                "1[.]192[.]251[.]154",
                "1[.]193[.]63[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4379,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4379,
                "newInLastHour": 4379,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]13[.]22[.]203",
                "1[.]162[.]225[.]162",
                "1[.]162[.]247[.]201",
                "1[.]20[.]186[.]129"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28374,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28374,
                "newInLastHour": 28374,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]96[.]139[.]78:38955/i",
                "hxxp://125[.]42[.]232[.]198:54145/bin[.]sh",
                "hxxps://extnets[.]centaur-victim[.]lat/k5s8-byna-tqed-r6mwn-swmbz-jb2jq3v/access[.]fltr",
                "hxxps://pkgrunstat[.]cabardian-year[.]lat/s3yi7g-ma327-8b2fi-63zr3-x2775-6qb/updates[.]gstate",
                "hxxp://61[.]52[.]54[.]249:41524/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1199,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1199,
                "newInLastHour": 1193,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"domregs[.]centaur-victim[.]lat\"",
                " \"202[.]95[.]18[.]30:53\"",
                " \"ns1[.]cacheflow[.]top\"",
                " \"93[.]127[.]160[.]86:6553\"",
                " \"93[.]127[.]160[.]86:6554\""
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
            "iocCount": 9634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9634,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6da5a6bce253699b8db995f8955a4bf6482f12a3",
                "04472c9faf1014830def8016729f50a2b773a0ab",
                "cf08f1d2e3da9567cd2398ecb5f8df0503ce857f",
                "d30376a0f461e6cc126e18beb023e71c703912c0",
                "12adb13f09a921ef558cd28c50ac4de81e1b8ad3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57051,
            "activeSources": 8,
            "criticalAlerts": 38930,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29268,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9662,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 271,
                "trend": "stable",
                "percentage": 2
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 85
            },
            {
                "name": "Tech",
                "percentage": 14
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
                "count": 28262,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://opsmgrsvcs[.]radio-technic[.]lat/s3yi7g-ma327-8b2fi-63zr3-x2775-6qb/updates[.]gstate",
                    "hxxps://opsmgrs[.]comforter-panel[.]lat/k5s8-byna-tqed-r6mwn-swmbz-jb2jq3v/access[.]fltr",
                    "hxxps://cpuprosmgr[.]radio-technic[.]lat/s3yi7g-ma327-8b2fi-63zr3-x2775-6qb/updates[.]gstate"
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
                    "1[.]156[.]85[.]121",
                    "1[.]180[.]183[.]158"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1626,
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
                "count": 1411,
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
                "name": " \"js.clearfake\"",
                "count": 734,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cpuprosmgr[.]radio-technic[.]lat\"",
                    " \"cpupros[.]comforter-panel[.]lat\"",
                    " \"vpsrunproc[.]radio-technic[.]lat\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 680,
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
                "count": 554,
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
                "count": 526,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "693673f31128d9637630776f2989b5c29c77b04d",
                    "4ea9780c4039e050f0e2433deaa076a1ed3e1cec",
                    "87e5589d7d33aa32595bc8f2ac6275a4f1620fb1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 404,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 49266,
        "lastCalculated": "2026-05-09 01:25 IST"
    }
};
