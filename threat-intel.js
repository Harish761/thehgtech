// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-21T16:01:55.976688+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-21T16:01:55.624129+05:30",
    "lastUpdatedFormatted": "Jul 21, 2026 at 04:01 PM IST",
    "comparisonPeriod": "Jul 20 \u2013 Jul 21, 2026",
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
                "hxxps://lnk[.]ink/robIox[.]com[.]users-35142531842[.]profile",
                "hxxps://www[.]roblox[.]com[.]mu/users/6714926237/profile",
                "hxxp://www[.]18551[.]xyz/",
                "hxxps://telvora-gld-belxemi-a4v9dw72[.]pages[.]dev/send_appeal_request",
                "hxxps://resptectadpein[.]com//Last/log/web/cd[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 920,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 920,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4ceeb2fb03ca0e8006037b953aa3b46e5f82555313b6ea583a660661442bd669",
                " \"3565a7a2bb632357c35f6ca9e98eb083e1505526f0ab0e4d88df216299540069",
                " \"9fde6ea9b16c1464fb5f3cfa5f8b491a09e0cc7e3257e8166df15d4ff8d159cf",
                " \"e189ccd0c160788e36444b5e0883042b2e3514cbaf71d4d81a02f95af5591fb2",
                " \"94072aa98faadb3a2f27fc10857c943713fa55a5f7ca41d3e81eb63474f9ceba"
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
                "newInLastHour": 8,
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
                "1[.]159[.]90[.]31",
                "1[.]183[.]161[.]88",
                "1[.]191[.]147[.]34"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5308,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5308,
                "newInLastHour": 5308,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]162[.]245[.]230",
                "1[.]162[.]62[.]76"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20433,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20433,
                "newInLastHour": 20433,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]235[.]89[.]153:35475/i",
                "hxxp://219[.]155[.]201[.]22:44365/i",
                "hxxp://115[.]48[.]133[.]253:34024/i",
                "hxxp://110[.]37[.]13[.]55:37070/bin[.]sh",
                "hxxp://42[.]235[.]89[.]153:35475/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4153,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4153,
                "newInLastHour": 4046,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lufry[.]mabelsnursery[.]com\"",
                " \"mabelsnursery[.]com\"",
                " \"hxxps://cldaa[.]org/\"",
                " \"120[.]26[.]208[.]96:33060\"",
                " \"120[.]26[.]208[.]96:22\""
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
            "iocCount": 10213,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10213,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "632061b26a93455e9c4f0ac413deae710c920216",
                "991bf55fc47c006b3eedf6b348296f9f7aba20eb",
                "9c124d9fc4b10c04767b554f02b92d6591175e8a",
                "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be",
                "48381652ae3e124b686c25282dac3858a5f2de3e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52480,
            "activeSources": 8,
            "criticalAlerts": 31300,
            "activeCampaigns": 231
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21115,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10185,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3602,
                "trend": "stable",
                "percentage": 5
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
                "count": 20236,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://192[.]255[.]195[.]158/13/img_050556[.]png",
                    "hxxps://nameless-scene-7204[.]uploadeeeesclientess[.]workers[.]dev/FTM0-40PO-AO28-G98E/img_b0utd5[.]png",
                    "hxxp://61[.]53[.]98[.]213:33122/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]90[.]31",
                    "1[.]183[.]161[.]88",
                    "1[.]190[.]44[.]125"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1663,
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
                "count": 1461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]155[.]169[.]245:8080\"",
                    " \"43[.]155[.]169[.]245:22\"",
                    " \"103[.]43[.]18[.]230:22\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1428,
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
                "count": 692,
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
                "count": 640,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e05145a93b7b5def1ca6c0e356cc4cdba3cbed9f",
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "count": 445,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5dc598df9a1f9cf893ce86b54f8be517475d1ff9",
                    "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
                    "572029fec2909ba613cee3c3698b8a49af83b428"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45240,
        "lastCalculated": "2026-07-21 16:01 IST"
    }
};
