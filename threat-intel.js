// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-04T15:52:15.801228+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-04T15:52:15.442412+05:30",
    "lastUpdatedFormatted": "May 04, 2026 at 03:52 PM IST",
    "comparisonPeriod": "May 03 \u2013 May 04, 2026",
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
                "hxxp://coensqureulogin[.]webflow[.]io/",
                "hxxp://netflix-clone-coral-three[.]vercel[.]app/",
                "hxxp://www[.]uuphuldlugin[.]godaddysites[.]com/",
                "hxxp://login-netcoin-ca[.]webflow[.]io/",
                "hxxp://netflix-ui-clone-iota[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 618,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5ef2622fd50d4bfa7cd455dc45897770539baa8d8fca1f7cd41a40509375bf6a",
                " \"d1a36cd71a1e6b93cf49f1eaf18867cd3fa0129733d3f63caa233e5ee7565086",
                " \"3f943226846e364f783015a464101c1523e066d6bd630623ddbe00f2203b48e5",
                " \"8f4a618be0b59f1156fb4b17347182412e54fc962360aab89e6e8b2e86f6605a",
                " \"26b40edcb6058e198db20eeeb6c02cb4a0d54c89bce38361f1ea7bedc4e60ebc"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1618,
                "newInLastHour": 15,
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
                "1[.]177[.]63[.]24",
                "1[.]178[.]242[.]165",
                "1[.]180[.]183[.]158",
                "1[.]192[.]179[.]247",
                "1[.]197[.]102[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7285,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7285,
                "newInLastHour": 7285,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]143[.]115",
                "1[.]0[.]143[.]71",
                "1[.]0[.]164[.]165",
                "1[.]0[.]215[.]59",
                "1[.]10[.]141[.]248"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27398,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27398,
                "newInLastHour": 27398,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]237[.]104[.]144:60641/bin[.]sh",
                "hxxp://5[.]182[.]87[.]118:8080/bot-x86_64",
                "hxxp://5[.]182[.]87[.]118:8080/bot-armv7l",
                "hxxp://5[.]182[.]87[.]118:8080/bot-aarch64",
                "hxxp://124[.]235[.]169[.]230:55244/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1016,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1016,
                "newInLastHour": 1015,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"offerparc[.]daro6vex[.]lat\"",
                " \"b534[.]lena3qit[.]lat\"",
                " \"lock[.]solidlink[.]surf\"",
                " \"103[.]101[.]177[.]234:6011\"",
                " \"103[.]101[.]177[.]235:6012\""
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
            "iocCount": 9649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9649,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bfc93167d1f9c356979db538f40440513ebd88d1",
                "80bd0d28db71c8bb7c56055d2894594f55054be6",
                "dfbc430daf40f0448ed30170103e9d829ee6b2e2",
                "a41f3065955b7a428985483c22176fe4e53776ce",
                "def45d954161dc6bf420131f900bd7cd9fd688c1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55453,
            "activeSources": 8,
            "criticalAlerts": 37519,
            "activeCampaigns": 179
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27898,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9621,
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
                "count": 144,
                "trend": "stable",
                "percentage": -2
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 15
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
                "count": 27272,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://blue[.]logicreef[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google",
                    "hxxp://60[.]23[.]157[.]220:55546/bin[.]sh",
                    "hxxps://star[.]logicreef[.]surf/9fd51fb7-b3ad-4c8f-bf05-b5423d14e06c/user_6747[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]180[.]183[.]158",
                    "1[.]192[.]179[.]247"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1603,
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
                "count": 1405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 760,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"blue[.]logicreef[.]surf\"",
                    " \"run[.]darktrace[.]surf\"",
                    " \"star[.]logicreef[.]surf\""
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
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
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
                "count": 515,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a41f3065955b7a428985483c22176fe4e53776ce",
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777"
                ]
            },
            {
                "name": "OffLoader",
                "count": 403,
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
        "totalAttacksThisHour": 51049,
        "lastCalculated": "2026-05-04 15:52 IST"
    }
};
