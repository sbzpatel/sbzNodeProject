const express = require("express");
const app = express();

app.get("", (req, res) => {
    console.log(`data sent through browser ->> ${req.query.name}`);
    res.send(`Welcome, ${req.query.name}`)
});

app.listen(4000);