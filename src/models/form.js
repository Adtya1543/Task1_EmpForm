const mongoose = require("mongoose");

const employeeSchema =  new mongoose.Schema({
    fullname : {
        type: String
        // required: true
    },
    gender: {
        type: String
    },
    emailAddress : {
        type: String
        // required: true,
        // unique: true
    },
    phoneNumber : {
        type: Number
        // required: true,
        // unique: true
    },
    permanentaddress :{
        type: String
    },
    currentAddress :{
        type: String
    },
    dateOfJoining : {
        type: Number
    },
    jobTitle : {
        type:String
        // required: true
    },
    department : {
        type:String
        // required: true
    },
    salary : {
        type:Number
    },
    //photo upload?
    aadharNumber : {
        type: Number
    },
    panNumber : {
        type: String,
        // required: true 
    },
    experience : {
        type: Number
        // required: true
    }
});

const Form = new mongoose.model("Form",employeeSchema);

// data = {
// //     name : "adi"
// // }
// // Form.insertMany([data])
// the commented code up is to  test data is visible or not 

module.exports = Form;
