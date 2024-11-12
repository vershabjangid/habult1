let mongoose = require('mongoose')


let addteamschema = mongoose.Schema({
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Aadhar_Card: {
        type: String,
        required: true
    },
    Pan_Card: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Bank_Name: {
        type: String,
        required: true
    },
    Account_Number: {
        type: Number,
        required: true
    },
    IFSC_Code: {
        type: String,
        required: true
    },
    Bank_Proof: {
        type: String,
        required: true
    }
})


let addteammodel = mongoose.model('team', addteamschema);
module.exports = addteammodel