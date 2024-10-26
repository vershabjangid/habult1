let mongoose = require('mongoose')



let investorregister = mongoose.Schema({
    AadharCard: {
        type: String,
        required: true
    },
    AccountNumber: {
        type: Number,
        required: true,
        unique: true
    },
    Address: {
        type: String,
        required: true
    },
    All_Instructions: {
        type: Boolean,
        required: true
    },
    BankName: {
        type: String,
        required: true
    },
    BankProof: {
        type: String,
        required: true
    },
    Company_Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    IFSC_Code: {
        type: String,
        required: true
    },
    Join_as: {
        type: String,
        required: true
    },
    Pan: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    Activestatus: {
        type: String,
        required: true
    },
    TermsAndConditions: {
        type: Boolean,
        required: true
    },
    ReferredBy: {
        type: String
    },
})

let investorregistermodel = mongoose.model('new-investors', investorregister)
module.exports = investorregistermodel
