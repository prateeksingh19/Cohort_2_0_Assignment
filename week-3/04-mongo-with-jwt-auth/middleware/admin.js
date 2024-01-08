// Middleware for handling auth
const jwt = require("jsonwebtoken");
const config = require('../config');

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization;
    const tokenArray = authHeader.split(' ');
    const token = tokenArray[1]
    try{
        const decoded = jwt.verify(token, config.jwtSecret);
        if(decoded.username) return next()
        else{
            res.status(403).send("You're not authorized")
        }
    }
    catch(err){
        res.status(400).send("Wrong Input")
    }
}

module.exports = adminMiddleware;