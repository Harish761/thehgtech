// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-03T02:02:31.992276+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-03T02:02:31.729269+05:30",
    "lastUpdatedFormatted": "Jan 03, 2026 at 02:02 AM IST",
    "comparisonPeriod": "Jan 02 \u2013 Jan 03, 2026",
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
                "hxxp://www[.]instagram-clone-ruby-ten[.]vercel[.]app/",
                "hxxp://bafybeibltdvhbav4rq6reiixvypvumf62rgovvrwtspb7cn3ytsfp4gzdq[.]ipfs[.]infura-ipfs[.]io/",
                "hxxp://8g3jl6mffzxsd[.]duckdns[.]org/en/main",
                "hxxps://pub-2f2bb165d6f94c499840b70fd1448421[.]r2[.]dev/index[.]html?ref=secure_redirect&ts=1767186072&v=1[.]0&ip=69107ee6&token=3e9a141c/",
                "hxxps://minhareformabr[.]online/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 940,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 940,
                "newInLastHour": 90,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"441a1f4b00832efd1ccc1ec8128415ac748801eb2db626033a4b92b488b565d7",
                " \"5a90d745919c76e9e5fae0fb27155f5a8ba41587d756ac1f1ddba31d0dbb35b2",
                " \"5fea4aa7b5c13a8c293b532d9875656b55bc80f1356dac92be63a28212b83cd1",
                " \"3f446f2ef46fe7420330c815c97be50d5e0db910dfe0664a60f9da036a79a564",
                " \"8f7fb9413db42c0edcab9fab6fa49318c4c6b93c71ad340e83780b52fdb327b4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1468,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1468,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]10[.]214[.]163",
                "1[.]10[.]214[.]169",
                "1[.]10[.]214[.]187",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5609,
                "newInLastHour": 5609,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]161[.]40[.]132",
                "1[.]161[.]57[.]21",
                "1[.]162[.]228[.]28",
                "1[.]171[.]38[.]201"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25488,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25488,
                "newInLastHour": 25488,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]8[.]51[.]95:49411/i",
                "hxxp://123[.]8[.]51[.]95:49411/bin[.]sh",
                "hxxp://42[.]235[.]37[.]146:49542/bin[.]sh",
                "hxxp://123[.]8[.]1[.]52:42751/i",
                "hxxp://123[.]13[.]31[.]207:38076/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 611,
                "newInLastHour": 416,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"196[.]75[.]158[.]105:2222\"",
                " \"104[.]154[.]121[.]65:8080\"",
                " \"156[.]252[.]60[.]30:444\"",
                " \"94[.]154[.]35[.]73:8808\"",
                " \"151[.]243[.]95[.]252:8088\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8711,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6bd23ff65ef66b7c0589133e5a3119f2d91ab3f1",
                "c8aad9c5f82a60570499842e439e5853a2a4fcf1",
                "6159992b2c6d63eb26c215499bba43316b6c91f7",
                "7cf99ff9b35a8f0a7307c92e3b1feeca96179038",
                "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 43841,
            "activeSources": 8,
            "criticalAlerts": 26449,
            "activeCampaigns": 80
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26258,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 422,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 191,
                "trend": "down",
                "percentage": -97
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
                "count": 25365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]230[.]45[.]164:41070/bin[.]sh",
                    "hxxp://115[.]50[.]35[.]4:52700/i",
                    "hxxp://115[.]50[.]212[.]26:43065/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]214[.]163",
                    "1[.]10[.]214[.]169",
                    "1[.]10[.]214[.]187"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1468,
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
                "name": " \"Mirai",
                "count": 574,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ec686dd6659ba143747550dcd79ab18cbab18d8690817d5cea58e71e417ae5a2",
                    " \"08ffdca6369ca69add0bda15f7269bcbd3e054b08a3fb86b2cede62dc602eee2",
                    " \"645e916de2e269f14fa478777b61ba6ed0a6e84efe645a463568849fe27bbc1f"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 287,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]instagram-clone-ruby-ten[.]vercel[.]app/",
                    "hxxp://bafybeibltdvhbav4rq6reiixvypvumf62rgovvrwtspb7cn3ytsfp4gzdq[.]ipfs[.]infura-ipfs[.]io/",
                    "hxxp://8g3jl6mffzxsd[.]duckdns[.]org/en/main"
                ]
            },
            {
                "name": " \"n/a",
                "count": 183,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"067d5974518744f8d050c0e6b3225eb265033d3ed9b459dc1c9586b5fa78e395",
                    " \"87c940fe8a59ef8658292d1f845b5d0e4f7b4a7dcec15a3d793a97020e33b96c",
                    " \"3eaa9777b7b070dc3639b95b316aa0d7949f318527d3a813fc603c612700965e"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 103,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"162[.]243[.]28[.]13:42421\"",
                    " \"ksc[.]ae[.]org\"",
                    " \"phillipsconsulting[.]us[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 74,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2f063e428f33595352b99ddca86ee7845e398bc0",
                    "0b3c03d2685bcf32115f71fad8323c8c79f3ecf3",
                    "77ccc60769c2fcec1b720094cdaa0ff49e37227d"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 64,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"18[.]217[.]104[.]88:80\"",
                    " \"18[.]189[.]118[.]77:443\"",
                    " \"13[.]53[.]89[.]11:3333\""
                ]
            },
            {
                "name": " \"win.stealc\"",
                "count": 50,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://144[.]31[.]216[.]28\"",
                    " \"hxxp://77[.]110[.]119[.]94/ce369e7324834845[.]php\"",
                    " \"45[.]93[.]20[.]198:80\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 55429,
        "lastCalculated": "2026-01-03 02:02 IST"
    }
};
