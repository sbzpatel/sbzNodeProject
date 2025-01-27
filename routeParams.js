const express = require("express");
const app = express();

app.get("", (req, res) => {
    console.log(`data sent through browser ->> ${req.query.name}`);
    res.send(`Welcome, ${req.query.name}`)
});

app.get("/help/:username", (req, res) => {
    console.log(req.params.username);
    res.send(`Hi ${req.params.username}`);
});

app.listen(4000);