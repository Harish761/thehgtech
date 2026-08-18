// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T02:04:23.481546+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T02:04:23.081595+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 02:04 AM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxps://dravixa-gld-belquna-r9t8fw26[.]pages[.]dev/",
                "hxxps://www[.]submid-cotact136336[.]vercel[.]app/",
                "hxxp://xelzora-kxt-qelmavi-r5t2fc97[.]pages[.]dev/",
                "hxxps://roblox[.]com[.]ee/users/61018400/profile",
                "hxxps://phantom-eight-nu[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1020,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1020,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"84240f5244d73b64c09ef78eca5cce1a0ae011fca66e23c22a1fcac8b1bd99e9",
                " \"e82f3aba0be7c2ef54f08e05b783acf87a042f8a92f5bd410c5981d23e7e62da",
                " \"a6d935e7c8e134c13c0760e18e8ef43b47b616c89b459884d7d1a67951793930",
                " \"5ea2f62398e9a9a327a31251421bf574b0ed6284d1516177d6476fa901ac02de",
                " \"e0c99c2f688b058f3103a74fec8fb3360b21683acf51a6d34ac071c8b9174016"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1690,
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
                "1[.]119[.]158[.]77",
                "1[.]140[.]210[.]242",
                "1[.]165[.]27[.]71",
                "1[.]180[.]247[.]82",
                "1[.]183[.]161[.]214"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4792,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4792,
                "newInLastHour": 4792,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16948,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16948,
                "newInLastHour": 16948,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]55[.]107[.]64:42203/i",
                "hxxp://60[.]162[.]214[.]49:58599/bin[.]sh",
                "hxxp://182[.]127[.]53[.]74:32795/bin[.]sh",
                "hxxp://115[.]63[.]82[.]0:41636/bin[.]sh",
                "hxxp://42[.]55[.]107[.]64:42203/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8600,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8600,
                "newInLastHour": 8558,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"124[.]220[.]34[.]180:80\"",
                " \"124[.]220[.]34[.]180:8080\"",
                " \"124[.]220[.]34[.]180:443\"",
                " \"117[.]72[.]125[.]206:443\"",
                " \"flarclod[.]top\""
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
            "iocCount": 10447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10447,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f351f7dbe9c583f75758b39cd307f5359d110c73",
                "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                "edbd45e54859ad7082efb79465ba938bb2581132",
                "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54040,
            "activeSources": 8,
            "criticalAlerts": 28466,
            "activeCampaigns": 233
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18056,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10410,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4659,
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
                "name": "malware_download",
                "count": 16934,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]160[.]130[.]178:42478/i",
                    "hxxp://85[.]12[.]251[.]50:45018/i",
                    "hxxp://103[.]160[.]130[.]178:42478/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": " \"unknown_loader\"",
                "count": 1676,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eggsjelly[.]space\"",
                    " \"cdn[.]zrorolite[.]com\"",
                    " \"hxxps://cdn[.]zrorolite[.]com/5NPL[.]js\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1438,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1436,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"110[.]42[.]255[.]63:9090\"",
                    " \"43[.]136[.]178[.]239:22\"",
                    " \"43[.]136[.]178[.]239:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1377,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xylopak[.]com\"",
                    " \"ycn[.]coop\"",
                    " \"ymbforexpro[.]com\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1049,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193-233-126-53[.]sslip[.]io\"",
                    " \"3[.]80[.]49[.]187:7443\"",
                    " \"s3hsyuj2k[.]sbs\""
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
                "name": "Vidar",
                "count": 717,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                    "952bcdeea03ea702626a30069c949581bf2d1b05",
                    "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 45678,
        "lastCalculated": "2026-08-19 02:04 IST"
    }
};
