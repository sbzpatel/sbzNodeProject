// console.log("current directory path");
// console.log(__dirname);
// console.log("current directory path");
const colors = require("colors");

const fs = require("fs");
const path = require("path");
const targetPath = path.join(__dirname, "files");
console.log(targetPath);

fs.writeFileSync(targetPath+"/demo3.txt", "Its a demo3 file created through code.");
// fs.writeFileSync("demo.txt", "Its a demo file on root directory.");

fs.readdir(targetPath, (err, files) => {
    console.log("file names in 'files'".bgCyan);
    files.forEach((item) => {
        console.log(item);
    })
});