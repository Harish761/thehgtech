// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-10T09:59:37.900670+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-10T09:59:37.521200+05:30",
    "lastUpdatedFormatted": "Sep 10, 2026 at 09:59 AM IST",
    "comparisonPeriod": "Sep 09 \u2013 Sep 10, 2026",
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
                "hxxp://middle-rose-59mexohi-dp8frvkwaueh[.]edgeone[.]dev/",
                "hxxp://lnk[.]ink/t0Ryp",
                "hxxps://www[.]roblox[.]com[.]am/users/233615155373/profile",
                "hxxp://www[.]83670536365[.]com/",
                "hxxps://garanthmn[.]art/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 753,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a84bef9ffa7f4ee4c682a75f1d0480c8b5cd233e355b885b61ef4a52eaf65dfb",
                " \"953b808caf22274577e975b21404fcd2b69fb3e8ad266f175b100612305d5575",
                " \"74fd0bb45d835e60419dfac50d2fb2361b694b37d0d397b735880a39baddadaa",
                " \"e686c2dcffe94fb122df2e81debdab3e3a973c9a3bfcd06854d2a99dd5605cd0",
                " \"5a24a5a7e387ec5de6d8fc95e5bf455efae511d0f981605b0b232c6f6260f5cb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
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
                "1[.]117[.]59[.]169",
                "1[.]12[.]229[.]231",
                "1[.]183[.]148[.]62",
                "1[.]193[.]37[.]103",
                "1[.]195[.]192[.]15"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4924,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4924,
                "newInLastHour": 4924,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13308,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13308,
                "newInLastHour": 13308,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]97[.]253[.]127:60070/i",
                "hxxp://113[.]206[.]10[.]45:47047/i",
                "hxxp://42[.]239[.]230[.]18:57135/i",
                "hxxp://113[.]206[.]10[.]45:47047/bin[.]sh",
                "hxxp://196[.]189[.]9[.]27:37953/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9619,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9619,
                "newInLastHour": 9382,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"luminica[.]com[.]mx\"",
                " \"mijnvirtueelassistent[.]be\"",
                " \"gasgas[.]sagamoove[.]com[.]br\"",
                " \"elegantthemesflywheel[.]com\"",
                " \"mpotofoundation[.]org\""
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
            "iocCount": 10643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10643,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f350973861d149efb83b0a1f51d0e0db0329dda",
                "1955a3ce0e4bb011e3e667a51be5f42fb02d769f",
                "559a55c8c7779e0037429794a8836a1039dbcdc3",
                "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52076,
            "activeSources": 8,
            "criticalAlerts": 25569,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14962,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10607,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4170,
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
            },
            {
                "name": "Government",
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
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 14136,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]184[.]180[.]148:36857/bin[.]sh",
                    "hxxp://182[.]118[.]244[.]134:34417/i",
                    "hxxp://115[.]230[.]76[.]101:37221/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1975,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bitfundedxcryptobanter[.]com\"",
                    " \"butecoemcasacampinas[.]com[.]br\"",
                    " \"clinicaveterinarialescampes[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "name": " \"js.iclickfix\"",
                "count": 1585,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]abelmomaroc[.]com\"",
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1443,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1304,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"83[.]229[.]123[.]249:22\"",
                    " \"83[.]229[.]123[.]249:8081\"",
                    " \"83[.]229[.]123[.]249:443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 990,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]kolhofgut[.]com\"",
                    " \"89ulhsid[.]nycsocialsportsclub[.]com\"",
                    " \"nycsocialsportsclub[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 765,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405",
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97"
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
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 43010,
        "lastCalculated": "2026-09-10 09:59 IST"
    }
};
