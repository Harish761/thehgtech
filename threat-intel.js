// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-16T11:57:47.724073+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-16T11:57:47.323980+05:30",
    "lastUpdatedFormatted": "Jul 16, 2026 at 11:57 AM IST",
    "comparisonPeriod": "Jul 15 \u2013 Jul 16, 2026",
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
                "hxxps://nl-i19sdn12k[.]replit[.]app/view/482915",
                "hxxp://cpciservicesnh[.]com/Adobe/",
                "hxxp://www[.]x25n[.]top/",
                "hxxp://www[.]x25q[.]top/",
                "hxxp://www[.]y26v[.]top/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 896,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 896,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fcbf12f9e6b77e73ac64cf4f64f3cd10732f67d9c2803f46a2b4f789044c0eca",
                " \"1a48e4203a5016149cdec6135db83bce74bcba24834af41e591dd920599e3db2",
                " \"cc284d76a9c408ce6509113296dba0b4c8db99178f564be2501e63dd8ec79efb",
                " \"2dc880d2bde626786b8dec21da6e688e096a2ea91e1358138ad2c05982f8d33a",
                " \"b4764b40d8552c955e65797bcb7e80823be94ff2f436f26440da8d844ed2c018"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1659,
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
                "1[.]119[.]194[.]226",
                "1[.]159[.]52[.]66",
                "1[.]159[.]90[.]31",
                "1[.]180[.]184[.]182",
                "1[.]190[.]75[.]56"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5195,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5195,
                "newInLastHour": 5195,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]231[.]16",
                "1[.]197[.]102[.]62",
                "1[.]20[.]140[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20961,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20961,
                "newInLastHour": 20961,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ohdvttqo[.]tampabayspin[.]com/988124bc-6865-4532-8213-99b59c138374",
                "hxxp://110[.]39[.]232[.]208:45430/i",
                "hxxp://110[.]37[.]111[.]8:54696/i",
                "hxxps://fmgvaoemg[.]jadoou[.]lat/040fb16f-1e98-4a55-94da-d769e10c25d4",
                "hxxp://222[.]141[.]79[.]99:58811/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4330,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4330,
                "newInLastHour": 4043,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ohdvttqo[.]tampabayspin[.]com\"",
                " \"extranet-partner-report[.]com\"",
                " \"drive-mail-folder9133[.]info\"",
                " \"146[.]70[.]87[.]237:14888\"",
                " \"146[.]70[.]87[.]237:6579\""
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
            "iocCount": 10079,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10079,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "47a42b7e960e081fb973d80964554f4dea813c9d",
                "8ef5bc8cb7d00d8b89bacbd4f9405f402d1a002e",
                "0f50074c5489b97def2d220b8cd70bada3361220",
                "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                "1dedacf3710f30c15b9e73c9d719a969eec755e5"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53329,
            "activeSources": 8,
            "criticalAlerts": 32016,
            "activeCampaigns": 269
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21828,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10188,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3600,
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
                "name": "malware_download",
                "count": 20910,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://vqsoqrdq[.]hazarat[.]now/b741ed62-eedb-4b5e-9d74-69fad8d9d0c1",
                    "hxxps://rmxixoixm[.]pdfbama[.]com/7788a2e7-8243-4e1c-bbbb-dcbfa85ee93c",
                    "hxxps://zdjnhqub[.]bingobet[.]bingo/?ublib=a62d2564-ae2e-4f2f-a50e-efa65802d2cd"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]159[.]52[.]66",
                    "1[.]159[.]90[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1473,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]139[.]50[.]42:60000\"",
                    " \"158[.]178[.]230[.]77:22\"",
                    " \"43[.]139[.]50[.]42:22\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c11fd105f60ade90dc2611391ee6aa93e6c73375",
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889"
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 647,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5",
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 445,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "572029fec2909ba613cee3c3698b8a49af83b428",
                    "68ffb512bc3f1f544502736127d3bdbd6ece390b",
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45536,
        "lastCalculated": "2026-07-16 11:57 IST"
    }
};
