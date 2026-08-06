// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-06T16:17:23.483129+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-06T16:17:23.133003+05:30",
    "lastUpdatedFormatted": "Aug 06, 2026 at 04:17 PM IST",
    "comparisonPeriod": "Aug 05 \u2013 Aug 06, 2026",
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
                "hxxp://vnj1s6[.]tokeonpqoket[.]pro/",
                "hxxps://sp4ct-nardevon-biz8-zurem-kasol[.]pages[.]dev/",
                "hxxp://network[.]draxioncapital[.]com/",
                "hxxps://www[.]porestemesdeagostosolicitaaumento[.]com/",
                "hxxp://en-suitts-trezar[.]wasmer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1082,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1082,
                "newInLastHour": 123,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"11f14d6270f713437c36e92de64afa6f3149ff35e11f3a6f59346ffde45e8328",
                " \"77b199ce132fa548e4ac57f8ef90beafe4c619b3257d1c0ca12a1ac414ecf0f1",
                " \"e178d34417d1c130c933ed8cfaa1bcc991529cb1d76d8529ad09349cd4564cc9",
                " \"a6f01dde493013ef221bb8b6e5d6c4c959330b000bddf44ae831e5904f18cdf2",
                " \"4bcee369c9d5ae8a2841fe5c817028d844163737de2332518fcd28e46996fc66"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1622,
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
                "1[.]119[.]194[.]226",
                "1[.]14[.]150[.]102",
                "1[.]15[.]14[.]29",
                "1[.]159[.]103[.]245"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9696,
                "newInLastHour": 9696,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]192[.]63[.]178",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15636,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15636,
                "newInLastHour": 15636,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]83[.]86[.]215/n2/mips",
                "hxxp://103[.]83[.]86[.]215/n2/mpsl",
                "hxxp://103[.]83[.]86[.]215/n2/lterouter",
                "hxxp://38[.]21[.]70[.]189:57213/i",
                "hxxp://60[.]22[.]188[.]221:41996/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4416,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4416,
                "newInLastHour": 4332,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pik[.]tb88cuka[.]top\"",
                " \"loerpos[.]pro\"",
                " \"oqavsq[.]sunvalleysurf[.]com\"",
                " \"freshmorningdew[.]top\"",
                " \"sunvalleysurf[.]com\""
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
            "iocCount": 10309,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10309,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "448bf34943609cd5dcadf4b1dc58512df0718e57",
                "28db945e3beaf15a6f6d7fdf2dfc06a5f0319fc3",
                "22bedd3b6ea141fbe9b50681baa395909e014ad0",
                "059e425acfe2753d135e1b7ba39e30f0b00dbbb3",
                "ef74c5ab92e15e7226ba84cce3a45522c74ba902"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48257,
            "activeSources": 8,
            "criticalAlerts": 26821,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16518,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3630,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 15378,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]189[.]98[.]77:43480/i",
                    "hxxp://123[.]11[.]180[.]236:57536/bin[.]sh",
                    "hxxp://216[.]9[.]224[.]73/33/img_190847[.]png"
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
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]103[.]245"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1678,
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
                "count": 1374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]140[.]162[.]173:11443\"",
                    " \"78[.]17[.]93[.]55:10443\"",
                    " \"146[.]56[.]195[.]201:4433\""
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
                "count": 694,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053"
                ]
            },
            {
                "name": "Vidar",
                "count": 667,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1",
                    "964d86f575c50b29d2b7157331d556859dd43e5e"
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
                "name": " \"Mirai",
                "count": 455,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"54001c1d46138bc9eae13c60cf59c04d18efd00e99fc88ee4eea5692a9245045",
                    " \"533503dbeaeaae26d370a48e4400d7d2cc823c4ed4ec6e155de3ffd0429e64a5",
                    " \"7a40b0c74e2bf4821345a948421e3f2bb0ab7ff0d954a4e824c5a634c261aa1f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45094,
        "lastCalculated": "2026-08-06 16:17 IST"
    }
};
