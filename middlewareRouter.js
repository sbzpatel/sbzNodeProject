const express = require("express");
const app = express();

const ageMiddleware = require("./middleware");

const route = express.Router();

route.use(ageMiddleware);

app.get("/", (req, res) => {
    res.send("Welcome to home page sbz!!!");
});

route.get("/about", (req, res) => {
    res.send("Welcome to about page sbz!!!");
});

route.get("/contact", (req, res) => {
    res.send("Welcome to contact page sbz!!!");
});

app.get("/users", (req, res) => {
    res.send("Welcome to user page sbz!!!");
});

app.use("/", route);

app.listen(5000);