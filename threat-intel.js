// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-13T01:45:18.294036+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-13T01:45:18.003730+05:30",
    "lastUpdatedFormatted": "May 13, 2026 at 01:45 AM IST",
    "comparisonPeriod": "May 12 \u2013 May 13, 2026",
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
                "hxxps://member20[.]agency-connect-profile[.]com/",
                "hxxps://konto-aktualisiert-werden[.]sellarepartire[.]it/3cc08211d63465a33adec6f6cd376b10/?3cc08211d63465a33adec6f6cd376b10=yNnApML25lR&payer",
                "hxxp://confirmed-meta[.]busines-help-center[.]com/",
                "hxxps://administrator-meta[.]busines-help-center[.]com/",
                "hxxps://allegrolokalnie[.]lokalna-ofeta2[.]shop/oferta/Xiaomi-17-Pro-256-GB/214503809"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 550,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7e1d756f0501e2f730cf0ef8e64a3a79a003d09d6ab4837de3d2f9c94c772d0e",
                " \"ef5d274ea8c4c2f1c105cf400c935359187fc435ff6874daa6792e18b080a1be",
                " \"09dd1c0e40fab43fff040945e75987f4568dd44d4095441683ee6a1ae63b301d",
                " \"5e9572a59b634b39f9d8d10f6fb2c96c2b211dcbf291da2c2596fb04ee831a8a",
                " \"ee3d27c0299ae0923ba77648cb50fd134edd9ba787a18988a4d1ce709aa23aa3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1604,
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
                "1[.]11[.]228[.]4",
                "1[.]15[.]51[.]236",
                "1[.]180[.]183[.]158",
                "1[.]183[.]17[.]214",
                "1[.]188[.]101[.]92"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4796,
                "newInLastHour": 4796,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]13[.]22[.]203",
                "1[.]162[.]222[.]129",
                "1[.]194[.]210[.]131",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29140,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29140,
                "newInLastHour": 29140,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://supplyflash[.]wiki/164dbbd6-b83d-4568-b01b-dc6f1f1d1a3d/google[.]ct",
                "hxxps://screencard[.]wiki/438fee3c-f140-4a22-ac73-31cf98084491/google[.]ct",
                "hxxp://95[.]135[.]208[.]217/arm",
                "hxxp://95[.]135[.]208[.]217/mpsl",
                "hxxp://95[.]135[.]208[.]217/arm7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1071,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1071,
                "newInLastHour": 1067,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"supplyflash[.]wiki\"",
                " \"screencard[.]wiki\"",
                " \"94[.]198[.]51[.]234:443\"",
                " \"37[.]72[.]172[.]58:7077\"",
                " \"2[.]27[.]17[.]179:6644\""
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
            "iocCount": 9645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9645,
                "newInLastHour": 8547,
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
            "totalIndicators": 48996,
            "activeSources": 8,
            "criticalAlerts": 30769,
            "activeCampaigns": 100
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29627,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1142,
                "trend": "down",
                "percentage": -88
            },
            {
                "category": "Botnet",
                "count": 566,
                "trend": "up",
                "percentage": 58
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 83
            },
            {
                "name": "Tech",
                "percentage": 15
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
                "count": 29077,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]40[.]112[.]215:51006/i",
                    "hxxps://pixelcore[.]surf/fdcc63e1-b733-4ffc-b4b0-564c82dd4464/google[.]ct",
                    "hxxp://27[.]96[.]93[.]32:33596/bin[.]sh"
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
                    "1[.]15[.]51[.]236",
                    "1[.]180[.]183[.]158"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1607,
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
                "name": " \"win.vidar\"",
                "count": 583,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"prt[.]loniluekegerman[.]com\"",
                    " \"hxxps://prt[.]loniluekegerman[.]com/\"",
                    " \"prt[.]chriskendall[.]media\""
                ]
            },
            {
                "name": "Vidar",
                "count": 330,
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
                "name": " \"n/a",
                "count": 287,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ce12d366e445692302ebdeb61257797e56927b3bb25703da12a95339ec151e82",
                    " \"1df899c1c8802970678b687af5270a3dd7ebab24e1a89c8b09bf06e48c83ddc1",
                    " \"e463f87a0c098ff8bcbc4c262e9eddf3dea51148d2ba9d12c64addb21e2ff978"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 275,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://member20[.]agency-connect-profile[.]com/",
                    "hxxps://konto-aktualisiert-werden[.]sellarepartire[.]it/3cc08211d63465a33adec6f6cd376b10/?3cc08211d63465a33adec6f6cd376b10=yNnApML25lR&payer",
                    "hxxp://confirmed-meta[.]busines-help-center[.]com/"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 174,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"94d06f3b90cddcbe3ac34c4fd54fbf3242bb57492193e6c8650de2746c57891e",
                    " \"02715ecd80e408570d11c385a2291cee9459f2c1fe02658f3127345da6eb5219",
                    " \"19f66165fe621c3b813c57f18364e52d39c236d2c12a61c94c511744725001ef"
                ]
            },
            {
                "name": "OffLoader",
                "count": 159,
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
                "name": " \"unknown\"",
                "count": 141,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"caribb[.]ru\"",
                    " \"mekhovaya-shuba[.]ru\"",
                    " \"beboss34[.]ru\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 58866,
        "lastCalculated": "2026-05-13 01:45 IST"
    }
};
