const fs = require('fs');

const inputFile = 'input.txt' // Change to desired input file here

function clean(err, data) {
    console.log(data);
    data = data.replace(/\s+/g,' ').trim();
    console.log(data);
    fs.writeFile(inputFile, data, (err) => console.log(err));
}

fs.readFile(inputFile, 'utf8', clean);