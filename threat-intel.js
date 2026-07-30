// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-30T23:13:09.351287+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-30T23:13:08.988709+05:30",
    "lastUpdatedFormatted": "Jul 30, 2026 at 11:13 PM IST",
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
                "hxxps://10thys5jkoo3[.]swjaxonfivs[.]xyz/AovqSjpi3Ulk7CYcAWp8",
                "hxxps://10thys5jkoo3[.]swjaxonfivs[.]xyz/btskdLHZ2fUNYQEqrE2Y",
                "hxxps://10thys5jkoo3[.]swjaxonfivs[.]xyz/bP9Kx8i9QJ2N1VRGA3h3",
                "hxxps://10thys5jkoo3[.]swjaxonfivs[.]xyz/OklYRQr9Apt3vgPnndsJ",
                "hxxps://10thys5jkoo3[.]swjaxonfivs[.]xyz/AoZGilqxMRIw0zjiXa88"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 815,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 815,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"52e89502b66794eb4148aed84011a23352deb7bd9188987e69ba7f567dff923c",
                " \"5e58a0e0b4ab711349370567728293cf6e732870aa9ea9def6ae5b59ca7322c3",
                " \"25ec53399232a6fd978e3d85ce0d5a9e987c933fadace4ab638f290acd00fd04",
                " \"537dea2679e48b347b6bc905d2eb17b4dde6855cf82bcea4ec5486f2c221346f",
                " \"fd9dec7ac8b45ddebec3fa88dfa1758afedcbe530d1a824c3857fc77fe3ffd69"
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
                "newInLastHour": 19,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]82[.]219",
                "1[.]159[.]48[.]69"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9382,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9382,
                "newInLastHour": 9382,
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
            "iocCount": 15547,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15547,
                "newInLastHour": 15547,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]15[.]185[.]32:52527/i",
                "hxxp://200[.]115[.]102[.]246:33509/bin[.]sh",
                "hxxp://196[.]189[.]3[.]1:43690/bin[.]sh",
                "hxxp://190[.]109[.]227[.]219:37896/i",
                "hxxp://123[.]11[.]2[.]81:35325/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6275,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6275,
                "newInLastHour": 5417,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mfjxrzj[.]trapdoortattoos[.]com\"",
                " \"xk0ffmw0[.]ecryptobits[.]com\"",
                " \"trapdoortattoos[.]com\"",
                " \"iuibcp[.]theothersidepb[.]com\"",
                " \"theothersidepb[.]com\""
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
            "iocCount": 10269,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10269,
                "newInLastHour": 145,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "16fbb45457a2d8e67c556db46e051893917e2104",
                "1727143583fd38bc4b6b5986f5c7b2c919f885af",
                "0b260881d660a14c3c0b2e61a6685839c8053bc9",
                "11a9b0c571e681f4f9e7780e3aff1fe8c2f3d676",
                "e15c7bdeb747a9fff47c514a10229a2a59d1157d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49835,
            "activeSources": 8,
            "criticalAlerts": 26537,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16435,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10102,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3765,
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
                "count": 15529,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://75[.]1[.]240[.]64:39075/i",
                    "hxxp://110[.]37[.]42[.]21:55960/i",
                    "hxxp://105[.]184[.]45[.]109:34559/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]3[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1647,
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
                "count": 1421,
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
                "name": " \"js.iclickfix\"",
                "count": 1380,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zewaplus[.]club\"",
                    " \"telemetryworks[.]pro\"",
                    " \"burunduktracker[.]xyz\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1347,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]172[.]199[.]28:80\"",
                    " \"107[.]172[.]199[.]28:8080\"",
                    " \"107[.]172[.]199[.]28:443\""
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
                "count": 695,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"117[.]72[.]72[.]254:995\"",
                    " \"199[.]30[.]90[.]240:60000\"",
                    " \"2c36a2a36a747ee8e1393724c2558b14\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 683,
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
                "count": 624,
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
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 45867,
        "lastCalculated": "2026-07-30 23:13 IST"
    }
};
