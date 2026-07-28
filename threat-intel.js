// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-28T23:15:19.056614+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-28T23:15:18.677619+05:30",
    "lastUpdatedFormatted": "Jul 28, 2026 at 11:15 PM IST",
    "comparisonPeriod": "Jul 27 \u2013 Jul 28, 2026",
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
                "hxxp://aktiffkan-paylater[.]tll[.]my[.]id/",
                "hxxp://www[.]portalcredicerto[.]fun/",
                "hxxp://auth-spectrum-net-login09[.]framer[.]ai/",
                "hxxp://97-107-134-168[.]ip[.]linodeusercontent[.]com/next/date[.]php",
                "hxxp://97-107-134-168[.]ip[.]linodeusercontent[.]com/next/info[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1098,
                "newInLastHour": 129,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ac06e792e83d4c3293f01a69d0aa632bf59a5e41857e32803502f9e86837c20d",
                " \"3f9c1112d0fbc05dbd8e22e510a215694944f8effaca8338aac6f894afdac809",
                " \"a3ab968ecfe40961e381aff0e5bba919eb4e8cfcbbf445cf44441197aefbb399",
                " \"7b6e7aff859d03e87c3acd4f8caf8e540faf49756f4af5bbcd4d15683bd9c504",
                " \"dea1847c964c08cb6bcbddca7fd3ccffbaa3ce8c0989fbf5717b3c93e5506f47"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
                "newInLastHour": 2,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]185[.]51",
                "1[.]12[.]65[.]23",
                "1[.]15[.]82[.]219",
                "1[.]193[.]63[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4820,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4820,
                "newInLastHour": 4820,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]169[.]202[.]170",
                "1[.]180[.]246[.]242",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15260,
                "newInLastHour": 15260,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://hindustanagency[.]com/2[.]exe",
                "hxxp://120[.]46[.]15[.]254/pty10",
                "hxxp://34[.]88[.]165[.]144:8080/pty3",
                "hxxp://159[.]112[.]183[.]71:8080/pty10",
                "hxxp://113[.]45[.]17[.]8/pty3"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6053,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6053,
                "newInLastHour": 5348,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"unubrc[.]ontariorestaurantowners[.]com\"",
                " \"185[.]104[.]63[.]90:9000\"",
                " \"js-dl[.]kaliesthenics[.]com\"",
                " \"144[.]31[.]148[.]204:80\"",
                " \"144[.]31[.]148[.]204:443\""
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
            "iocCount": 10263,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10263,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "283042355c89f2c59e260246d1488a73a8bef7b2",
                "e6cc4eebe2d73c7174be4be73bc00d4642122ac4",
                "131d534087149d0095a326dcb33e77afcbec308c",
                "45bbc5ebc131cca9663c35c95459564007049d07",
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49898,
            "activeSources": 8,
            "criticalAlerts": 26394,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16178,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10216,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3812,
                "trend": "stable",
                "percentage": -1
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
                "count": 15110,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://121[.]205[.]208[.]226:40109/bin[.]sh",
                    "hxxps://fine-work-team[.]com/6272",
                    "hxxp://182[.]117[.]43[.]4:35927/i"
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
                    "1[.]172[.]241[.]39",
                    "1[.]183[.]8[.]146"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "count": 1431,
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
                "name": " \"js.clearfake\"",
                "count": 1413,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"d2dvwf88[.]nextbahis[.]blog\"",
                    " \"uqmhozbmv[.]hospitaldemascotas[.]com\"",
                    " \"fixzba[.]cosaques[.]com\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1340,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]146[.]231[.]107:24444\"",
                    " \"103[.]146[.]231[.]107:23333\"",
                    " \"103[.]146[.]231[.]107:8082\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 970,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"4[.]230[.]24[.]119:80\"",
                    " \"117[.]72[.]72[.]254:2297\"",
                    " \"113[.]45[.]238[.]149:888\""
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
                "count": 654,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "45bbc5ebc131cca9663c35c95459564007049d07",
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40890,
        "lastCalculated": "2026-07-28 23:15 IST"
    }
};
