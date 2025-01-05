module.exports = ageMiddleware = (req, res, next) => {
    if(!req.query.age) {
        res.send("Age is mandatory to send.");
    } else {
        next();
    }
}