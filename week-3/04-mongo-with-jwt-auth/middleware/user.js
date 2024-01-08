const jwt = require("jsonwebtoken");
const config = require('../config');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const authHeader = req.headers.authorization;
    const tokenArray = authHeader.split(' ');
    const token = tokenArray[1]
    try{
        const decoded = jwt.verify(token, config.jwtSecret);
        if(decoded.username) {
            req.username = decoded.username
            next();
        }
        else{
            res.status(403).send("You're not authorized")
        }
    }
    catch(err){
        res.status(400).send("Wrong Input")
    }

}

module.exports = userMiddleware;