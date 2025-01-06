const fs = require("fs");
const path = require("path");

const dirPath = path.join(__dirname, "files")
console.log(dirPath);
const fileName = `${dirPath}/sbz.txt`;

// fs.writeFileSync("sbz.txt", "It's a sbz file of great coder of the world!!!!!!");

fs.writeFileSync(fileName, "Its a sbz file created in files directory using node file system.");



// fs.readFile("sbz.txt", "utf-8", (err, fileContent) => {
//     console.log("file content: ", fileContent);
// });

fs.readFile(fileName, "utf-8", (err, fileContent) => {
    console.log("file content: ", fileContent);
});



// fs.appendFile("sbz.txt", " and its a appended portion of a file.", (err) => {
//     if(!err) { console.log("File updated successfully!!!!!"); }
// })

fs.appendFile(fileName, " and its a appended portion of a file.", (err) => {
    if(!err) { console.log("File updated successfully!!!!!"); }
})



// fs.rename("sbz.txt", "sbz1.txt", (err) => {
//     if(!err) console.log("file name is renamed.....");
// });

fs.rename(fileName, `${dirPath}/sbz1.txt`, (err) => {
    if(!err) console.log("file name is renamed.....");
});



// fs.unlinkSync("sbz1.txt");

fs.unlinkSync(`${dirPath}/sbz1.txt`);