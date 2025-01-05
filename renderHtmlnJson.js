const express = require("express");
const app = express();

app.get("", (req, res) => {
    res.send(`
        <center>
            <h1>Welcome to Home Page</h1>
            <a href="/contact" />Go to Contact Page</a><br>
            <a href="/help" />Go to Help Page</a>
        </center>
    `);
})

app.get("/contact", (req, res) => {
    res.send(`
        <center>
            <h1>Hello, Welcome to Organization's Contact Page</h1>
            <input type="text" placeholder="Enter your name" />
            <button>Submit</button>
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

app.listen("3999");