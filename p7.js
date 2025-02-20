const fs = require('fs');

fs.mkdirSync("mydir", { recursive: true });

const data = "Viren Yadav";
fs.writeFileSync("./mydir/data.txt", data);

console.log("directory created and data written to file");
