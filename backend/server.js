require('dotenv').config()

const express = require ('express')
const app = express()
const morgan = require ('morgan')
const bodyParser = require('body-parser')

const Student = require ('./routes/studentRoutes')
const ErrorHandling = require('./shared/helpers/responseHandler')

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/api', Student);
app.use(ErrorHandling.errorHandling);

//listen for requests
app.listen(process.env.port || 4000, function(){
    console.log("now listening for request at port " + process.env.port || 4000);
});