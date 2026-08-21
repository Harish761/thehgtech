// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-21T18:34:44.012196+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-21T18:34:43.759611+05:30",
    "lastUpdatedFormatted": "Aug 21, 2026 at 06:34 PM IST",
    "comparisonPeriod": "Aug 20 \u2013 Aug 21, 2026",
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
                "hxxps://undisclosed[.]sbs/",
                "hxxps://hachas[.]click/wp-includes/vvs/global/GlobalSources/?email=serorlab@d8a101bb9109701ffcc4b0ffa87eaa6accea[.]com",
                "hxxps://ydwell[.]com[.]tw/wp-includes/sitemaps/kouvytj/rgnup1c/yrel1xg/index[.]html",
                "hxxp://sp23ct-qelun-biz-varek-morik[.]pages[.]dev/",
                "hxxps://s4w[.]in/roblox-com-users-36569882382-profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1096,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1096,
                "newInLastHour": 158,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"73976c4ab4235a97cf1d5b4f39f664a3539b08856fc044c3eac95f0914f02989",
                " \"403d7daee87202339a02e041f5525ba727a557fe4b6c6b7a4ae25fb5336c003c",
                " \"9625b404c735b6ac175ef6140e0108ed8f3cdf72df2b257f546373b586e3d4f7",
                " \"436b403129995713a85b63f28fe06f8cd8dad80c7114b9733839216e12b481b1",
                " \"4294b8bab855aa657963687c5aa19b0dce91e32c9b97686a8ed6237c55f227c7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1698,
                "newInLastHour": 19,
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
                "1[.]119[.]194[.]226",
                "1[.]180[.]190[.]250",
                "1[.]183[.]161[.]214",
                "1[.]193[.]59[.]172"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5062,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5062,
                "newInLastHour": 5062,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]222[.]205",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16622,
                "newInLastHour": 16622,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]180[.]144[.]211:51836/bin[.]sh",
                "hxxp://113[.]228[.]208[.]46:56903/Mozi[.]a",
                "hxxp://222[.]142[.]244[.]196:59371/bin[.]sh",
                "hxxp://178[.]16[.]54[.]109/spamget[.]exe",
                "hxxp://182[.]116[.]20[.]246:39870/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5500,
                "newInLastHour": 5496,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"5zh0a5l5[.]en-flashburnn[.]com\"",
                " \"en-flashburnn[.]com\"",
                " \"xorajahy[.]workers[.]dev\"",
                " \"hxxp://113[.]228[.]208[.]46:56903/Mozi[.]a\"",
                " \"hxxp://46[.]227[.]184[.]199:36141/Mozi[.]m\""
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
            "iocCount": 10507,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10507,
                "newInLastHour": 224,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de7567aa2ce367cb0915ffd8eb55b1e320e726c9",
                "b95285b6b061fd0acf6a5ae95433d703f52d1872",
                "5b276d28106cb7d91dd5f810e61d9523d34c7804",
                "1cdb18c33da65a40adad7b51808edf66f3e180e5",
                "bf192adc3dcaba7412e15b567de22e3f3150bbf7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50615,
            "activeSources": 8,
            "criticalAlerts": 27805,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17531,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10274,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4439,
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
                "count": 16469,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://kee126[.]com/vlc[.]zip",
                    "hxxps://tmpfiles[.]org/dl/1787161037[.]c81e7dba2550050a/wXw6relOYfKE/msi_pro[.]png",
                    "hxxp://27[.]152[.]10[.]88:45145/i"
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
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1679,
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
                "count": 1424,
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
                "count": 1345,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"115[.]159[.]226[.]190:80\"",
                    " \"186[.]241[.]75[.]21:80\"",
                    " \"123[.]57[.]42[.]41:8080\""
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "Vidar",
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
                    "0f47d296ca2a764238bfd644c7b716cffafa1352",
                    "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 600,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"pidorsas[.]site\"",
                    " \"hulywali[.]space\"",
                    " \"zaerkos[.]rest\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42886,
        "lastCalculated": "2026-08-21 18:34 IST"
    }
};
