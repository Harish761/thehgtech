// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-07T21:04:27.751326+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-07T21:04:27.457485+05:30",
    "lastUpdatedFormatted": "Oct 07, 2026 at 09:04 PM IST",
    "comparisonPeriod": "Oct 06 \u2013 Oct 07, 2026",
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
                "hxxp://www[.]csverifyme[.]com/",
                "hxxps://www[.]mazonniraq[.]com/",
                "hxxps://mmmm-nu-eight[.]vercel[.]app/",
                "hxxp://www[.]comcastinfoupdatesnow[.]weebly[.]com/",
                "hxxp://moonpay-commerce-ijsgokz66-heliofi[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1354,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1354,
                "newInLastHour": 170,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9da21861c2bb7ca53348bb73c884a73456288acf3b5922963acf42efc7eec0ac",
                " \"82b558b35028e479c2063a0e3f50478714692f48df9093853bf93aa9b4909471",
                " \"91a32411826ca59069cee5375480310d87777b432f509831593677f0c32803ec",
                " \"61aeef0d535d309f4bdda6278a7da4ef9d67674a46b619065b88171ee5c0f581",
                " \"9a64950f2bb05730b62ce2be6324e9be31efee78b581bdcb609249a9077b75cd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1630,
                "newInLastHour": 29,
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
                "1[.]15[.]14[.]29",
                "1[.]179[.]41[.]48",
                "1[.]188[.]103[.]91",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]138"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4915,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4915,
                "newInLastHour": 4915,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]24[.]10",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 31163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 31163,
                "newInLastHour": 31163,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]167[.]87[.]144:56600/i",
                "hxxp://218[.]16[.]164[.]137:36531/bin[.]sh",
                "hxxp://42[.]230[.]40[.]218:51321/i",
                "hxxp://112[.]238[.]27[.]166:50497/i",
                "hxxp://112[.]228[.]200[.]135:55841/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8460,
                "newInLastHour": 7244,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://vladfrombarcelona[.]club/\"",
                " \"hxxps://seerdfu[.]com/\"",
                " \"wsqxeet[.]sbs\"",
                " \"fqesrdcx[.]cfd\"",
                " \"softsfliesa[.]site\""
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
            "iocCount": 10799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10799,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d04d7126cb34075240b0bfea2b26b345254b189f",
                "e7fdd28d07b292696f1dc9fbca92364ccdcdf174",
                "51d76247414a9049df5a415d7f14815346bc92ed",
                "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
                "2c32691ea854fdd88474aec7283283c4e4fe9d10"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69341,
            "activeSources": 8,
            "criticalAlerts": 43483,
            "activeCampaigns": 288
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 32593,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10890,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4257,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 0
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
                "count": 31059,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://202[.]1[.]26[.]13:44204/i",
                    "hxxp://113[.]221[.]14[.]251:35903/i",
                    "hxxp://59[.]97[.]252[.]95:51706/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]193[.]56[.]152",
                    "1[.]193[.]63[.]138",
                    "1[.]204[.]83[.]28"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1787,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zpconstructionca[.]com\"",
                    " \"zugenergie[.]de\"",
                    " \"zygrle[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1640,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1295,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"154[.]12[.]17[.]20:22\"",
                    " \"154[.]12[.]17[.]20:443\"",
                    " \"154[.]12[.]17[.]20:80\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 934,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"botsportscanning[.]duckdns[.]org\"",
                    " \"139[.]162[.]5[.]254:3778\"",
                    " \"ece6f4df5671938681d7c4c417cea50868317ca77b61a4f171cbe635a9b454cd\""
                ]
            },
            {
                "name": "Vidar",
                "count": 821,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0",
                    "6def2654b3b68fb89142113e6c5ad1b9e866134c",
                    "f8f56c66c440df5666400e34a532c04d6ca4e5b0"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 764,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fog[.]blacklabelfremont[.]com\"",
                    " \"ruut[.]store\"",
                    " \"kpxypqg0[.]kalem[.]store\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 58830,
        "lastCalculated": "2026-10-07 21:04 IST"
    }
};
