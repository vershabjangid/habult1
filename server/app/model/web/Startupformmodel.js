let mongoose = require('mongoose')


let startupformschema = mongoose.Schema({
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
    Company_Name: {
        type: String,
        required: true,
        unique: true
    },
    Company_Pan: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Funding_Ask: {
        type: Number,
        required: true
    },
    Industry: {
        type: String,
        required: true
    },
    Linkedin_Url: {
        type: String,
        required: true
    },
    Stage: {
        type: String,
        required: true
    },
    Website_Url: {
        type: String,
        required: true
    },
    Equity: {
        type: Number,
        required: true
    },
    Company_Logo: {
        type: String,
        required: true
    },
    Company_Description: {
        type: String,
        required: true
    },
    Highlights1: {
        type: String,
        required: true
    },
    Highlights2: {
        type: String
    },
    Team_Profile: {
        type: String,
        required: true
    },
    Team_Name: {
        type: String,
        required: true
    },
    Team_Designation: {
        type: String,
        required: true
    },
    Team_Experience: {
        type: Number,
        required: true
    },
    Team_Profile1: {
        type: String,
        required: true
    },
    Team_Name1: {
        type: String,
        required: true
    },
    Team_Designation1: {
        type: String,
        required: true
    },
    Team_Experience1: {
        type: Number,
        required: true
    },
    Backers_Profile: {
        type: String,
        required: true
    },
    Backers_Name: {
        type: String,
        required: true
    },
    Backers_Designation: {
        type: String,
        required: true
    },
    Backers_Experience: {
        type: Number,
        required: true
    },
    Backers_Profile1: {
        type: String,
        required: true
    },
    Backers_Name1: {
        type: String,
        required: true
    },
    Backers_Designation1: {
        type: String,
        required: true
    },
    // Backers_Experience1: {
    //     type: Number,
    //     required: true
    // },
    // Video_Link: {
    //     type: String,
    //     required: true
    // },
    // Competitor: {
    //     type: String,
    //     required: true
    // },
    // Market_Size: {
    //     type: Number,
    //     required: true
    // },
    // Solution: {
    //     type: String,
    //     required: true
    // },
    // Problem_Statement: {
    //     type: String,
    //     required: true
    // },
    // Financial_Projection: {
    //     type: String,
    //     required: true
    // },
    // Pitch_Deck: {
    //     type: String,
    //     required: true
    // },
    Incorporation_Certificate: {
        type: String,
        required: true
    },
    // Terms_Conditions: {
    //     type: String,
    //     required: true
    // },
})


let startupformmodel = mongoose.model('startups', startupformschema)
module.exports = startupformmodel;