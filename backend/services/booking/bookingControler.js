const Booking = require('../../models/bookingModel');
const ResponseHandler = require('../../shared/helpers/responseHandler');

const getAllBooking = (req, res) => {
    Booking.find({}).exec((err, data) => {
        if (err) {
        ResponseHandler.errorHandling(err, res)
        }
      ResponseHandler.successMessage(data, res);
  });
};

const createBooking = (req, res, next) => {
    let booking = JSON.parse(event.body);
    booking.instructor = { _id: event.pathParameters.instructorID }
        Booking.create(booking)
        .then((data) => {
            ResponseHandler.successMessage(data, res);
        })
        .catch(next);
    };

  const getOneBooking = (req, res) => {
    Student.findById(req.params.bookingID, (err, data) => {
      if (err) {
        ResponseHandler.errorHandling(err, res);
        }
      ResponseHandler.successMessage(data, res);
    });
  };

  const updateBooking = (req, res) => {
    Student.findOneAndUpdate(
        {_id: req.params.bookingID},
        req.body,
        {new: true},
        (err, data) => {
          if (err) {
            ResponseHandler.errorHandling(err, res);
            }
          ResponseHandler.successMessage(data, res);
      }
    );
  };

  const deleteBooking = (req, res) => {
    Student.deleteOne({ _id: req.params.bookingID }, (err) => {
     if (err) {
       res.status(404).send(err);
     }
     res.status(200).json({ message: "Student was successfully deleted!" });
   });
 };

module.exports = {
    getAllBooking,
    createBooking,
    getOneBooking,
    updateBooking,
    deleteBooking
    
};
