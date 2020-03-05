const express = require ("express");
const router = express.Router();
const BookingController = require('../services/booking/bookingControler');

require('../shared/db');

router
.route("/booking")
.get(BookingController.getAllBookings);

router
.route("/booking/:instructorID")
.post(BookingController.createBooking);

router
.route("/booking/:bookingID")
.get(BookingController.getOneBooking)
.put(BookingController.updateBooking)
.delete(BookingController.deleteBooking);

router.get('/test', (req, res)=>{
    res.send('test route');
}); 

module.exports = router;