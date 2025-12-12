// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-13T00:24:25.131894+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-13T00:24:24.781335+05:30",
    "lastUpdatedFormatted": "Dec 13, 2025 at 12:24 AM IST",
    "comparisonPeriod": "Dec 12 \u2013 Dec 13, 2025",
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
                "hxxps://portalseguro-1[.]site/inicio/",
                "hxxp://peeldsb-rnicrosoft-login[.]work[.]gd/",
                "hxxps://webb-d4n4id[.]oofficial[.]biz[.]id/",
                "hxxp://www[.]robiox[.]com[.]py/users/382776298708/profile/",
                "hxxps://click2claims[.]com/amazon3/claims[.]html?lptoken=17f6651f528427c9491e&cep=N4Igdgpg7g+gFgSwC4wQExALhANgGYDMADEQJwQAcAtAOzkDGVALAIwEtUBGeOTVATPxZF6aehAL8mTEABoQANwQBnZKgzYArEwg1NpNESp4mAQxzM8NDp1LcqFUzU6chm/hUFzFKtUgQAthDKSKYBAA5YIPxE/JpULPwJ/AAqRDiY/KSYZAB0iRQAWt5KqkgA9gBO6lGcmhQ0NBQs1JwiRtKiVKakRAQONPSmmvim/JwS3kMRpggA5mA12DgUEGh47kyamngsmsJEiaTkaxTeYOVoEEsgRDAs55fXSACe4RBRADKmYGgIYHNHlcYPQ4LMwFgANq3e4gAC68nClWCEAANhB6Eg1jALlcsKBXu8vj8/gDvKFKnMICh0FEcL0KDgcCIWEw0A0DokXHV+Hggddadg7g95JAAB5IfEgQkfbAAeTweAglXJpkp1JuKzWeCInBo/DQpnoLB1h15YwIpHo/JudztMBgwsdMH45wgEqwYAArqjUQBfP3yUHgmDhcplBDlCGYUD0L2VZFgJAAOSeAElfu6sER5JxKj9QRm/uJlFC4YGQCoYMi/sjMVgkJUvRB5ABHZSRGMgUxoBQgsLhWYLG7AHv9iLqP3eHt98qK5UjmcKpWVNNoKfyUyKhCohCmLEjgAC/zw5Vyyi9nBBYLAkFRh433d+lXK6BHVwUa8fJJfb7fATQTQomAD81wAWUAx96F3egAGsjxPM9oIQOD0AfKZkX3BAFAFDQQGAehMP8HCvwwiAsJwnEwllfDCPI4iIGTajHzmWY8OAVj0BYtiYAAoDsA4tiIM0R90DwUxgLE0xRKCBBJNkmSIAQXjAPkpThMfAIjWArT6E0o0VP4/DdI07xyjY4DzK4syeL4yyhMgsz52qMBqOA48wFPXJpkHeYwFyOcVyooJ0PkZRrWwMCSBYGAAEEwNiwo5WTABhWKACUABEYDTOUAGVvC9CSBKKx8vS9QV8I8ryfKHfzXJCqcKyrSAoCwcTUWUCA/SAA="
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 814,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"702252b74d927a5c5ef712dfb1931e2d9093a63950505ca2f887e520eeaef7e2",
                " \"8f16da672b72afa99e534d022b945bdc8a4ea1083d09ba7930df2dd163eb3bb8",
                " \"bc02322aaf96fa1841101636dc4c8011da3bcc5571a6f0278813884ce54b5b3f",
                " \"70d85e2d9c76ba1d7c0d05069af28526eb20bf1484c7116fdd2ee9438830bdeb",
                " \"b9ab48dcba5fb99ecafdb4b21370ecb8a7a3631349bceee0164c0735155a3cfe"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1494,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1494,
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
                "1[.]1[.]179[.]25",
                "1[.]15[.]118[.]23",
                "1[.]173[.]80[.]250",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5762,
                "newInLastHour": 5762,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]12[.]53[.]235",
                "1[.]12[.]64[.]80",
                "1[.]13[.]79[.]144",
                "1[.]162[.]231[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29075,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29075,
                "newInLastHour": 29075,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://k5i[.]pr2ctsu7v[.]ru/sx34pvys",
                "hxxp://178[.]16[.]55[.]189/files/748049926/JI9fbje[.]exe",
                "hxxp://178[.]16[.]55[.]189/files/1781548144/NUYCbam[.]exe",
                "hxxps://omega[.]1nju5tred[.]ru/ctbk359r",
                "hxxps://omega[.]1nju5tred[.]ru/8ps7417a"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2450,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2450,
                "newInLastHour": 2225,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"31[.]220[.]89[.]71:8080\"",
                " \"k5i[.]pr2ctsu7v[.]ru\"",
                " \"184[.]174[.]32[.]240:7443\"",
                " \"136[.]0[.]157[.]158:7707\"",
                " \"109[.]145[.]252[.]9:2222\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8616,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8616,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "aef87c27347dcc635eadd305506e254126bedc43",
                "6e751a35d2d9de163d6447f3f7301a4e87394a32",
                "40641ff77ae7b58d5b435664d7b47399730bf4a0",
                "d290f26e5af29e87034418cfd5b100d7d2fead9d",
                "50def7da0eb236fcb1d55eb802039ddd95049da9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57666,
            "activeSources": 8,
            "criticalAlerts": 38414,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29816,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8598,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1415,
                "trend": "stable",
                "percentage": 4
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 28971,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mouc[.]starl1tewave[.]ru/mzvut5s1",
                    "hxxps://mouc[.]starl1tewave[.]ru/bq5zh73j",
                    "hxxps://help-dps[.]shop/download-apk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]179[.]25",
                    "1[.]15[.]118[.]23",
                    "1[.]173[.]80[.]250"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"win.phorpiex\"",
                "count": 461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ssofhoseuegsgrfnuy[.]net\"",
                    " \"slpsrgpsrhojifdijy[.]net\"",
                    " \"srndndubsbsifurfd[.]biz\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"kevincheat[.]com\"",
                    " \"buradakimvar[.]xyz\"",
                    " \"hxxp://bamboopaw2021[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 52404,
        "lastCalculated": "2025-12-13 00:24 IST"
    }
};
