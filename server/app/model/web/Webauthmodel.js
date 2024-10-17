let mongoose = require('mongoose')

let registerschema = mongoose.Schema({
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
    Short_Bio: {
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
    FounderName: {
        type: String,
        required: true
    },
    FounderImage: {
        type: String,
        required: true
    },
    Incorporation_Certificate: {
        type: String,
        required: true
    },
    Pitch_deck: {
        type: String,
        required: true
    },
    Financials_Projection: {
        type: String,
        required: true
    },
    Funding_Ask: {
        type: String,
        required: true
    },
    Round: {
        type: String,
        required: true
    },
    PreMoneyValuation: {
        type: String,
        required: true
    },
    Equity: {
        type: String,
        required: true
    },
    Pan: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: true
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
        type: String,
        required: true
    }
})

let websiteregistermodel = mongoose.model('new-users', registerschema)
module.exports = websiteregistermodel