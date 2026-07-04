const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html', 'utf8');
const scripts = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)];
let errCount = 0;
scripts.forEach((b, i) => {
    const code = b[1].trim();
    if (code) {
        if (b[0].includes('application/ld+json')) return; // ignore JSON
        try {
            new vm.Script(code);
        } catch (e) {
            console.log(`--- SYNTAX ERROR IN SCRIPT BLOCK ${i} ---`);
            console.log(e.message);
            console.log(code.substring(0, 150));
            errCount++;
        }
    }
});
console.log(`Total errors: ${errCount}`);
