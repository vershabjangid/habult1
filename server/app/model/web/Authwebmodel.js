let mongoose = require('mongoose')

let webregister = mongoose.Schema({
    Join_as: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    Legal_Name: {
        type: String,
        required: true,
        unique: true
    },
    Business_Category: {
        type: String,
        required: true
    },
    Short_Bio: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Goal: {
        type: String,
        required: true
    },
    Raised: {
        type: String,
        required: true
    },
    Money_Valuation: {
        type: String,
        required: true
    },
    Equity: {
        type: String,
        required: true
    },
    Minimum_Investment: {
        type: String,
        required: true
    },
    AuthVerification: {
        type: String,
        required: true
    }
    // Logo: {
    //     type: String,
    //     required: true
    // },
    // Pancard: {
    //     type: String,
    //     required: true
    // }

})


let webregistermodel = mongoose.model('new_users', webregister)
module.exports = webregistermodel;