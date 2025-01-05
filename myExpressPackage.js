// we installed third party package "express" using following npm command "npm install express" 
// we can confirm its installation in package.json file

const express = require("express");
const app = express();

app.get("", (req, res) => {             // create home route api
    res.send("<center><h2>This is Home Page created by Sbz.</h2></center>");
});

app.get("/about", (req, res) => {       // create about route api
    res.send("<center><h2>This is About Page created by Sbz.</h2></center>");
});

app.get("/help", (req, res) => {        // create help route api
    res.send("<center><h2>This is Help Page create by Sbz.</h2></center>");
});

app.listen(5000);           // server listen request from client on port no. 5000