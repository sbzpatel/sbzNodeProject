const express = require("express");

const app = express();

const router = new express.Router();

router.get("/sbz",(req, res) => {
    res.send("<center><h1>Welcome to Sbz Special Page</h1></center>");
});

app.use(router);

app.get("/", (req, res) => {
    res.send("<center><h1>Welcome to Home Page</h1></center>");
});

app.listen(8000);