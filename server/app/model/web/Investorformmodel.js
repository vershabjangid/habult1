let mongoose = require('mongoose')


let investorformschema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    Status: {
        type: String,
        required: true
    },
    AadhaarCard: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    PanCard: {
        type: String,
        required: true
    },
    Bank_Name: {
        type: String,
        required: true
    },
    Account_Number: {
        type: String,
        required: true,
    },
    IFSC_Code: {
        type: String,
        required: true
    },
    Bank_Proof: {
        type: String,
        required: true
    },
   
})


let investorformmodel = mongoose.model('investors', investorformschema)
module.exports = investorformmodel;