// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-16T12:00:35.827389+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-16T12:00:35.523334+05:30",
    "lastUpdatedFormatted": "May 16, 2026 at 12:00 PM IST",
    "comparisonPeriod": "May 15 \u2013 May 16, 2026",
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
                "hxxps://wavellen[.]github[.]io/Microsoft-Clone-Home-Page",
                "hxxps://restoremycreditreport[.]com/bniyycir/dfsj",
                "hxxps://nycgyroking[.]com/",
                "hxxps://scotiaonlinebank[.]vercel[.]app/signinfolder/login[.]html",
                "hxxps://osmconsultancy[.]com/sd/er/fe/fsa/sdf/179/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 640,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b5962bbac90bfc8f48ca89d5f0137e91de6030c2fcd4bd34491d6e84b77a3924",
                " \"8fef5d340cdaaf4c28d1c3a3a962fc1b5c9cbdbc42a2147c694ebf0ef6b1f860",
                " \"4465fe927fb161af41e689f68ff6019db07859906ed639515c0bc351046d7033",
                " \"cfbc1c3699c99c4cb6f11d1aead29dd7b6eba440a88a4142505eede3e5430fff",
                " \"5e9747bbc50448329ec19615861b53c11398ccd171c4c7e5c227e0c1d73fb219"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1645,
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
                "1[.]180[.]183[.]158",
                "1[.]182[.]191[.]134",
                "1[.]190[.]169[.]10",
                "1[.]191[.]147[.]239",
                "1[.]192[.]176[.]80"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5327,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5327,
                "newInLastHour": 5327,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]145[.]83[.]197",
                "1[.]194[.]210[.]131",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24558,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24558,
                "newInLastHour": 24558,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]190[.]133[.]180:40022/i",
                "hxxps://path-green-second-hub[.]garden/fa840059-3192-4bfb-9c30-d037f336b27d/google[.]cl",
                "hxxp://42[.]55[.]238[.]195:44559/i",
                "hxxp://110[.]36[.]24[.]162:55122/bin[.]sh",
                "hxxp://42[.]178[.]214[.]47:37671/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1041,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1041,
                "newInLastHour": 873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"path-green-second-hub[.]garden\"",
                " \"wild-folder-routing-path[.]garden\"",
                " \"botan-it-getwork-flow[.]garden\"",
                " \"urban-botany-station[.]garden\"",
                " \"x0o600dr[.]clamshellkarakulchaalumina[.]digital\""
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
            "iocCount": 9697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9697,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                "42874ed125e23b73be13b7b8a7b89305ce979661",
                "bb1df8c1e6236408eb85294e9ce002f9222e57db",
                "fe322929a69e13348a8824c9eb27d58d8a82313b",
                "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52840,
            "activeSources": 8,
            "criticalAlerts": 34860,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25189,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 9671,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 545,
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
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24527,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://backyard-harvest-planner[.]garden/429e5532-8c10-4da4-9aee-c2eec2d23872/google[.]cl",
                    "hxxp://222[.]140[.]189[.]209:35600/i",
                    "hxxp://115[.]57[.]194[.]83:54809/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]190[.]169[.]10",
                    "1[.]192[.]176[.]80",
                    "1[.]192[.]215[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1637,
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
                "count": 534,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661",
                    "bb1df8c1e6236408eb85294e9ce002f9222e57db"
                ]
            },
            {
                "name": "OffLoader",
                "count": 402,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "a04036db29a3c4ab6e89e5a535baecc8b678fbb9",
                    "1598b0902f425d5a4895a58e5c48ebe96f9df1b5"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 357,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "646821885b9e966ba8bb62c511f6b90a0b8d58c8",
                    "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed",
                    "06e08670cd781e40cee3c93163c7d29ea73d4acb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46090,
        "lastCalculated": "2026-05-16 12:00 IST"
    }
};
