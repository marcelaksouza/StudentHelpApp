const express = require ("express");
const router = express.Router();
const studentController = require('../services/student/studentController');
require('../shared/db');

router
.route("/student")
.get(studentController.getAllStudents)
.post(studentController.createStudent);

router
.route("/student/:studentID")
.get(studentController.getOneStudent)
.put(studentController.updateStudent)
.delete(studentController.deleteStudent);

router.get('/test', (req, res)=>{
    res.send('test route');
}); 

module.exports = router;