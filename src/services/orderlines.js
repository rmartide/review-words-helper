const fs = require('fs');
const path = require('path');
fs.readFile(path.resolve(__dirname,'./data.txt'),'utf8', (err, data) => {
    const lines = data.split('\n');
    console.log(lines.sort().join('\n'));
});