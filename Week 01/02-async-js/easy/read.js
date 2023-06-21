const fs = require('fs')

fs.readFile('hi.txt', 'utf8', (err, data) => console.log(data));

console.log("I'm from .js file");
let sum = 0;
for (let i = 0; i < 1000000000; ++i) {
    sum += i;
}

