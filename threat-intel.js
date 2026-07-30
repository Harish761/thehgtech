// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-30T16:02:23.449929+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-30T16:02:23.105134+05:30",
    "lastUpdatedFormatted": "Jul 30, 2026 at 04:02 PM IST",
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
            "iocCount": 885,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 885,
                "newInLastHour": 55,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"818611f2320836348f3131b2cd32c89e57dab006be54b0d29b90d58a0f3b693d",
                " \"a6b08f633ad63cbe5f98abb2269cdecdd85c7c93255ee784f14e871af33d7d35",
                " \"8c6c9763aa586346c2a5a29401d319ef45b737cd4d87c8f786ebc0086ba0ad1f",
                " \"92f561bba06e4312bc4ab1e981bc0e63a492bc31119320a59f2e751341ee0ac2",
                " \"2baf29bfe608d86ebe253729c380fcc533b18fee19db778c63179340289979e5"
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
                "newInLastHour": 56,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]82[.]219",
                "1[.]159[.]48[.]69",
                "1[.]172[.]239[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9414,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9414,
                "newInLastHour": 9414,
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
            "iocCount": 15382,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15382,
                "newInLastHour": 15382,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]14[.]85[.]100:42355/bin[.]sh",
                "hxxp://113[.]230[.]197[.]154:40757/bin[.]sh",
                "hxxp://110[.]37[.]90[.]59:50937/i",
                "hxxp://123[.]9[.]220[.]15:51815/bin[.]sh",
                "hxxp://42[.]226[.]71[.]247:52557/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6227,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6227,
                "newInLastHour": 5484,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shlwsw[.]stmariapharmacy[.]com\"",
                " \"stmariapharmacy[.]com\"",
                " \"47[.]107[.]122[.]241:30010\"",
                " \"118[.]31[.]18[.]77:25\"",
                " \"nbcfchw[.]tamajailroster[.]org\""
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
            "iocCount": 10225,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10225,
                "newInLastHour": 18,
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
            "totalIndicators": 48955,
            "activeSources": 8,
            "criticalAlerts": 26565,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16338,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10227,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3549,
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
                "count": 15305,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]40[.]8/real[.]bot",
                    "hxxp://123[.]5[.]8[.]154:53588/i",
                    "hxxp://115[.]48[.]151[.]195:47978/i"
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
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]65[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1610,
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
                "count": 1429,
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
                "count": 1349,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"118[.]31[.]18[.]77:22\"",
                    " \"45[.]87[.]53[.]6:8889\"",
                    " \"45[.]87[.]53[.]6:8892\""
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
                "name": " \"unknown\"",
                "count": 713,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"vmi3474446[.]contaboserver[.]net\"",
                    " \"hxxp://104[.]234[.]200[.]205:8181/api/reenvio/webhook/status/cliente\"",
                    " \"hxxp://104[.]234[.]200[.]205:8181/api/reenvio/rate-limit?email=config\""
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
                "count": 649,
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
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 45714,
        "lastCalculated": "2026-07-30 16:02 IST"
    }
};
