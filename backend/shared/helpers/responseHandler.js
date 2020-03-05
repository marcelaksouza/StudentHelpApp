
function successMessage (obj, res) {
    res.status(200).json(obj);
}

function errorHandling (err,req, res, next) {
    res.status(500).send(err.message);
}

module.exports.successMessage = successMessage;
module.exports.errorHandling = errorHandling;