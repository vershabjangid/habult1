let mongoose = require('mongoose')



let investorregister = mongoose.Schema({
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
    Company_Name: {
        type: String,
        required: true,
        unique: true
    },
    Startup_Sector: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Logo: {
        type: String,
        required: true
    },
    Pan: {
        type: String,
        required: true
    },
    AadharCard: {
        type: String,
        required: true
    },
    BankDocuments: {
        type: String,
        required: true
    },
    Activestatus: {
        type: String,
        required: true
    },
    All_Instructions: {
        type: Boolean,
        required: true
    },
    TermsAndConditions: {
        type: Boolean,
        required: true
    },
    ReferredBy: {
        type: String,
        required: true
    },
})

let investorregistermodel = mongoose.model('new-investors', investorregister)
module.exports = investorregistermodel
