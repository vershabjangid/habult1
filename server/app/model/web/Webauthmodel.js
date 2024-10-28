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
        type: String,
        required: true,
        unique: true
    },
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Company_Name: {
        type: String,
        required: true,
        unique: true
    },
    Industry: {
        type: String,
        required: true
    },
    LinkedinUrl: {
        type: String,
        required: true
    },
    Company_Pan: {
        type: String,
        required: true
    },
    Website: {
        type: String,
        required: true
    },
    Funding_Ask: {
        type: Number,
        required: true
    },
    Stage: {
        type: String,
        required: true
    },
    Equity_Dilution: {
        type: Number,
        required: true
    },
    ReferredBy: {
        type: String,
    },
    Logo: {
        type: String,
        required: true
    },
    Company_Description: {
        type: String,
        required: true
    },
    TeamProfile1: {
        type: String,
        required: true
    },
    TeamName1: {
        type: String,
        required: true
    },
    TeamDesignation1: {
        type: String,
        required: true
    },
    TeamExperience1: {
        type: String,
        required: true
    },
    TeamProfile2: {
        type: String,
        required: true
    },
    TeamName2: {
        type: String,
        required: true
    },
    TeamDesignation2: {
        type: String,
        required: true
    },
    TeamExperience2: {
        type: String,
        required: true
    },
    TeamProfile3: {
        type: String,
    },
    TeamName3: {
        type: String,
    },
    TeamDesignation3:
    {
        type: String,
    },
    TeamExperience3: {
        type: String,
    },
    TeamProfile4: {
        type: String,
    },
    TeamName4: {
        type: String,
    },
    TeamDesignation4: {
        type: String,
    },
    TeamExperience4: {
        type: String,
    },
    Highlight1: {
        type: String,
        required: true
    },
    Highlight2: {
        type: String,
        required: true
    },
    Highlight3: {
        type: String,
        required: true
    },
    Highlight4: {
        type: String,
    },
    Highlight5: {
        type: String,
    },
    BackersProfile1: {
        type: String,
        required: true
    },
    BackersName1: {
        type: String,
        required: true
    },
    BackersDesignation1: {
        type: String,
        required: true
    },
    BackersExperience1: {
        type: String,
        required: true
    },
    BackersProfile2: {
        type: String,
        required: true
    },
    BackersName2: {
        type: String,
        required: true
    },
    BackersDesignation2: {
        type: String,
        required: true
    },
    BackersExperience2: {
        type: String,
        required: true
    },
    BackersProfile3: {
        type: String,
    },
    BackersName3: {
        type: String,
    },
    BackersDesignation3: {
        type: String,
    },
    BackersExperience3: {
        type: String,
    },
    BackersProfile4: {
        type: String,
    },
    BackersName4: {
        type: String,
    },
    BackersDesignation4: {
        type: String,
    },
    BackersExperience4: {
        type: String,
    },
    Problem: {
        type: String,
        required: true
    },
    Solution: {
        type: String,
        required: true
    },
    Video_Link: {
        type: String,
        required: true
    },
    Pitch_Deck: {
        type: String,
        required: true
    },
    Incorporation_Certificate: {
        type: String,
        required: true
    },
    TermsAndConditions: {
        type: Boolean,
        required: true
    },
    Activestatus: {
        type: String,
        required: true
    }
})

let websiteregistermodel = mongoose.model('new-users', registerschema)
module.exports = websiteregistermodel