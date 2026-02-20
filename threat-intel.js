// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-20T08:21:04.194279+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-20T08:21:03.930505+05:30",
    "lastUpdatedFormatted": "Feb 20, 2026 at 08:21 AM IST",
    "comparisonPeriod": "Feb 19 \u2013 Feb 20, 2026",
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
                "hxxp://gemini[.]wenyuehui88[.]top/",
                "hxxp://recursos[.]adobeexperience[.]com[.]br/",
                "hxxps://roblox[.]com[.]ge/users/2500186596/profile",
                "hxxps://netmirror-clone22j2o89[.]netlify[.]app/",
                "hxxps://bafkreiah52im3km3sxegmgcpllhgm46mmsttrsk6owidlglm4hyfeiohdu[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 717,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 717,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c87a008da49bbb29db5d7daf150b77bc9f50f5e80bbe6eef2daab375485e423d",
                " \"6b1783d55d44196ae5984c0ac0c71ebafa4886d8411be9f8b765ecffe9b21ace",
                " \"68ae5b6f7f3d108d1e7b7d59e81e011dc73be045689ac36c37602117123b78a0",
                " \"6f47e1206b2ea72e77b6a97753147e37c31c50337cddac507e8d8d3cd4e7b66b",
                " \"3d2496c34de57669670070825b43cfec24eff1ab5c8c2803c057c538d916023c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1480,
                "newInLastHour": 14,
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
                "1[.]0[.]164[.]165",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6670,
                "newInLastHour": 6670,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]98[.]105",
                "1[.]15[.]136[.]28",
                "1[.]162[.]225[.]217",
                "1[.]165[.]130[.]37",
                "1[.]165[.]130[.]39"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20344,
                "newInLastHour": 20344,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]126[.]112[.]26:55484/bin[.]sh",
                "hxxp://27[.]215[.]50[.]252:48744/i",
                "hxxps://waterfront[.]westlake[.]in[.]net/shore_id",
                "hxxp://42[.]87[.]221[.]34:53301/i",
                "hxxp://110[.]36[.]86[.]0:39223/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 699,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 699,
                "newInLastHour": 693,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"waterfront[.]westlake[.]in[.]net\"",
                " \"greenpath[.]deepwood[.]in[.]net\"",
                " \"wildleaf[.]deepwood[.]in[.]net\"",
                " \"darktimber[.]deepwood[.]in[.]net\"",
                " \"deeproot[.]deepwood[.]in[.]net\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8971,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8971,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de82f1f7daacb7b5d91bee3382a3e0a36037ded7",
                "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                "17a5a3ef6c810022d695d6e0642ac0ccf8505600",
                "cf716cb4e11c0b7c8b7deda04db0df9332b5a5f9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48043,
            "activeSources": 8,
            "criticalAlerts": 30565,
            "activeCampaigns": 205
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21599,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8966,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 429,
                "trend": "stable",
                "percentage": 2
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
                "count": 20852,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]228[.]33[.]50:59915/i",
                    "hxxps://northgale[.]coldwind[.]in[.]net/temp_log",
                    "hxxp://42[.]238[.]66[.]82:58257/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]116[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1382,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                    "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                    "313aa465da1c887d1189e74be08d3e79306192c2"
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
                "name": "Vidar",
                "count": 372,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "66afb632b2131a12c4ee5896e88bc485662077eb",
                    "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                    "9b64cd9e6bd74585beeb263fcff0e91988921f88"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43070,
        "lastCalculated": "2026-02-20 08:21 IST"
    }
};
