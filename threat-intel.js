// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-25T01:27:55.415122+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-25T01:27:55.016447+05:30",
    "lastUpdatedFormatted": "Sep 25, 2026 at 01:27 AM IST",
    "comparisonPeriod": "Sep 24 \u2013 Sep 25, 2026",
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
                "hxxps://www[.]trzorsutelgin[.]godaddysites[.]com/",
                "hxxp://www[.]1234-six-omega[.]vercel[.]app/",
                "hxxps://www[.]trezrr-sfe-looggin[.]godaddysites[.]com/",
                "hxxps://test-tau-black-69[.]vercel[.]app/",
                "hxxp://www[.]test-tau-black-69[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2490,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2490,
                "newInLastHour": 410,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8eefa76b366f84df2e08c65604263041e28734e4feb335f29e78932ffee81466",
                " \"fac672a784b82f7b8488fa18d4382d9ed4b6c63c21652586a72d66c58c99957c",
                " \"41751c8d7c4786be97a56a60dc80cb8580ef28532d5c0af939adc9b6161b79de",
                " \"7173d743f9c1efcf8b704e8185ff4feb144932e4adae7cf022f8aed69c8d4f46",
                " \"88ac5ad5535faad3222f8c31ef9fbb4bbbe06141f240c4461527804b818e568e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1707,
                "newInLastHour": 16,
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
                "1[.]177[.]162[.]4",
                "1[.]192[.]129[.]106",
                "1[.]2[.]173[.]126",
                "1[.]24[.]16[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11653,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11653,
                "newInLastHour": 11653,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14428,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14428,
                "newInLastHour": 14428,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]121[.]146[.]253:58584/i",
                "hxxp://112[.]225[.]176[.]130:50733/i",
                "hxxp://38[.]46[.]31[.]127:60341/bin[.]sh",
                "hxxp://115[.]55[.]131[.]25:33952/i",
                "hxxp://96[.]245[.]232[.]224:44492/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9178,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9178,
                "newInLastHour": 8683,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jiqyli[.]workers[.]dev\"",
                " \"94[.]154[.]32[.]44:443\"",
                " \"93[.]152[.]214[.]199:8443\"",
                " \"91[.]92[.]40[.]117:443\"",
                " \"91[.]92[.]40[.]117:56001\""
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
            "iocCount": 10744,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10744,
                "newInLastHour": 154,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                "aca5d4a8d82ba3feb8e85cd90158efba0d02f03f",
                "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                "9780ed18b0a63e77e19611e7f46f640a64c1ad5e",
                "cadf6b3f7ceb64de2253e8c0734b867a2762987a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53596,
            "activeSources": 8,
            "criticalAlerts": 27256,
            "activeCampaigns": 273
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16630,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10626,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4332,
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
                    "1[.]177[.]162[.]4",
                    "1[.]189[.]248[.]116",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "malware_download",
                "count": 14290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]137[.]135[.]85:58023/bin[.]sh",
                    "hxxp://42[.]224[.]120[.]144:33549/i",
                    "hxxp://27[.]44[.]145[.]91:42447/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2172,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"winsochacoon[.]com\"",
                    " \"wyndhamgardenzomin[.]com\"",
                    " \"tokai-yokosuka[.]co[.]jp\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1696,
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
                "count": 1444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]70[.]21[.]163:4444\"",
                    " \"81[.]70[.]21[.]163:8088\"",
                    " \"hxxps://d2z54pvih3anpa[.]cloudfront[.]net/ajax/libs/jquery/3[.]7[.]1/jquery[.]min[.]js\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1371,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yellowboximmigration[.]com\"",
                    " \"youngpropertypartners[.]com\"",
                    " \"yrmok[.]com\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1194,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3a1f8e14b674b6c3f20a83629bccc38e982d229fbacde684d005bacafd5b4b90",
                    " \"da34c724b81240b9f2603c5357dc4dc637825bef8b33a9a7eea5fff3fa9f4333",
                    " \"e7c714c9c208e21b96aea6e18547b193fa017f9da07aee71002592f0bec22ebf"
                ]
            },
            {
                "name": "Vidar",
                "count": 759,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                    "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                    "9780ed18b0a63e77e19611e7f46f640a64c1ad5e"
                ]
            },
            {
                "name": " \"n/a",
                "count": 755,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"62ae36274d9e33b704ce1485952cb76dea26dd84a6bf18c870db21ae1c3b7528",
                    " \"5401e8314bbffb1198e453908b7bf3c6e10456b5b82e906e1bc8351d40bac8de",
                    " \"1cdbe79a992c820abf017d774f0e6a7987daeb9e1816bcf0c702b5982920f987"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 50649,
        "lastCalculated": "2026-09-25 01:27 IST"
    }
};
