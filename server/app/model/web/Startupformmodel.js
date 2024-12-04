let mongoose = require('mongoose')


let startupformschema = mongoose.Schema({
    Company_Name: {
        type: String,
        require: true,
        unique: true
    },
    Company_Pan: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
        unique: true
    },
    Funding_Ask: {
        type: Number,
        require: true
    },
    Industry: {
        type: String,
        require: true
    },
    Linkedin_Url: {
        type: String,
        require: true
    },
    Stage: {
        type: String,
        require: true
    },
    Website_Url: {
        type: String,
        require: true
    },
    Equity: {
        type: Number,
        require: true
    },
    Company_Logo: {
        type: String,
        require: true
    },
    Company_Description: {
        type: String,
        require: true
    },
    Highlights1: {
        type: String,
        require: true
    },
    Highlights2: {
        type: String
    },
    Team_Profile: {
        type: String,
        require: true
    },
    Team_Name: {
        type: String,
        require: true
    },
    Team_Designation: {
        type: String,
        require: true
    },
    Team_Experience: {
        type: Number,
        require: true
    },
    Team_Profile1: {
        type: String,
        require: true
    },
    Team_Name1: {
        type: String,
        require: true
    },
    Team_Designation1: {
        type: String,
        require: true
    },
    Team_Experience1: {
        type: Number,
        require: true
    },
    Backers_Profile: {
        type: String,
        require: true
    },
    Backers_Name: {
        type: String,
        require: true
    },
    Backers_Designation: {
        type: String,
        require: true
    },
    Backers_Experience: {
        type: Number,
        require: true
    },
    Backers_Profile1: {
        type: String,
        require: true
    },
    Backers_Name1: {
        type: String,
        require: true
    },
    Backers_Designation1: {
        type: String,
        require: true
    },
    Backers_Experience1: {
        type: Number,
        require: true
    },
    Video_Link: {
        type: String,
        require: true
    },
    Competitor: {
        type: String,
        require: true
    },
    Market_Size: {
        type: Number,
        require: true
    },
    Solution: {
        type: String,
        require: true
    },
    Problem_Statement: {
        type: String,
        require: true
    },
    Financial_Projection: {
        type: String,
        require: true
    },
    Pitch_Deck: {
        type: String,
        require: true
    },
    Incorporation_Certificate: {
        type: String,
        require: true
    },
    Terms_Conditions: {
        type: Boolean,
        require: true
    },
})


let startupformmodel = mongoose.model('Startup', startupformschema)
module.exports = startupformmodel;