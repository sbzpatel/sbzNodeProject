const express = require("express");
const app = express();

const ageMiddleware = require("./middleware");

app.get("/", (req, res) => {
    res.send("Welcome to home page sbz!!!");
});

app.get("/about", (req, res) => {
    res.send("Welcome to about page sbz!!!");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to contact page sbz!!!");
});

app.get("/users", ageMiddleware, (req, res) => {
    res.send("Welcome to user page sbz!!!");
});

app.listen(5000);