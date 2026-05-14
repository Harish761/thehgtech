// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-15T02:49:27.628040+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-15T02:49:27.281320+05:30",
    "lastUpdatedFormatted": "May 15, 2026 at 02:49 AM IST",
    "comparisonPeriod": "May 14 \u2013 May 15, 2026",
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
                "hxxp://b35aaa[.]com/poker/125",
                "hxxp://b35aaa[.]com/poker/216",
                "hxxp://b35aaa[.]com/sport/115",
                "hxxps://discord[.]fresh-soft[.]ru/?etext=2202[.]Mm1zi1xQwed46cjbAdGmvdVrHiHH9xltwtxQ51NnS1MLf0LsIjHjdTqm1QDaB6BUaHR2cmVvaHprbHF1YXN6eQ[.]2f6cab86819c593d63cb7ada4fde7a90594280a7",
                "hxxp://www[.]robiox[.]com[.]ua/users/1448219617/profile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 575,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 575,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9d5a4fcba60a9f9459570417411e8d4a90da4d274de8f352ef5d4ff6d50c2b9a",
                " \"2b27f573a2803501782484e855ed67d53d9c6bdba5e94172871fb91d9eb06780",
                " \"358346be7566fc2ffb13141eabc5af270a9e0e8f71fa99aebc6a5b5d6281a101",
                " \"57f4cdc0363e85d6542a2473eb252711dfc1667d6a2875d2c507fc817bced680",
                " \"68bcc19c29b0865ab6767a24e8b2d1e5a926666ae6b80c2382e0723c4a5d6874"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1612,
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
                "1[.]15[.]51[.]236",
                "1[.]173[.]112[.]122",
                "1[.]177[.]63[.]24",
                "1[.]190[.]169[.]10",
                "1[.]192[.]176[.]80"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5445,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5445,
                "newInLastHour": 5445,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]194[.]233[.]49",
                "1[.]214[.]197[.]163",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26016,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26016,
                "newInLastHour": 26016,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://edge-processing-network[.]courses/1c4c6f08-91e7-48f5-824d-95afbd4a4064/google[.]cl",
                "hxxp://103[.]203[.]88[.]238:41928/Mozi[.]m",
                "hxxp://166[.]88[.]225[.]196/i/android[.]sh",
                "hxxp://182[.]117[.]71[.]80:54759/bin[.]sh",
                "hxxp://42[.]58[.]18[.]164:43772/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 732,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 732,
                "newInLastHour": 686,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"edge-processing-network[.]courses\"",
                " \"p4l3fctz[.]bitter-salty[.]digital\"",
                " \"1y9a9xkq[.]bitter-salty[.]digital\"",
                " \"serverless-mesh-core[.]courses\"",
                " \"microservicehub[.]courses\""
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
            "iocCount": 9693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9693,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7",
                "33ce7373545ee49eaae60e70c81ca1c1768061ea",
                "a7ebb36bfc096ff4c3337e3d4b93c60a45737d09",
                "c99556080925c1984193558fe2956dba8b72f758",
                "17e77e5099f947d0d081764e9068af08c10a5430"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53847,
            "activeSources": 8,
            "criticalAlerts": 36169,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26563,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9606,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 396,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 91
            },
            {
                "name": "Tech",
                "percentage": 8
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
                "count": 25997,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]53[.]243[.]30:49524/bin[.]sh",
                    "hxxp://193[.]233[.]113[.]85/debug/loader[.]sh",
                    "hxxp://193[.]233[.]113[.]85/payload[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]249[.]217",
                    "1[.]173[.]112[.]122",
                    "1[.]190[.]169[.]10"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1604,
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
                "count": 1407,
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
                "count": 670,
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
                "count": 551,
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
                "count": 515,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7",
                    "33ce7373545ee49eaae60e70c81ca1c1768061ea",
                    "a7ebb36bfc096ff4c3337e3d4b93c60a45737d09"
                ]
            },
            {
                "name": "OffLoader",
                "count": 393,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 356,
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
        "totalAttacksThisHour": 47537,
        "lastCalculated": "2026-05-15 02:49 IST"
    }
};
