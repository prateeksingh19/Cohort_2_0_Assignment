const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;

    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
        return res.status(400).json({ "msg": "User already exists" })
    }
    const user = new User({ username: username, password: password });
    user.save();
    res.status(200).json({ "msg": "User created successfully" })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const { username, password } = req.headers;

    const response = await Course.find({});

    res.json({
        courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { username, password } = req.headers;
    const courseId = req.params.courseId

    await User.updateOne(
        { username: username }, 
        { $push: { purchasedCourses: courseId }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username, password } = req.headers;

    const user = await User.findOne({ username: username, password: password }).populate('purchasedCourses');

    const purchasedCourses = await Course.find({
        _id: { $in: user.purchasedCourses }
    });
    
    res.json({
        courses: purchasedCourses
    })
});

module.exports = router