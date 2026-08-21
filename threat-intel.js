// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-21T14:22:50.823058+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-21T14:22:50.471253+05:30",
    "lastUpdatedFormatted": "Aug 21, 2026 at 02:22 PM IST",
    "comparisonPeriod": "Aug 20 \u2013 Aug 21, 2026",
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
                "hxxp://swisborrgloginmain[.]webflow[.]io/",
                "hxxp://verifysecurenow[.]weebly[.]com/",
                "hxxps://s4w[.]in/www-roblox-com-users-365698823823-profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/365698823824/profile",
                "hxxps://movie875[.]shop/buy/register[.]php?ref&#61"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1035,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"745c3cc7991b9ee62980a0bdda7b10cd708d4f8fc481c2e80bc41480d3644c94",
                " \"a099ea2c5299453ba8452473d419e6f5111ce776d75c0ac32bab4cf83187be47",
                " \"806f226d65cd883f71504ed0cd9f7e4b0dbf837d1fdd3688c82a7a53e66c2bf0",
                " \"d8f6b9977ab470c82487a0f40a2da62870e017bd11617689f455e7aa230db567",
                " \"c65ef7d6aa1e577d54d92d00906d3583c28957bb6c102d984a0377cfbca20143"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1679,
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
                "1[.]119[.]158[.]77",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]177[.]162[.]2",
                "1[.]180[.]190[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5025,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5025,
                "newInLastHour": 5025,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]222[.]205",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16469,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16469,
                "newInLastHour": 16469,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://kee126[.]com/vlc[.]zip",
                "hxxps://tmpfiles[.]org/dl/1787161037[.]c81e7dba2550050a/wXw6relOYfKE/msi_pro[.]png",
                "hxxp://27[.]152[.]10[.]88:45145/i",
                "hxxp://5[.]182[.]210[.]174/b87566",
                "hxxp://5[.]182[.]210[.]174/e7b8f7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5831,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5831,
                "newInLastHour": 5593,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://sii[.]11gokil[.]org/\"",
                " \"hxxps://zaf[.]11gokil[.]org/\"",
                " \"hxxps://tax[.]sm188dnsx[.]top/\"",
                " \"hxxps://sii[.]sm188dnsx[.]top/\"",
                " \"hxxps://zaf[.]sm188dnsx[.]top/\""
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
            "iocCount": 10296,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10296,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5b276d28106cb7d91dd5f810e61d9523d34c7804",
                "1cdb18c33da65a40adad7b51808edf66f3e180e5",
                "bf192adc3dcaba7412e15b567de22e3f3150bbf7",
                "ecae976f3eabcaad996e0a431d47bcead61dfb5e",
                "d962e722e22971c6b81f89befbbe949241b8c2ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51341,
            "activeSources": 8,
            "criticalAlerts": 27895,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17410,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10485,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4497,
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
                "count": 16377,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]186[.]163[.]117:50795/i",
                    "hxxp://105[.]186[.]163[.]117:50795/bin[.]sh",
                    "hxxp://78[.]25[.]157[.]124:39654/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]210[.]242"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1352,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]140[.]219[.]182:80\"",
                    " \"43[.]140[.]219[.]182:8080\"",
                    " \"43[.]140[.]219[.]182:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1152,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ksr-racingparts[.]com\"",
                    " \"yourcapital[.]co[.]za\"",
                    " \"zeilberger-hartl[.]de\""
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
                "name": "Vidar",
                "count": 726,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                    "732c7efa7d624c30b074e78df6595f54fde9188d",
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 601,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://rblxgivex[.]com/\"",
                    " \"rblxgivex[.]com\"",
                    " \"hxxps://apartments-review261634860[.]sbs/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42468,
        "lastCalculated": "2026-08-21 14:22 IST"
    }
};
