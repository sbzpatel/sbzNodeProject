const express = require("express");
const app = express();

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Middleware defined $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    const reqFilter = (req, res, next) => {
        console.log("reqFilter(Middleware) calling...");

        if(!req.query.age) {
            res.send("Please provide age!!!!");
        } else if(req.query.age<18) {
            res.send("Age should greater than 18...");
        }
        else {
            next();
        }
    }
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Middleware defined $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Middleware use $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
    app.use(reqFilter);
// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ Middleware use $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
})

app.get("/users", (req, res) => {
    res.send("Welcome to User's Page");
})

app.listen(5000);