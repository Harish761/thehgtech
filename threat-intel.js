// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T00:40:41.269742+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T00:40:40.987094+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 12:40 AM IST",
    "comparisonPeriod": "Aug 19 \u2013 Aug 20, 2026",
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
                "hxxp://facebologin[.]blogspot[.]com/",
                "hxxps://staking4portfolio[.]blogspot[.]com/",
                "hxxp://php-web-server--antijudas2323[.]replit[.]app/",
                "hxxp://www[.]staking2portfolio[.]blogspot[.]com/",
                "hxxps://www[.]ttk-pay-eua[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1395,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1395,
                "newInLastHour": 56,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2dae1df14d0cc6ea8e670e0b327101d0fe5c475dc06a376e99a6df426bddf418",
                " \"42b65197ee2dddb7b3cae26cf2d595a0f074e20e9ba0aa2efdf41d5ec3461579",
                " \"c4227301dd23eb6ebd80bf1f5e48455413ba78cf1a33be2296a857618d5588dd",
                " \"7de8b252898d22bde75ef132e2c46d1c96d53ea534755e8cda17618e3006b4b0",
                " \"88acd27341a6883b0f7ba55d1e388ce6d007287c4fc66dbdcb95535eb2f0079c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1684,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1684,
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
                "1[.]15[.]14[.]29",
                "1[.]159[.]70[.]231",
                "1[.]178[.]120[.]114",
                "1[.]180[.]190[.]250",
                "1[.]183[.]161[.]214"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4843,
                "newInLastHour": 4843,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16945,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16945,
                "newInLastHour": 16945,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://58[.]255[.]41[.]239:39378/bin[.]sh",
                "hxxp://119[.]185[.]241[.]8:42488/i",
                "hxxps://pub-1c4ef2a315ec4b89b9dfad9472afee69[.]r2[.]dev/zuyoking[.]png",
                "hxxps://one-graup[.]com/LUI[.]hta",
                "hxxps://pub-eab9eb7761644f51bceeecfefdf0ec2b[.]r2[.]dev/teddywon[.]hta"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10260,
                "newInLastHour": 10021,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"202[.]61[.]130[.]209:8080\"",
                " \"202[.]61[.]130[.]209:443\"",
                " \"202[.]61[.]130[.]209:80\"",
                " \"202[.]61[.]130[.]209:8888\"",
                " \"hxxps://mujerilumina[.]com/\""
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
            "iocCount": 10484,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10484,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "687928f5bd90cb243f29760de8d299236de2cadf",
                "9ba597b7a850fe598927a226f6ab2efd3050ff95",
                "16545697d78cbada6dac236b73dbeff19c9035d1",
                "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                "0b92ba05df90855d90170858ba91680d33f76e0f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55922,
            "activeSources": 8,
            "criticalAlerts": 28727,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18263,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10464,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5102,
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
                "count": 16880,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://60[.]217[.]123[.]198:46902/i",
                    "hxxp://222[.]141[.]22[.]9:38226/bin[.]sh",
                    "hxxp://42[.]224[.]121[.]161:40429/i"
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
                    "1[.]159[.]70[.]231",
                    "1[.]165[.]27[.]71"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2434,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"wolfcubdigital[.]co[.]uk\"",
                    " \"lydinge[.]com\"",
                    " \"spielportal[.]com\""
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
                "count": 1677,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"governorhobbies[.]cfd\"",
                    " \"sofazinc[.]cfd\"",
                    " \"snailsreading[.]xyz\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1430,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]183[.]197:8082\"",
                    " \"8[.]222[.]188[.]173:443\"",
                    " \"8[.]219[.]220[.]240:7777\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1101,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"134[.]209[.]112[.]52:7443\"",
                    " \"85[.]239[.]144[.]17:5555\"",
                    " \"147[.]93[.]7[.]66:2137\""
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
                "count": 723,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                    "ab53f86d2ce32d9306f431e8e82f39cb31f48a53",
                    "304062e0d9d93dad14b84554abb56fd3af8266ff"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 47173,
        "lastCalculated": "2026-08-20 00:40 IST"
    }
};
