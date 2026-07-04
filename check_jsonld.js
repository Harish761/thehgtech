const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
blocks.forEach((b, i) => {
    try {
        JSON.parse(b[1]);
    } catch (e) {
        console.log(`JSON ERROR in block ${i}: ${e.message}`);
    }
});
