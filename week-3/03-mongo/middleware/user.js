const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const { username, password } = req.headers;

    User.findOne({ username: username, password: password }).then(data => {
        if (data) next();
        else {
            res.status(403).send("User not found");
        }
    })
}

module.exports = userMiddleware;