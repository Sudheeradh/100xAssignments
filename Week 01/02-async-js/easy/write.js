const fs = require('fs');

fs.writeFile('out.txt', "Hello There, this file is output from js", (err) => console.log(err));