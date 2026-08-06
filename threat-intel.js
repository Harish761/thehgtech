// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-06T12:10:38.991944+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-06T12:10:38.608763+05:30",
    "lastUpdatedFormatted": "Aug 06, 2026 at 12:10 PM IST",
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
            "iocCount": 1113,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1113,
                "newInLastHour": 88,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"54001c1d46138bc9eae13c60cf59c04d18efd00e99fc88ee4eea5692a9245045",
                " \"533503dbeaeaae26d370a48e4400d7d2cc823c4ed4ec6e155de3ffd0429e64a5",
                " \"16426ff24dfb2d568d41366471199d62a8e98fb57c5a62e23efd612cd2adc018",
                " \"591c06caf5213c5c0ed508696e1eae0fd31c90928252f4bd053e2399d7a0027e",
                " \"5b6dd7d1749c50fd6bb306055f570f78e9fb939f2dc7cab54e1bb69b8cbb269b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1678,
                "newInLastHour": 1,
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]159[.]103[.]245",
                "1[.]178[.]120[.]81",
                "1[.]179[.]240[.]68"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7882,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7882,
                "newInLastHour": 7882,
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
                "1[.]194[.]233[.]49"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15378,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15378,
                "newInLastHour": 15378,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]189[.]98[.]77:43480/i",
                "hxxp://123[.]11[.]180[.]236:57536/bin[.]sh",
                "hxxp://216[.]9[.]224[.]73/33/img_190847[.]png",
                "hxxp://216[.]9[.]224[.]73/33/weneedbestmagicalapproachforbesthings[.]hta",
                "hxxp://216[.]225[.]206[.]31/56/goodthingswforbestfeelingsfromtheheartsesion[.]hta"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4458,
                "newInLastHour": 4377,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"103[.]83[.]86[.]143:14642\"",
                " \"qsfmut[.]storageinridgecrest[.]com\"",
                " \"storageinridgecrest[.]com\"",
                " \"kpwogzd[.]spotlightstudioofdance[.]com\"",
                " \"spotlightstudioofdance[.]com\""
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
            "iocCount": 10325,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10325,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "22bedd3b6ea141fbe9b50681baa395909e014ad0",
                "059e425acfe2753d135e1b7ba39e30f0b00dbbb3",
                "ef74c5ab92e15e7226ba84cce3a45522c74ba902",
                "b8b410c62bcb320c20cfee554f472df3fa5734e4",
                "6e64e6fafd7922f1100ce4f5334fef6dd75b2e66"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48057,
            "activeSources": 8,
            "criticalAlerts": 26743,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16451,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10292,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3668,
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
                "count": 15309,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://80[.]67[.]33[.]209:56810/i",
                    "hxxp://42[.]237[.]35[.]174:41985/bin[.]sh",
                    "hxxp://42[.]224[.]150[.]179:54481/i"
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
                    "1[.]15[.]82[.]219"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "count": 1375,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"60[.]247[.]206[.]23:801\"",
                    " \"217[.]154[.]212[.]25:4444\"",
                    " \"100[.]82[.]195[.]65:4444\""
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
                "count": 457,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c70bd410fd31eb06bac8978b0b2ee3bf9132cce5db023a64f3bbcfb96a291680",
                    " \"d1ffb7ec3dcaec3400d22859583a961ba661a78089a561b9092b455e017788f7",
                    " \"62885ef62f5ce8dbb0df9f8a8a9955f6badc1ff303d5b9c5b1338082f1c5b5f5"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43042,
        "lastCalculated": "2026-08-06 12:10 IST"
    }
};
