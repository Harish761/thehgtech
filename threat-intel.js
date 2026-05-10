// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-11T01:10:20.147997+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-11T01:10:19.743446+05:30",
    "lastUpdatedFormatted": "May 11, 2026 at 01:10 AM IST",
    "comparisonPeriod": "May 10 \u2013 May 11, 2026",
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
                "hxxps://dpd[.]kemarviox[.]cfd/com",
                "hxxps://mbhytamask-walt[.]gitbook[.]io/us",
                "hxxp://mbhytamask-walt[.]gitbook[.]io/",
                "hxxps://meta-id17632[.]invoice-ads-manager[.]com/",
                "hxxp://www[.]m167k[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 552,
                "newInLastHour": 55,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"126822ef648c3c30dc20c5250ef6cdda0cb75a471093761bcaf24fe0a306311b",
                " \"41636c1901c2e23dbb4947fc1a0fff52283ff909364722fe6171eacb5ec0b62f",
                " \"b423a3c1c0a0a4cb918a28be83b3c06bd3a2c7275ebace976656e67f03a0b8cf",
                " \"264f2f1e6c9d09a332df26de494c112f24d020ce495324e4b5251b61cf722329",
                " \"88d9a02ec689f23dd0aad36ecfa5c55b790a401c45677e18df9e6e2209c08527"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
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
                "1[.]0[.]140[.]158",
                "1[.]11[.]228[.]4",
                "1[.]183[.]41[.]171",
                "1[.]191[.]146[.]96",
                "1[.]192[.]177[.]245"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4554,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4554,
                "newInLastHour": 4554,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]255[.]125",
                "1[.]162[.]222[.]129",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28865,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28865,
                "newInLastHour": 28865,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]25[.]56:52889/bin[.]sh",
                "hxxps://bernasibutuwqu2[.]com/debug/loader[.]sh",
                "hxxps://bernasibutuwqu2[.]com/debug/payload[.]applescript",
                "hxxp://113[.]70[.]186[.]67:49629/i",
                "hxxps://rubbermax[.]xyz/download"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1322,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1322,
                "newInLastHour": 1305,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"1net[.]ro\"",
                " \"1sttxreversemtg[.]com\"",
                " \"allstartsealing[.]com\"",
                " \"alnuric[.]org\"",
                " \"aplikasigerhanatoto1[.]com\""
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
            "iocCount": 9633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9633,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6da5a6bce253699b8db995f8955a4bf6482f12a3",
                "04472c9faf1014830def8016729f50a2b773a0ab",
                "cf08f1d2e3da9567cd2398ecb5f8df0503ce857f",
                "d30376a0f461e6cc126e18beb023e71c703912c0",
                "12adb13f09a921ef558cd28c50ac4de81e1b8ad3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57052,
            "activeSources": 8,
            "criticalAlerts": 38931,
            "activeCampaigns": 166
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9630,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 113,
                "trend": "down",
                "percentage": -13
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 85
            },
            {
                "name": "Tech",
                "percentage": 14
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
                "count": 28744,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://libsyspathview[.]framevector[.]ink/05heil6c5-49ds-4764-abb59-368f34ad4245/auth[.]dll",
                    "hxxps://libsyspathview[.]framevector[.]ink/05heil6c5-49ds-4764-abb59-368f34ad4245/auth[.]dll",
                    "hxxp://apidocserv[.]logicframe[.]pics/so7f5fa6-c8d5-4c28-9e4a-c9fb43ca0d86/verify[.]check"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]140[.]158",
                    "1[.]183[.]41[.]171",
                    "1[.]188[.]101[.]92"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1624,
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
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 978,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"metaltscfgmgr[.]logicframe[.]pics\"",
                    " \"libsyspathview[.]framevector[.]ink\"",
                    " \"apidocserv[.]logicframe[.]pics\""
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
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
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
                "count": 508,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "693673f31128d9637630776f2989b5c29c77b04d",
                    "4ea9780c4039e050f0e2433deaa076a1ed3e1cec",
                    "87e5589d7d33aa32595bc8f2ac6275a4f1620fb1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50118,
        "lastCalculated": "2026-05-11 01:10 IST"
    }
};
