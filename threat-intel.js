// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-02T01:53:36.936896+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-02T01:53:36.644149+05:30",
    "lastUpdatedFormatted": "Jun 02, 2026 at 01:53 AM IST",
    "comparisonPeriod": "Jun 01 \u2013 Jun 02, 2026",
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
                "hxxps://ishakaushik31[.]github[.]io/amazon-clone",
                "hxxp://tsess-29e[.]pages[.]dev/",
                "hxxps://oyekaleisrael2-dev[.]github[.]io/netflix",
                "hxxp://sp1ct6-frapvik-biz-vrolnex-drament[.]pages[.]dev/",
                "hxxps://yn7uuf[.]sbs/o/hxu17/1769963912159#selectedbank9"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 689,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"84447200aef49356af5e776b95fec129f293d83e7b5f7e8c3e88e1d15f49fea9",
                " \"ee8b9057db5d1d7197ba91869ec4621274f418e734351d61c037c97be1679a0c",
                " \"7ea8c0bb8ab8c412f289bacc5d4a8eeb9ddf60457ed1bf73f83c39a4483039fd",
                " \"693e28f619b0fd991846f608c6b4a10bf7d681b89bf5420a5f8788313beadc7c",
                " \"a5b6255d7858a0e175ecf03239e7f977658037cfb954af5af319a7e83ff2eeaf"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1599,
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
            "iocCount": 6084,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6084,
                "newInLastHour": 6084,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]176[.]139",
                "1[.]14[.]180[.]163",
                "1[.]15[.]22[.]22",
                "1[.]162[.]226[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20500,
                "newInLastHour": 20500,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]93[.]217:41386/bin[.]sh",
                "hxxp://203[.]177[.]237[.]148:52155/bin[.]sh",
                "hxxp://115[.]48[.]152[.]46:42960/i",
                "hxxps://rvvemra[.]takhtebet[.]app/faea0967-fa05-4994-8440-686eaa2d049b",
                "hxxps://0nwfyg62[.]onja1bet[.]com/?ublib=3b493422-bbc9-4d54-b8d8-7dfc8ea5b545"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3220,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3220,
                "newInLastHour": 3219,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"172[.]94[.]9[.]102:443\"",
                " \"api[.]ioteromixes[.]com\"",
                " \"0nwfyg62[.]onja1bet[.]com\"",
                " \"rvvemra[.]takhtebet[.]app\"",
                " \"b2b3w9yq[.]onja1bet[.]com\""
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
            "iocCount": 9753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9753,
                "newInLastHour": 51,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                "b733673f2c221400c4e14bb6cea0f528a5dff337",
                "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861",
                "e4f7e7830ac3c9b8f1bbdaa32294eab9a8d105c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51007,
            "activeSources": 8,
            "criticalAlerts": 30899,
            "activeCampaigns": 208
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21142,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 9757,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2893,
                "trend": "stable",
                "percentage": 1
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20378,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]107[.]228:38348/bin[.]sh",
                    "hxxp://123[.]188[.]56[.]89:43583/i",
                    "hxxp://125[.]44[.]245[.]53:59484/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]13[.]163[.]60",
                    "1[.]141[.]152[.]90"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1607,
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
                "count": 1411,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1376,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]240[.]127:443\"",
                    " \"43[.]138[.]165[.]203:443\"",
                    " \"43[.]138[.]165[.]203:80\""
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
                "count": 680,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 545,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                    "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                    "b733673f2c221400c4e14bb6cea0f528a5dff337"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 427,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8a3f5ee504e33fd7b53bb61f81e2fb34bc6ce73d2f4d0f8363b2be2a0f556870",
                    " \"3303b5905c1db31f011990051c49bc7f2f9170826883103323f40d28ce51fe1c",
                    " \"a7ba58e8fe34c25407cfd24297c45e0bb9c64ab33c372c81e460e8a8e35e88e9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 30232,
        "lastCalculated": "2026-06-02 01:53 IST"
    }
};
