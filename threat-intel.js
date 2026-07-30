// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-30T08:48:20.027407+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-30T08:48:19.673466+05:30",
    "lastUpdatedFormatted": "Jul 30, 2026 at 08:48 AM IST",
    "comparisonPeriod": "Jul 29 \u2013 Jul 30, 2026",
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
                "hxxps://netzeroupdateterms9[.]weebly[.]com/",
                "hxxps://ew4rt[.]weebly[.]com/",
                "hxxps://jengbetieleajantiele[.]weebly[.]com/",
                "hxxps://webmail-pieas-edu-pk[.]weebly[.]com/",
                "hxxps://sp5ct-fanik-biz8-hurem-lovex[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1021,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1021,
                "newInLastHour": 43,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"55f0132ba99eaf397afb997f26900c6ae6c9c797f2dd99da5423c33f549b5afe",
                " \"edd25cef88fe2c1bd562e33f9403c1644f09f80ce10690f1337e7b295357d751",
                " \"22eec70bf4412de64eb3ac2aaf1991a7e1ca197f8ec37339fa549e0037908e85",
                " \"1bef2e01e1f4aad8becdec1dc5f525dedd83567f9fecfe51f6c8ac9efdfc0b8e",
                " \"2a01a22a5d823b5705dad1f7de5d15ebf9068347099726b95878aeaf9de9b625"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
                "newInLastHour": 1,
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
                "1[.]10[.]185[.]51",
                "1[.]12[.]65[.]23",
                "1[.]15[.]82[.]219",
                "1[.]159[.]48[.]69",
                "1[.]183[.]148[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9448,
                "newInLastHour": 9448,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]103[.]109",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15275,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15275,
                "newInLastHour": 15275,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://95[.]155[.]151[.]113/d/xd[.]spc",
                "hxxp://95[.]155[.]151[.]113/d/xd[.]mpsl",
                "hxxp://95[.]155[.]151[.]113/d/xd[.]ppc",
                "hxxp://95[.]155[.]151[.]113/d/xd[.]mips",
                "hxxp://95[.]155[.]151[.]113/d/xd[.]arm6"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5512,
                "newInLastHour": 4949,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]221[.]118[.]69:3232\"",
                " \"8[.]218[.]120[.]126:3232\"",
                " \"qbywphal[.]liberty-token[.]org\"",
                " \"udofiy[.]salpizzasewell[.]com\"",
                " \"salpizzasewell[.]com\""
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
            "iocCount": 10267,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10267,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b260881d660a14c3c0b2e61a6685839c8053bc9",
                "11a9b0c571e681f4f9e7780e3aff1fe8c2f3d676",
                "e15c7bdeb747a9fff47c514a10229a2a59d1157d",
                "283042355c89f2c59e260246d1488a73a8bef7b2",
                "e6cc4eebe2d73c7174be4be73bc00d4642122ac4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49557,
            "activeSources": 8,
            "criticalAlerts": 27041,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16797,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10244,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3579,
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
                "count": 15747,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://129[.]121[.]110[.]105/ya4",
                    "hxxp://105[.]224[.]29[.]237:48127/bin[.]sh",
                    "hxxp://129[.]121[.]110[.]105/y1V"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]12[.]229[.]231",
                    "1[.]12[.]65[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1665,
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
                "count": 1433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1354,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]193[.]150[.]74:80\"",
                    " \"103[.]193[.]150[.]74:8080\"",
                    " \"103[.]193[.]150[.]74:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 827,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rushpdf[.]com\"",
                    " \"seitorri[.]it\"",
                    " \"site[.]bz\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 738,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]86[.]90[.]64:22\"",
                    " \"172[.]86[.]90[.]64:8080\"",
                    " \"172[.]86[.]90[.]64:80\""
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
                "count": 656,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "45bbc5ebc131cca9663c35c95459564007049d07",
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.stealc\"",
        "totalAttacksThisHour": 45022,
        "lastCalculated": "2026-07-30 08:48 IST"
    }
};
