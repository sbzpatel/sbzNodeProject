const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send(`
        <center>
            <h1>Welcome to Home Page</h1>
            <button><a href="/contact" />Go to Contact Page</a></button>
            <br><br>
            <button><a href="/help" />Go to Help Page</a></button>
        </center>
    `);
})

app.get("/contact", (req, res) => {
    var userName;
    if(req.query.name !== undefined) {
        userName = req.query.name;
    } else {
        userName = "";
    }
    
    res.send(`
        <center>
            <h1>Hello, Welcome to Organization's Contact Page</h1>
            <input type="text" placeholder="Enter your name" value="${userName}" />
            <button>Submit</button>
            <br><br>
            <a href="/">Go to Home Page</a>
        </center>
    `);
});

app.get("/help", (req, res) => {
    res.send({
        firstName: "Shahbaz",
        lastName: "Patel",
        age: "35",
        qualification: "BE.IT",
        city: "Pune"
    })
})

app.listen("4001");