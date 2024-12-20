let mongoose = require('mongoose')


let adminwhychooseschema = mongoose.Schema({
    WhyChooseParagraph: {
        type: String,
        required: true,
        unique: true
    },
    WhyChooseBanner: {
        type: String,
        required: true,
        unique: true
    }
})



let adminaboutourmissionmodel = mongoose.model('ourmission', adminwhychooseschema)
module.exports = adminaboutourmissionmodel;
