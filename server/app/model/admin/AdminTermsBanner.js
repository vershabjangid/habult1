let mongoose = require('mongoose')


let TermsBannerschema = mongoose.Schema({
    TermsHeading: {
        type: String,
        required: true,
        unique: true
    },
    TermsSubHeading: {
        type: String,
        required: true,
        unique: true
    },
    TermsParagraph: {
        type: String,
        required: true,
        unique: true
    },
    TermsBanner: {
        type: String,
        required: true,
        unique: true
    },
})

let TermsBannerModel = mongoose.model('TermsBanner', TermsBannerschema)
module.exports = TermsBannerModel