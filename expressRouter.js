const express = require("express");

const app = express();

const router = new express.Router();

app.use(router);

const ageMiddleware = require("./middleware");

router.get("/sbz", ageMiddleware, (req, res) => {
    res.send("<center><h1>Welcome to Sbz Special Page</h1></center>");
});

app.get("/", (req, res) => {
    res.send("<center><h1>Welcome to Home Page</h1></center>");
});

app.listen(8000);