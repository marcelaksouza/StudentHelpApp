const mongoose = require ("mongoose");

const bookingSchema = new mongoose.Schema({
    course:{
        type: String
    },
    date:{
        type: Date
    },
    location:{
        type: String
    },
    instructor : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
    },
    student : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    status : {
        type : String,
        enum : ['active', 'disabled', 'completed'],
        default: "active"
    }

});

module.exports = mongoose.model("Booking", bookingSchema);
