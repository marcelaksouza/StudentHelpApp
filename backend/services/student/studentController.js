const Student = require('../../models/studentModel');
const ResponseHandler = require('../../shared/helpers/responseHandler');

const getAllStudents = (req, res) => {
    Student.find({}).exec((err, data) => {
        if (err) {
        ResponseHandler.errorHandling(err, res)
        }
      ResponseHandler.successMessage(data, res);
  });
};

const createStudent = (req, res, next) => {
    Student.create(req.body)
    .then((data) => {
      ResponseHandler.successMessage(data, res);
    })
    .catch(next);
  };

  const getOneStudent = (req, res) => {
    Student.findById(req.params.studentID, (err, data) => {
      if (err) {
        ResponseHandler.errorHandling(err, res);
        }
      ResponseHandler.successMessage(data, res);
    });
  };

  const updateStudent = (req, res) => {
    Student.findOneAndUpdate(
        {_id: req.params.studentID},
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

  const deleteStudent = (req, res) => {
    Student.deleteOne({ _id: req.params.studentID }, (err) => {
     if (err) {
       res.status(404).send(err);
     }
     res.status(200).json({ message: "Student was successfully deleted!" });
   });
 };

module.exports = {
    getAllStudents,
    createStudent,
    getOneStudent,
    updateStudent,
    deleteStudent
};
