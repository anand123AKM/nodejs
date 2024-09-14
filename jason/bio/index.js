const fs = require("fs");
fs.writeFileSync("ourdata/readme.txt", "welcome here !!! guys");
fs.appendFileSync("ourdata/readme.txt", " how are you ");
const data = fs.readFileSync("ourdata/readme.txt", "utf-8");
console.log(data);

fs.renameSync("ourdata/readme.txt", "ourdata/bio.txt");
fs.unlinkSync("ourdata/bio.txt");
fs.rmdirSync("ourdata");
