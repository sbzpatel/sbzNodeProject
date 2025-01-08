const fs = require("fs");   // fs is a non-global module, need to import to use it

console.log("Shahbaz Patel, Aurwad");   // "console" is a core module to display message on console

fs.writeFileSync("abc.txt", "Its a file created by fileSystem here....");  