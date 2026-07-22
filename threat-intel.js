// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-22T19:47:53.122605+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-22T19:47:52.758609+05:30",
    "lastUpdatedFormatted": "Jul 22, 2026 at 07:47 PM IST",
    "comparisonPeriod": "Jul 21 \u2013 Jul 22, 2026",
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
                "hxxps://www[.]roblox[.]com[.]bn/communities/769286172935/One-Time-YT",
                "hxxps://8xc0o6-s4wb6-4nlgvi-4g0-kqf[.]pages[.]dev/",
                "hxxp://robinhoodaiagent[.]xyz/",
                "hxxps://sdffht3[.]pages[.]dev/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=/&ref_=footer_lang",
                "hxxp://www[.]zedelliveryoficial[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 760,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 760,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"54c224d856e7b47d05fbc68bbc69346e4f652d5a892195020f0c471007106693",
                " \"a4764c06b55f26d9c4fff0b6fb01fc17b0f9da1411f8659583310e03421c2bef",
                " \"4814838500d5650f8ef755e26ca09cc09808209519a18b8758aaa2a3864c9601",
                " \"2402fb7729483433f382d761a57051100faebc8b2e685a84d08fcc2d1c5d7714",
                " \"ee8c1ecd3d04c08d6610459f4529cab04f23d9c344a0c97157dcd7bb9dcbca06"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1657,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1657,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]159[.]34[.]223",
                "1[.]159[.]90[.]31"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9795,
                "newInLastHour": 9795,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]171[.]170",
                "1[.]15[.]227[.]58",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20365,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20365,
                "newInLastHour": 20365,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]6[.]238:37368/bin[.]sh",
                "hxxp://219[.]155[.]82[.]113:33700/bin[.]sh",
                "hxxp://45[.]93[.]201[.]74/pty10",
                "hxxp://208[.]87[.]131[.]195:8080/pty10",
                "hxxp://63[.]142[.]250[.]72/pty10"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3855,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3855,
                "newInLastHour": 3854,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://almavidahorseranch[.]com/\"",
                " \"tbzp[.]upthesmokee[.]com\"",
                " \"upthesmokee[.]com\"",
                " \"dgmik[.]snydersflowershop[.]com\"",
                " \"118[.]89[.]69[.]45:8080\""
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
            "iocCount": 10154,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10154,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "cfce3aaff2ad3eae49b37a60d606984bd1492e16",
                "b8b339de5ea80d17fb5ce2eb144d7ba28b33337a",
                "9000e46cabc64219fb1447d59d5443afcb412e36",
                "632061b26a93455e9c4f0ac413deae710c920216",
                "991bf55fc47c006b3eedf6b348296f9f7aba20eb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52161,
            "activeSources": 8,
            "criticalAlerts": 31229,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21079,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10150,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3472,
                "trend": "stable",
                "percentage": -2
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
                "count": 20303,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]5[.]157:59057/bin[.]sh",
                    "hxxp://219[.]157[.]233[.]184:51727/bin[.]sh",
                    "hxxp://112[.]231[.]204[.]207:49619/i"
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1668,
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
                "count": 1438,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]137[.]149[.]67:7880\"",
                    " \"103[.]86[.]65[.]202:8080\"",
                    " \"111[.]229[.]248[.]198:22\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1425,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447"
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
                "count": 690,
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
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9000e46cabc64219fb1447d59d5443afcb412e36",
                    "e05145a93b7b5def1ca6c0e356cc4cdba3cbed9f",
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b"
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
                "name": "OffLoader",
                "count": 437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                    "d75206e1bb0d0ab79c93e78178e102f6ef071732"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 49455,
        "lastCalculated": "2026-07-22 19:47 IST"
    }
};
