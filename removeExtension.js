const express = require("express");
const app = express();
const path = require("path");

const publicPath = path.join(__dirname, "public");

app.get("", (_, res) => {
    res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, res) => {
    res.sendFile(`${publicPath}/about.html`);
});

app.get("/contact", (_, res) => {
    res.sendFile(`${publicPath}/contact.html`);
});

app.get("/help", (_, res) => {
    res.sendFile(`${publicPath}/help.html`);
});

app.listen("4444");