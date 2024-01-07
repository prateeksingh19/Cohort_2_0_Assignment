const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:Xbc5E68j83YDfy*q@prateek.cffizos.mongodb.net/course_website?authSource=admin&replicaSet=atlas-10nn4q-shard-0&readPreference=primary&ssl=true');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String
    // Schema definition here
});

const UserSchema = new mongoose.Schema({
    username : String,
    password : String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
    // Schema definition here
});

const CourseSchema = new mongoose.Schema({
    title : String,
    description : String,
    imageLink: String,
    price : Number
    // Schema definition here
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}