// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-15T09:56:11.407290+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-15T09:56:11.001117+05:30",
    "lastUpdatedFormatted": "Oct 15, 2026 at 09:56 AM IST",
    "comparisonPeriod": "Oct 14 \u2013 Oct 15, 2026",
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
                "hxxp://help[.]steampowered[.]com[.]im/en/wizard/HelpRequest/HT-E8JJ-I6WP-QJ2C/",
                "hxxp://humectaseis[.]com[.]tr/goodheads/?uid=lanorlab@7766aac2c14dbab8aff1bc5bb92fcb994793[.]net",
                "hxxp://start-en-ledger-e-n[.]typedream[.]app/",
                "hxxp://learn-liveledger-eng[.]typedream[.]app/",
                "hxxp://kuucioinlogin[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1254,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1254,
                "newInLastHour": 89,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9cd6656e9d40aa6c49c0fa7918837e807676d91c99727f9ad710d99c85b5b5c6",
                " \"4ea545bd4a77d715f0d67c223165b8558c413215300dd3c7704aa0b5d99e0cae",
                " \"e631961754aecfab4c11d53b72cf6782d140ac342a229dbbe697b18139693550",
                " \"3b38f182ae0012adbda7d6f396fa9c0265d0c8f6825ee13314e74397c21259f5",
                " \"5c5f5243923df0f7d0df186aea5e57a0afe61974d3b5661581658b041fc25985"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
                "newInLastHour": 39,
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
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192",
                "1[.]193[.]58[.]33",
                "1[.]215[.]138[.]43",
                "1[.]215[.]43[.]201"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4081,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4081,
                "newInLastHour": 4081,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]178[.]138[.]99",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33785,
                "newInLastHour": 33785,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]226[.]4:57201/bin[.]sh",
                "hxxp://203[.]204[.]246[.]77:54733/i",
                "hxxp://120[.]28[.]194[.]30:34491/i",
                "hxxp://123[.]129[.]152[.]49:42069/i",
                "hxxp://222[.]141[.]36[.]15:51354/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8164,
                "newInLastHour": 7604,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://jx[.]78royal[.]org/eb9\"",
                " \"hxxps://jx[.]78royal[.]org/xj0\"",
                " \"fehiwy[.]workers[.]dev\"",
                " \"hxxps://jx[.]78royal[.]org/mt\"",
                " \"hxxps://jx[.]78royal[.]org/mt/\""
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
            "iocCount": 10952,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10952,
                "newInLastHour": 125,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 71408,
            "activeSources": 8,
            "criticalAlerts": 46204,
            "activeCampaigns": 286
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35381,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10823,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 6418,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 0
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
                "count": 34119,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]54[.]43[.]105:55256/i",
                    "hxxp://175[.]165[.]84[.]140:60779/i",
                    "hxxp://62[.]60[.]226[.]140/files/7299809293/dfXHgmX[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]183[.]41[.]171",
                    "1[.]192[.]129[.]106",
                    "1[.]192[.]216[.]192"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 2064,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://t9[.]77tuna[.]org/d1\"",
                    " \"hxxps://t9[.]77tuna[.]org/hf\"",
                    " \"hxxps://t9[.]77tuna[.]org/a/\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1642,
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
                "count": 1456,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1287,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"124[.]221[.]141[.]180:123\"",
                    " \"124[.]221[.]141[.]180:8082\"",
                    " \"124[.]221[.]141[.]180:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 803,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09545cca9c36c76f4982c4b648041a1606799b53",
                    "d333c0b7e380afd2f156555b8110c00177b62e5d",
                    "c389945d4fc75250b291953e0abad0662dd9ce7d"
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
                "count": 714,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 638,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]139[.]104[.]222:49001\"",
                    " \"40[.]223[.]85[.]181:443\"",
                    " \"40[.]223[.]85[.]181:56002\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 61028,
        "lastCalculated": "2026-10-15 09:56 IST"
    }
};
