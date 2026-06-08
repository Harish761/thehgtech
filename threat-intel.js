// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-09T00:02:24.555809+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-09T00:02:24.251218+05:30",
    "lastUpdatedFormatted": "Jun 09, 2026 at 12:02 AM IST",
    "comparisonPeriod": "Jun 08 \u2013 Jun 09, 2026",
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
                "hxxps://ghanapoest[.]eu[.]cc/gh",
                "hxxps://lnk[.]ink/KLoo3",
                "hxxps://hellpdesk[.]at/?r=d614261b-37fd-45ba-aea9-b8c120f1bc86",
                "hxxp://lord[.]kiinoasnacks[.]info/ga/click/2-7363688-10-8687-16978-9312-3a966f0ffa-c94b5c9a3d",
                "hxxps://scotiawealthmanagement[.]com[.]cobblestonesw[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1174,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1174,
                "newInLastHour": 146,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c079e9c3e629aa449b8f5c1971faa47115de27279c0f045386c9d2a13097d71f",
                " \"fa6d796c4be1c3f511ba252cc6b65c837dc4e4a173f81139dda35e954a068b28",
                " \"24e993be122763ab7ad40122a01ce1486327546692f0ca0e7afb50589d12641b",
                " \"bc7db24d53aa9f34dd9746faad3b7ef033d0b7a3c9f8960086bb206f0ee4fb7a",
                " \"cb62536525f9df49cb3b4dad0a5f8f76fdae253db729bc9e65fd21ea82ee21c1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1621,
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
                "1[.]0[.]203[.]197",
                "1[.]12[.]229[.]231",
                "1[.]140[.]109[.]53",
                "1[.]15[.]14[.]29",
                "1[.]15[.]35[.]79"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5011,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5011,
                "newInLastHour": 5011,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]110[.]170",
                "1[.]2[.]252[.]192",
                "1[.]201[.]123[.]182",
                "1[.]202[.]220[.]94"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18717,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18717,
                "newInLastHour": 18717,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://122[.]233[.]28[.]34:52333/i",
                "hxxp://110[.]37[.]113[.]30:39124/bin[.]sh",
                "hxxp://218[.]252[.]234[.]243:39147/bin[.]sh",
                "hxxps://zexrhdz[.]penaltibazi[.]com/115ccc47-a990-4938-84e7-b00df6d6deaa",
                "hxxp://182[.]116[.]95[.]137:60706/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4271,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4271,
                "newInLastHour": 4262,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"robodomain[.]sbs\"",
                " \"zexrhdz[.]penaltibazi[.]com\"",
                " \"!k![.]persianshart[.]com\"",
                " \"persianshart[.]com\"",
                " \"sirata[.]asia\""
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
            "iocCount": 9843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9843,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "454a92d16f440ad8f180e21da8ee6552b151c25c",
                "a01bd4e7cb1064b5af288d0fbc48a06314f4c9af",
                "e88df6fa5cbae7002d552047f52594c7dbe46baa",
                "1826e244059546f2728d9dca86494828c95d0313",
                "44d317f1bdfcf7670d288c912cecd0737bc4cc1b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50595,
            "activeSources": 8,
            "criticalAlerts": 29536,
            "activeCampaigns": 238
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19717,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 9819,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3214,
                "trend": "stable",
                "percentage": 3
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
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18505,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]190[.]134[.]254:56689/bin[.]sh",
                    "hxxp://72[.]194[.]227[.]46:56396/bin[.]sh",
                    "hxxp://125[.]46[.]196[.]74:37618/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]109[.]53",
                    "1[.]141[.]178[.]58",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1606,
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
                "count": 1415,
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
                "count": 1392,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]14[.]116[.]17:19443\"",
                    " \"117[.]72[.]115[.]168:8080\"",
                    " \"117[.]72[.]115[.]168:80\""
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 565,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "454a92d16f440ad8f180e21da8ee6552b151c25c",
                    "44d317f1bdfcf7670d288c912cecd0737bc4cc1b",
                    "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2"
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
                "name": " \"js.clearfake\"",
                "count": 527,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"h0t75jy5[.]betgopro[.]com\"",
                    " \"zrqkapj[.]one1x[.]bet\"",
                    " \"fhvteyb[.]kbshavanese[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43491,
        "lastCalculated": "2026-06-09 00:02 IST"
    }
};
