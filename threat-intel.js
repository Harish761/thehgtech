// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-09T02:10:24.840624+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-09T02:10:24.530327+05:30",
    "lastUpdatedFormatted": "Jun 09, 2026 at 02:10 AM IST",
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
            "iocCount": 1126,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1126,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"37ed12fe9c5b247e9c015938fd19204325413c083294a76f4f93e313d612a89a",
                " \"4c852c1da460c6e7f3b39fc21287ac1fac22c90e196e8d15a2b6ae1f2d5884f2",
                " \"3aaf423098ef9528340909eb04ec15d7957820a9e23b58d3a6b55ea065ca7c44",
                " \"e3cc57a0d561a33651d0b5bd6989b4e101f6bcf38807949502955dd61fded9a7",
                " \"e2f59ef29f26bc1a1e8d81176d43839ae443d727c910bf6e00a2e5b792495d90"
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
                "1[.]12[.]229[.]231",
                "1[.]140[.]109[.]53",
                "1[.]141[.]178[.]58",
                "1[.]15[.]14[.]29",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5045,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5045,
                "newInLastHour": 5045,
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
            "iocCount": 18779,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18779,
                "newInLastHour": 18779,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]48[.]148[.]244:56209/i",
                "hxxp://110[.]37[.]14[.]251:40665/bin[.]sh",
                "hxxp://115[.]56[.]109[.]95:53024/bin[.]sh",
                "hxxp://218[.]21[.]120[.]140:51671/bin[.]sh",
                "hxxp://115[.]59[.]30[.]168:34217/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4284,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4284,
                "newInLastHour": 4273,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"74[.]48[.]202[.]123:443\"",
                " \"74[.]48[.]202[.]123:80\"",
                " \"103[.]51[.]147[.]252:8084\"",
                " \"111[.]119[.]234[.]82:8888\"",
                " \"ojpqxkm[.]one1x[.]bet\""
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
            "iocCount": 9827,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9827,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7a87b6d493b26e7a16255788436690996b49f273",
                "a72f1227b88e5c8d436899f9f098a57504a1ef9e",
                "454a92d16f440ad8f180e21da8ee6552b151c25c",
                "a01bd4e7cb1064b5af288d0fbc48a06314f4c9af",
                "e88df6fa5cbae7002d552047f52594c7dbe46baa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50931,
            "activeSources": 8,
            "criticalAlerts": 29739,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19918,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9821,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3283,
                "trend": "stable",
                "percentage": 2
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
                "count": 18717,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://122[.]233[.]28[.]34:52333/i",
                    "hxxp://110[.]37[.]113[.]30:39124/bin[.]sh",
                    "hxxp://218[.]252[.]234[.]243:39147/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]109[.]53"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1621,
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
                "count": 1416,
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
                "count": 1396,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"62[.]76[.]229[.]102:56782\"",
                    " \"enterprise1[.]pages[.]dev\"",
                    " \"endpoint[.]xsn10[.]com\""
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
                "count": 686,
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
                "count": 558,
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
                "count": 536,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zexrhdz[.]penaltibazi[.]com\"",
                    " \"!k![.]persianshart[.]com\"",
                    " \"persianshart[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43455,
        "lastCalculated": "2026-06-09 02:10 IST"
    }
};
