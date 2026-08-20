// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T07:16:44.455228+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T07:16:44.093048+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 07:16 AM IST",
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
                "hxxp://onedocuvetinary-ldjzoo9p-webu43[.]4everland[.]app/",
                "hxxp://netcoooins-logi[.]webflow[.]io/",
                "hxxps://originalmeeting[.]pages[.]dev/Microsoftmeet[.]html?email=valosz@2de1886ed1cab04908e53d937d7dffd68a87[.]net",
                "hxxps://flexibilidadeaseulimite[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://www[.]supp0rtassistance[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1396,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1396,
                "newInLastHour": 56,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c897c15850310c244a6d8f27a6c0387d6359b1326120c8eca9ee27d4c6a6ff3c",
                " \"8bc94ede491e67b32af3789f9807b76bebe02f69bb9dbec17342c1e00bd6d7d3",
                " \"fd84e3dcb36b548098af61a9d3479ca0b8e2ab5e9e688bda32a0fb34d0e93806",
                " \"8182fb0126fe3f44eaf12f065a054a64ecfb73b884f68969ebbdc15cfeffba29",
                " \"57ba0c6c3195857e972d9764566e57db25a5e49de4efb8f7ffb545f74740b123"
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
                "newInLastHour": 53,
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
                "1[.]180[.]247[.]82",
                "1[.]183[.]161[.]214",
                "1[.]197[.]139[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4893,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4893,
                "newInLastHour": 4893,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16571,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16571,
                "newInLastHour": 16571,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]224[.]151[.]118:35018/bin[.]sh",
                "hxxp://103[.]31[.]103[.]204:55940/bin[.]sh",
                "hxxp://219[.]157[.]249[.]227:40515/bin[.]sh",
                "hxxp://115[.]48[.]163[.]35:38931/i",
                "hxxp://123[.]172[.]77[.]129:45661/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10381,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10381,
                "newInLastHour": 10142,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wohnmobilankaufschweiz[.]ch\"",
                " \"hxxps://meraapnabharat[.]ca/\"",
                " \"hxxps://vidyalekha[.]co[.]in/\"",
                " \"hxxps://vefasigorta[.]net/\"",
                " \"xm0y39uj[.]cogniclearplus[.]com\""
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
            "iocCount": 10435,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10435,
                "newInLastHour": 143,
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
            "totalIndicators": 56126,
            "activeSources": 8,
            "criticalAlerts": 28744,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18420,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10324,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 5111,
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
                "count": 16949,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]5[.]26[.]85:51916/i",
                    "hxxp://42[.]231[.]190[.]213:48304/i",
                    "hxxp://163[.]182[.]97[.]242:3654/i"
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
                    "1[.]140[.]210[.]242",
                    "1[.]178[.]120[.]114"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2544,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"valokse[.]lol\"",
                    " \"sixpences[.]xyz\"",
                    " \"taliy[.]sbs\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1681,
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
                "name": "Spamhaus DROP List",
                "count": 1639,
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
                "count": 1433,
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
                "count": 1423,
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
                "count": 1145,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://palaciomaravilla[.]com/\"",
                    " \"hxxps://www[.]silviozamora[.]com/\"",
                    " \"hxxps://tarahenovin[.]ir/\""
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
                "name": " \"Mirai",
                "count": 693,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"77ea6c1d964d7bf9a1bdb5a7a34b6f707065235554ff7fc58dd2de2def70c53a",
                    " \"5bb9a2335169cf8237cfa2e254340d6475788a091dd9be2e3a690e018fcb7ef0",
                    " \"9629db9638a8145583ceb452d0328fe88af94fded7c1f228c8adf4240399c15d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 47163,
        "lastCalculated": "2026-08-20 07:16 IST"
    }
};
