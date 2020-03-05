const mongoose = require ("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type: String
    },
    course:{
        type: String
    },
    email: {
        type: String
    },
    password:{
        type: String
    },
    type: {
        type: String,
        enum : ['student', 'instructor'],
        required: true
    }

});

module.exports = mongoose.model("Student", studentSchema);
