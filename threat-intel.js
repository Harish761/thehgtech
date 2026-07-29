// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-30T02:38:16.172639+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-30T02:38:15.794824+05:30",
    "lastUpdatedFormatted": "Jul 30, 2026 at 02:38 AM IST",
    "comparisonPeriod": "Jul 29 \u2013 Jul 30, 2026",
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
                "hxxp://zerointerestpromo[.]com/",
                "hxxps://paket[.]info[.]158-158-1-61[.]cpanel[.]site/pl/kasse[.]php?2kh6by2fuuo3z",
                "hxxps://www[.]roblox[.]com[.]mu/users/6525325044/profile",
                "hxxps://s4w[.]in/www-roblox-com-users-321759054-profile",
                "hxxps://pw[.]pypexqb[.]net/EngTgred[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1023,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1023,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0c3424f930bd6ac00091ef6a6f96cf4f88f830c85b8937dd1776154202048434",
                " \"6a4d371a7e82215799f79944204cf1ae4586a5a1cb6bdd5f6fb55e811e2154f2",
                " \"d1b8110868977a697f191498c1bd2ff1ea7ca469d1a7632b07411236dd75002d",
                " \"5d9ed51e8c68d43b9c2f8f6c9d18eef8f808a6f872115765a4cd2b43660cad8f",
                " \"eb8426a2c384270297500f7ee836f38c6ba86eb981f8729304f0dc022e8e2754"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1665,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1665,
                "newInLastHour": 11,
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
                "1[.]12[.]229[.]231",
                "1[.]12[.]65[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]24[.]165"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9472,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9472,
                "newInLastHour": 9472,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]180[.]246[.]242",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15747,
                "newInLastHour": 15747,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://129[.]121[.]110[.]105/ya4",
                "hxxp://105[.]224[.]29[.]237:48127/bin[.]sh",
                "hxxp://129[.]121[.]110[.]105/y1V",
                "hxxp://110[.]136[.]44[.]90:51644/i",
                "hxxp://91[.]199[.]133[.]133:8080/real_sh4"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5551,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5551,
                "newInLastHour": 4811,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jereqk[.]rochandmadeholiday[.]com\"",
                " \"rochandmadeholiday[.]com\"",
                " \"eveyclq[.]scrummyafterscandyshoppe[.]com\"",
                " \"ridingpeak[.]com\"",
                " \"scrummyafterscandyshoppe[.]com\""
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
            "iocCount": 10266,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10266,
                "newInLastHour": 86,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b260881d660a14c3c0b2e61a6685839c8053bc9",
                "11a9b0c571e681f4f9e7780e3aff1fe8c2f3d676",
                "e15c7bdeb747a9fff47c514a10229a2a59d1157d",
                "283042355c89f2c59e260246d1488a73a8bef7b2",
                "e6cc4eebe2d73c7174be4be73bc00d4642122ac4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49857,
            "activeSources": 8,
            "criticalAlerts": 26914,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16755,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10159,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3570,
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
                "count": 15707,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]11[.]9[.]222:36220/bin[.]sh",
                    "hxxp://61[.]52[.]93[.]219:46118/bin[.]sh",
                    "hxxp://222[.]141[.]76[.]155:42372/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1655,
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
                "count": 1427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1356,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]193[.]150[.]74:80\"",
                    " \"103[.]193[.]150[.]74:8080\"",
                    " \"103[.]193[.]150[.]74:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 831,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rushpdf[.]com\"",
                    " \"seitorri[.]it\"",
                    " \"site[.]bz\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 814,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"reynoldsbrothersconstruction[.]com\"",
                    " \"phfifdv[.]rentechglobalsolutions[.]com\"",
                    " \"rentechglobalsolutions[.]com\""
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
                "name": " \"unknown\"",
                "count": 733,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"195[.]20[.]17[.]146:56776\"",
                    " \"192[.]71[.]244[.]238:7443\"",
                    " \"162[.]216[.]231[.]230:7443\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 690,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45460,
        "lastCalculated": "2026-07-30 02:38 IST"
    }
};
