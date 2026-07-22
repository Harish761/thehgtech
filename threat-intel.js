// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-22T09:06:09.728404+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-22T09:06:09.365484+05:30",
    "lastUpdatedFormatted": "Jul 22, 2026 at 09:06 AM IST",
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
                "hxxps://bpksbd[.]org/terms-of-use/",
                "hxxps://facebookloginbd[.]blogspot[.]com/",
                "hxxps://nothinganythingok[.]blogspot[.]com/?m=1",
                "hxxps://www[.]roblox[.]com[.]am/users/148337487026/profile",
                "hxxps://g5[.]lu/4t6xd"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 749,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 749,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"56819d1e3fb265c80e117800fd1df93744135ca391a311250d0221e7ecc9fd81",
                " \"fb881f10b82cd577893fc57375fcfa43a5650c395f82ab42c18eca04874679d4",
                " \"e5dda4e7dc6b95830c066b519383e71abd4fb0a2340c0def898f635d9cfa13e7",
                " \"5da46290c303a3acb2b8f5ec1792f33728903b7700e742c9e37aac026270245b",
                " \"9c4d1d8077938fef89508c207e5fc0c56544d84ac34c08c7ffe7a9c107e68237"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1668,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1668,
                "newInLastHour": 2,
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
                "1[.]159[.]90[.]31",
                "1[.]190[.]44[.]125",
                "1[.]193[.]63[.]138",
                "1[.]193[.]63[.]91",
                "1[.]197[.]102[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5856,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5856,
                "newInLastHour": 5856,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]171[.]170",
                "1[.]15[.]227[.]58",
                "1[.]162[.]245[.]230",
                "1[.]162[.]62[.]76"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20202,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20202,
                "newInLastHour": 20202,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://129[.]121[.]114[.]124/WgR",
                "hxxp://129[.]121[.]114[.]124/uteZ",
                "hxxp://129[.]121[.]110[.]105/Q3A",
                "hxxp://129[.]121[.]110[.]105/TFW",
                "hxxp://110[.]36[.]92[.]72:52327/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4035,
                "newInLastHour": 3953,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"qsak[.]snydersflowershop[.]com\"",
                " \"154[.]8[.]155[.]23:60000\"",
                " \"154[.]8[.]155[.]23:443\"",
                " \"42[.]193[.]201[.]58:8084\"",
                " \"64[.]111[.]93[.]243:8443\""
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
            "iocCount": 10190,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10190,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b8b339de5ea80d17fb5ce2eb144d7ba28b33337a",
                "9000e46cabc64219fb1447d59d5443afcb412e36",
                "632061b26a93455e9c4f0ac413deae710c920216",
                "991bf55fc47c006b3eedf6b348296f9f7aba20eb",
                "9c124d9fc4b10c04767b554f02b92d6591175e8a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52671,
            "activeSources": 8,
            "criticalAlerts": 31647,
            "activeCampaigns": 233
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21431,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10216,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3548,
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
                "count": 20593,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://129[.]121[.]114[.]124/3wI",
                    "hxxp://129[.]121[.]114[.]124/Z31w",
                    "hxxp://110[.]37[.]83[.]214:43234/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]12[.]65[.]64",
                    "1[.]183[.]161[.]88"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                "count": 1449,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"52[.]86[.]125[.]111:22\"",
                    " \"150[.]187[.]25[.]242:8080\"",
                    " \"43[.]165[.]188[.]19:22\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1431,
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
                "count": 693,
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
                "count": 651,
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
                "count": 447,
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 45392,
        "lastCalculated": "2026-07-22 09:06 IST"
    }
};
