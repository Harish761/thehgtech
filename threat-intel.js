// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-28T18:41:32.137039+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-28T18:41:31.863072+05:30",
    "lastUpdatedFormatted": "Jan 28, 2026 at 06:41 PM IST",
    "comparisonPeriod": "Jan 27 \u2013 Jan 28, 2026",
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
                "hxxps://www[.]roblox[.]com[.]ml/games/13379208636/Attack-on-Titan-Revolution?privateServerLinkCode=45013317294741455960286950777280",
                "hxxps://blog[.]aprovacaopge[.]com[.]br/wp-content/lblogin1/login[.]php",
                "hxxps://kutt[.]it/AwNgKc",
                "hxxps://habits-advantages-tall-mount[.]trycloudflare[.]com/login[.]html",
                "hxxps://roblox[.]ml/games/8737602449/PLS-DONATE?privateServerLinkCode=65193482370990265258791939394383"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 715,
                "newInLastHour": 50,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ccc4a15b30915c8666c93f7a4e19dbd4896c940029fa909291b8ddbcdb360433",
                " \"4409a082e2b18f4b19668b7311ee4a882c8bd76ddad7272b1f042d0e5f828e82",
                " \"1ad18510a84e31467097e7b04300a310f8aff3c0f10d284f6bf3ecbfcf131a11",
                " \"846a83e9ff9dda31d051dccfb17ac8c0866e7ff33851cca367ec5c7f99bb4ee7",
                " \"233d6f504b2556f774d9444b55ac240ba4c8a2d9279d443429e0075cfebfb5a0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1465,
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
                "1[.]10[.]247[.]178",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]95[.]172",
                "1[.]170[.]12[.]177"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6841,
                "newInLastHour": 6841,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]53[.]7",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]234[.]83[.]55",
                "1[.]246[.]14[.]161"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19343,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19343,
                "newInLastHour": 19343,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]230[.]94:47398/bin[.]sh",
                "hxxp://222[.]141[.]107[.]251:38670/bin[.]sh",
                "hxxp://117[.]212[.]62[.]62:44379/bin[.]sh",
                "hxxp://117[.]209[.]91[.]64:41094/bin[.]sh",
                "hxxp://110[.]37[.]27[.]164:49878/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 847,
                "newInLastHour": 602,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"83[.]147[.]18[.]16:8010\"",
                " \"64[.]95[.]11[.]52:8443\"",
                " \"193[.]112[.]177[.]149:80\"",
                " \"148[.]113[.]3[.]133:8443\"",
                " \"static[.]cos-tencent[.]cloud\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 6,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 6,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8795,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8326aaafe66ed1eea591add8d79944837a05fed0",
                "a62fef1ec215606dbf0d3774ebe3f2a6ade92b38",
                "766d70a8be35c01b55e056b94d95f091b9843c14",
                "d88300b35fc29445f29fa339d3b842305c562256",
                "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46405,
            "activeSources": 8,
            "criticalAlerts": 28831,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20038,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8793,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 515,
                "trend": "stable",
                "percentage": -3
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
                "count": 19253,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]233[.]107[.]34:34885/bin[.]sh",
                    "hxxp://123[.]5[.]150[.]52:46502/i",
                    "hxxp://110[.]37[.]39[.]234:41918/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]178",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1468,
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
                "count": 1375,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "76bc52f6b33ab0650dfdc050c5a15a227ce69ed0",
                    "e1eee0b991daeddda5eb790822cace341505480d",
                    "8262ac683ec151cc53cb28d382ab595a7cb5aa3c"
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
                "count": 609,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b0d85051fda8ae726a60c9ed332ee7cd8ffeab80",
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d"
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
            },
            {
                "name": "Malware",
                "count": 335,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b73dc00950e4a6e8c228abf884c937e895a35b96",
                    "8dbe1d838c3ca9cb0217813c4909cb4be9fa39db",
                    "57f2f129b4b92f8a5a9b673485771a148c5d6159"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42143,
        "lastCalculated": "2026-01-28 18:41 IST"
    }
};
