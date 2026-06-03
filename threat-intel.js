// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-04T03:05:37.977226+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-04T03:05:37.804370+05:30",
    "lastUpdatedFormatted": "Jun 04, 2026 at 03:05 AM IST",
    "comparisonPeriod": "Jun 03 \u2013 Jun 04, 2026",
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
                "hxxps://billiway[.]netlify[.]app/",
                "hxxps://theuber[.]com[.]au/",
                "hxxps://patterndomain[.]info/420-1524-290526/[email%C2%A0protected",
                "hxxps://ledgers[.]at/",
                "hxxps://portal[.]rodiviasdigital[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 411,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d8219ff7bb309b660a61008793f8250aeff1133be9be3a7747fba28500b0362c",
                " \"f5cb9194e3e34f10171be656d9a55a70ca96ed1258ffe371630f1086637a8d76",
                " \"129cb2fc355a08e24da5a8b6a65ef30ab0a9f1b24b529c99dc4707bbb0303d4f",
                " \"09a778c467ba4bebfc477f8aab889aa1fb5e9e4258b347106dcec48f91f32dc5",
                " \"b195d942890e926b5525d9f419523834a18016fa5db7d3c1af3858ac68309028"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1598,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7915,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7915,
                "newInLastHour": 7915,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]176[.]139",
                "1[.]14[.]192[.]95",
                "1[.]15[.]22[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20071,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20071,
                "newInLastHour": 20071,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]85[.]110[.]38:41787/bin[.]sh",
                "hxxp://120[.]84[.]215[.]239:48456/i",
                "hxxps://pmieubk[.]arabs[.]promo/0ab89340-ef43-4c4e-9f48-0b4cb954e3d4",
                "hxxps://zjtplqi[.]arabi[.]poker/68cddf08-a7c3-4565-ab6f-a811339871f6",
                "hxxps://t0uo8kf9[.]basketballiran[.]com/?ublib=ef076ad3-dc75-4449-9735-04511cc13701"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3912,
                "newInLastHour": 3906,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pmieubk[.]arabs[.]promo\"",
                " \"arabs[.]promo\"",
                " \"zjtplqi[.]arabi[.]poker\"",
                " \"t0uo8kf9[.]basketballiran[.]com\"",
                " \"ghef1emo[.]basketballiran[.]com\""
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
            "iocCount": 9781,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9781,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b932f3633355320830591118f0ef6fec40d6c536",
                "ef62de5b7cd581e8b995d7d9807726a3ea173c04",
                "fc8bf49f99720cd6306cd7ab89e52c3c0b947443",
                "5ab8823e55b248078126b1927464faa4f6387368",
                "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 27578,
            "activeSources": 7,
            "criticalAlerts": 21713,
            "activeCampaigns": 132
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20462,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3669,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 1251,
                "trend": "down",
                "percentage": -87
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
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20051,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://khuqcze[.]303[.]audio/07fac9ea-f851-4a3f-882a-907cf78c448e",
                    "hxxp://113[.]228[.]135[.]116:50099/i",
                    "hxxp://182[.]126[.]121[.]63:35592/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1630,
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
                "count": 1427,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"155[.]94[.]193[.]170:443\"",
                    " \"155[.]94[.]193[.]170:80\"",
                    " \"118[.]89[.]203[.]103:443\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 391,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"168[.]144[.]36[.]228:7443\"",
                    " \"47[.]245[.]115[.]13:60000\"",
                    " \"206[.]189[.]84[.]116:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b932f3633355320830591118f0ef6fec40d6c536",
                    "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 307,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"182[.]23[.]2[.]163:47984\"",
                    " \"192[.]227[.]219[.]79:4551\"",
                    " \"192[.]227[.]219[.]79:4553\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 246,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://billiway[.]netlify[.]app/",
                    "hxxps://theuber[.]com[.]au/",
                    "hxxps://patterndomain[.]info/420-1524-290526/[email%C2%A0protected"
                ]
            },
            {
                "name": " \"win.vshell\"",
                "count": 224,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]111[.]235[.]219:80\"",
                    " \"154[.]92[.]110[.]153:520\"",
                    " \"154[.]88[.]103[.]48:8884\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 193,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"147[.]124[.]210[.]158:8808\"",
                    " \"13[.]236[.]153[.]60:8888\"",
                    " \"yyyf168[.]com\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 173,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 40808,
        "lastCalculated": "2026-06-04 03:05 IST"
    }
};
