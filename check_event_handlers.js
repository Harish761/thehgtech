const fs = require('fs');
const vm = require('vm');
const html = fs.readFileSync('index.html', 'utf8');

const handlers = [...html.matchAll(/\bon[a-z]+=["']([^"']+)["']/gi)];
let errCount = 0;
handlers.forEach(h => {
    const code = h[1];
    try {
        new vm.Script(code);
    } catch (e) {
        console.log(`SYNTAX ERROR in handler: ${h[0]}`);
        errCount++;
    }
});
console.log(`Total handler errors: ${errCount}`);
