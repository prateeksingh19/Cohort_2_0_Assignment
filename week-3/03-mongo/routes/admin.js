const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username: username });

    if (existingAdmin) {
        return res.status(400).json({ "msg": "Admin already exists" })
    }
    const admin = new Admin({ username: username, password: password });
    admin.save();
    res.status(200).json({ "msg": "Admin created successfully" })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const { username, password } = req.headers;
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    const existingCourse = await Course.findOne({ title: title });
    if (existingCourse) {
        return res.status(400).json({ "msg": "Course already exists" })
    }

    const course = new Course({ title: title, description: description, price: price, imageLink: imageLink });
    course.save();
    res.status(200).json({
        message: 'Course created successfully', courseId: course._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const { username, password } = req.headers;

    const response = await Course.find({});

    res.json({
        courses: response
    })
});

module.exports = router;