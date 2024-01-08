const { Router } = require("express");
const jwt = require("jsonwebtoken");
const config = require('../config');
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const existingAdmin = await Admin.findOne({ username: username });
    if (existingAdmin) { return res.status(400).json({ "msg": "Admin already exists" }) }
    const admin = new Admin({ username: username, password: password });
    admin.save();
    res.status(200).json({ "msg": "Admin created successfully" })
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;
    const admin = await Admin.find({ username, password })
    if(admin) {
        const token = jwt.sign( {username}, config.jwtSecret)
        res.status(200).json({ "token": token });
    }
    else {
        res.status(411).json({ message: "Wrong Credentials" })
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { title, description, price, imageLink} = req.body;
    const existingCourse = await Course.findOne({title : title});
    if(existingCourse) {
        return res.status(400).json({ "msg": "Course already exists" })
    }
    const newCourse = new Course({ title: title, description: description, price: price, imageLink: imageLink });
    newCourse.save();
    res.status(200).json({ msg: "Course created successfully", courseId: newCourse._id })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;