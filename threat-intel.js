// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-16T02:12:07.180828+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-16T02:12:06.942547+05:30",
    "lastUpdatedFormatted": "Mar 16, 2026 at 02:12 AM IST",
    "comparisonPeriod": "Mar 15 \u2013 Mar 16, 2026",
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
                "hxxps://t50a[.]xyz/",
                "hxxps://b253c[.]xyz/",
                "hxxps://63390[.]xyz/",
                "hxxp://g89g[.]xyz/",
                "hxxps://p208a[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 720,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 720,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"905e0e98fa529395b6ccfeb38fefabb10913fecbc66f5d1d8097dfb34c0b724e",
                " \"12b5974782289e6aaadf2df8088499792d79ab91325d4abc57b0383b94d67439",
                " \"b15562c0771ce6855e2186998be98482584951039424400b2413dd2f86362820",
                " \"2f4c569ee323a12d3e5a1334a49269a0b03fd9d27cb17024a618b53f1027358b",
                " \"0f79989912572a24ba13baabb32b3fd084496271c51448d47b66fe1aedbf293c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1525,
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
                "1[.]0[.]164[.]165",
                "1[.]12[.]76[.]172",
                "1[.]15[.]118[.]23",
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7593,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7593,
                "newInLastHour": 7593,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]222[.]42[.]237",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19983,
                "newInLastHour": 19983,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]248[.]108[.]165:47998/i",
                "hxxps://dist-z02-edge[.]ponteluna[.]in[.]net/verification[.]google",
                "hxxps://sync-v9-data[.]metallopunto[.]in[.]net/verification[.]google",
                "hxxps://gate-x3-proxy[.]metallopunto[.]in[.]net/verification[.]google",
                "hxxps://web-z7-infra[.]metallopunto[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1587,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1587,
                "newInLastHour": 1410,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"node-55-static[.]ponteluna[.]in[.]net\"",
                " \"sync-v9-meta[.]ponteluna[.]in[.]net\"",
                " \"srv-x11-host[.]ponteluna[.]in[.]net\"",
                " \"main-z1-point[.]metallopunto[.]in[.]net\"",
                " \"sync-v9-data[.]metallopunto[.]in[.]net\""
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
            "iocCount": 9260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9260,
                "newInLastHour": 8525,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f1051306c328fd41245695084f8e6d39a478c055",
                "3e663dd4145cbe7d51ce77a973741f60903ff1ad",
                "a5b066de54c5f7d7f4122235fcece077895757f8",
                "254cc30fd479d1338dcc4fc08ff5f8ea491c78f0",
                "d2f4982983fd81cfc3ae9fb15d779f994470801a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 39803,
            "activeSources": 8,
            "criticalAlerts": 21433,
            "activeCampaigns": 122
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20690,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 743,
                "trend": "down",
                "percentage": -91
            },
            {
                "category": "Botnet",
                "count": 523,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 303,
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
                "count": 19963,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bridge-00-light[.]altolivello[.]in[.]net/verification[.]google",
                    "hxxps://api[.]wewpwsw[.]su/gate[.]exe",
                    "hxxps://room-x12-dark[.]altolivello[.]in[.]net/verification[.]google"
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
                    "1[.]15[.]118[.]23",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1528,
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
                "name": " \"js.clearfake\"",
                "count": 409,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"point-v4-scan[.]altolivello[.]in[.]net\"",
                    " \"bridge-00-light[.]altolivello[.]in[.]net\"",
                    " \"room-x12-dark[.]altolivello[.]in[.]net\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 340,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://rewardgoldshop[.]com/work[.]zip\"",
                    " \"hxxps://rewardgoldshop[.]com/q/\"",
                    " \"rewardgoldshop[.]com\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 296,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://t50a[.]xyz/",
                    "hxxps://b253c[.]xyz/",
                    "hxxps://63390[.]xyz/"
                ]
            },
            {
                "name": " \"n/a",
                "count": 262,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b2b73b34bacca5fecdd540114da91790c60aee7300cd427ee02170d1f471c328",
                    " \"ad892972e9788fff31f5f166da937d1229c7970d6e0c693164b2f484dd0c9aba",
                    " \"60171e71774630b9f5c824e2a4ee4742aff1461e0c1910395430ba1592c469cd"
                ]
            },
            {
                "name": "Vidar",
                "count": 217,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1051306c328fd41245695084f8e6d39a478c055",
                    "a5b066de54c5f7d7f4122235fcece077895757f8",
                    "254cc30fd479d1338dcc4fc08ff5f8ea491c78f0"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 207,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"dc33c6222faa55cb7e94b907eb02c330d2448fb594359e5b6db749dde9a4fc28",
                    " \"3b1a166cace1c6b13fadff877fc58c65c4adb1cd6576b00782e6cbe9d7c44f25",
                    " \"81ea772d178fc43be8403c9d50ce632fe5724f81bfc5fcec19d7caf076f98e24"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 183,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"178[.]16[.]52[.]58:4443\"",
                    " \"185[.]242[.]3[.]83:5505\"",
                    " \"18[.]117[.]70[.]136:4449\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 52823,
        "lastCalculated": "2026-03-16 02:12 IST"
    }
};
