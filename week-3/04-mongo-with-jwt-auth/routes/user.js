const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const config = require('../config');
const { Admin, User, Course } = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username: username });
    if (existingUser) { return res.status(400).json({ "msg": "User already exists" }) }
    const newUser = new User({ username: username, password: password });
    newUser.save();
    res.status(200).json({ "msg": "User created successfully" })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const user = await User.find({ username, password })
    if(user) {
        const token = jwt.sign( {username}, config.jwtSecret)
        res.status(200).json({ "token": token });
    }
    else {
        res.status(411).json({ message: "Wrong Credentials" })
    }
})

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId
    const username = req.username
    const user = await User.findOne({ username: username });

    if (user.purchasedCourses.includes(courseId)) {
        return res.status(400).json({ "msg": "Course already purchased by the user" });
    }
    await User.updateOne(
        { username: username },
        {
            $push: { purchasedCourses: courseId }
        })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username
    const user = await User.findOne({ username: username}).populate('purchasedCourses');

    const purchasedCourses = await Course.find({
        _id: { $in: user.purchasedCourses }
    });
    
    res.json({
        courses: purchasedCourses
    })
});

module.exports = router