let mongoose = require('mongoose')

let teamschema = mongoose.Schema({
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
    Profile_Id: {
        type: String,
        required: true,
        unique: true
    }
})


let teammodal = mongoose.model('team', teamschema)
module.exports = teammodal;