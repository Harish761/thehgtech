// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-08T02:22:38.203645+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-08T02:22:37.959724+05:30",
    "lastUpdatedFormatted": "Aug 08, 2026 at 02:22 AM IST",
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
            "iocCount": 1033,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1033,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b9cf80a5e63577b018937534f6219eb29876c2163f0cdad7341acc2deef2859f",
                " \"7099805ddc0647122cfd66d28fcd68c462e8d1c9fe9869221d6e0fe4129d820e",
                " \"d3ab958551ae4b0c4d3086b00804e00b52c612cd5e19ac28dfb5fa969585d65d",
                " \"59caa54df4e941f1fa20795b58cc02420c9e4400ba44a178614d330d5bfca79b",
                " \"e10e3cb9d4a4cdb0733eb120a7500996e854b01466d7a42b99414598324f8084"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1682,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1682,
                "newInLastHour": 49,
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
                "1[.]159[.]103[.]245"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9071,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9071,
                "newInLastHour": 9071,
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
            "iocCount": 14910,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14910,
                "newInLastHour": 14910,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]142[.]223[.]175:57022/bin[.]sh",
                "hxxp://42[.]239[.]231[.]246:37689/i",
                "hxxp://221[.]15[.]195[.]117:36837/i",
                "hxxp://42[.]239[.]231[.]246:37689/bin[.]sh",
                "hxxp://115[.]56[.]10[.]15:35093/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5100,
                "newInLastHour": 5055,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vcxddac[.]eng--digestistart[.]com\"",
                " \"7dee819b76bf7a145dc60d279411b721\"",
                " \"d350f6e5d712c389f863c98e0f2abc4caa5924b7\"",
                " \"0689d044737e10bb9764f0e3d07def1f\"",
                " \"d42b84a94d990cb280c33739284c7a2318e466754584d9c99de7fca99d650157\""
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
            "iocCount": 10335,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10335,
                "newInLastHour": 8590,
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
            "totalIndicators": 39482,
            "activeSources": 8,
            "criticalAlerts": 17684,
            "activeCampaigns": 143
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15928,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3518,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1756,
                "trend": "down",
                "percentage": -82
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
                    "1[.]119[.]194[.]226"
                ]
            },
            {
                "name": "malware_download",
                "count": 14900,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]230[.]18[.]121:41849/bin[.]sh",
                    "hxxp://115[.]56[.]147[.]12:50068/i",
                    "hxxps://quick-load[.]vercel[.]app/api/settings/env"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1633,
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
                "count": 1334,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"118[.]195[.]209[.]31:22\"",
                    " \"43[.]138[.]116[.]60:8443\"",
                    " \"43[.]138[.]116[.]60:8080\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 808,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eng--bpzone[.]com\"",
                    " \"engbpzone[.]com\"",
                    " \"bmcmdwj[.]eng-brain-defender[.]com\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 507,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1256605a138e967807b1cd6f0c051e35347ea17388fbc52e778ea30d789837db",
                    " \"05beff2b13239247c7259e5d438be37b8f1acd377e2d966a3d305416fc600109",
                    " \"3bae4a32fee979d96dd7d2c313aabb87d589781e79a6f2d05307b77a6ea7aab4"
                ]
            },
            {
                "name": "Vidar",
                "count": 463,
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
                "name": " \"unknown\"",
                "count": 376,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"141[.]94[.]148[.]37:1224\"",
                    " \"vmi3462151[.]contaboserver[.]net\"",
                    " \"telemetras[.]pro\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 357,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ahealthymixture[.]com\"",
                    " \"melissadarnay[.]com\"",
                    " \"maurer-inet[.]de\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 321,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"203[.]98[.]68[.]17:8808\"",
                    " \"203[.]98[.]68[.]17:8888\"",
                    " \"34[.]106[.]101[.]107:6606\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 53042,
        "lastCalculated": "2026-08-08 02:22 IST"
    }
};
