// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-08T01:00:53.659773+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-08T01:00:53.280406+05:30",
    "lastUpdatedFormatted": "Aug 08, 2026 at 01:00 AM IST",
    "comparisonPeriod": "Aug 07 \u2013 Aug 08, 2026",
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
                "hxxps://subh498[.]github[.]io/Spotify-clone",
                "hxxp://abhijeetrajput9[.]github[.]io/Amazon-clone",
                "hxxps://account-att-com-b94bef[.]webflow[.]io/",
                "hxxp://www[.]comcastmailsignin[.]weebly[.]com/",
                "hxxp://www[.]roblox[.]com[.]mu/users/3111072752/profile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1028,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1028,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fd2986878e0c725d5d346ce9629d52b4c58630074657c8bfb92c7d5d8fe7aa59",
                " \"cdab250ea90f79efb405d13c4f77fff2876b21392ddc0849737d2ab86e308189",
                " \"1256605a138e967807b1cd6f0c051e35347ea17388fbc52e778ea30d789837db",
                " \"05beff2b13239247c7259e5d438be37b8f1acd377e2d966a3d305416fc600109",
                " \"9175f272eee3a353b521c7c55c92ae76dc77f601e402800296481377524a5f3e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1633,
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
                "1[.]10[.]185[.]51",
                "1[.]1[.]251[.]200",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9048,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9048,
                "newInLastHour": 9048,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]160[.]130",
                "1[.]116[.]61[.]217",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14900,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14900,
                "newInLastHour": 14900,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]230[.]18[.]121:41849/bin[.]sh",
                "hxxp://115[.]56[.]147[.]12:50068/i",
                "hxxps://quick-load[.]vercel[.]app/api/settings/env",
                "hxxps://quick-load[.]vercel[.]app/api/settings/bootstrap",
                "hxxps://quick-load[.]vercel[.]app/api/settings/package"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4865,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4865,
                "newInLastHour": 4822,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"eng--bpzone[.]com\"",
                " \"engbpzone[.]com\"",
                " \"118[.]195[.]209[.]31:22\"",
                " \"43[.]138[.]116[.]60:8443\"",
                " \"149[.]104[.]28[.]204:9881\""
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
            "iocCount": 1751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 1751,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8bdf129211692888e48d0970e49a8559450974dc",
                "d7d3f678f9b63334375db11eecc81be2db4db6f0",
                "cede10451532b072c7017c49ef4fcd273301a826",
                "769a6310d3d9533c1b3e0ddee3c1b6ebbda60891",
                "e63b53c2c26b9bff8f20e018efe7c166ec3c4acd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48101,
            "activeSources": 8,
            "criticalAlerts": 26243,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15926,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10317,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3545,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]1[.]251[.]200",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "malware_download",
                "count": 14869,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]22[.]216:46217/i",
                    "hxxp://196[.]189[.]98[.]110:42979/i",
                    "hxxp://222[.]137[.]25[.]131:51261/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1336,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]138[.]116[.]60:8080\"",
                    " \"43[.]138[.]116[.]60:22\"",
                    " \"43[.]138[.]116[.]60:443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 806,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jvvd7wco[.]greenestreetchurch[.]com\"",
                    " \"jycatdj[.]echoxien[.]com\"",
                    " \"echoxien[.]com\""
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
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 668,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa",
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44114,
        "lastCalculated": "2026-08-08 01:00 IST"
    }
};
