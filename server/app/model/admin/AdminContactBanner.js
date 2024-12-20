let mongoose = require('mongoose')

let AdminContactBannerScema = mongoose.Schema({
    AdminContactHeading: {
        type: String,
        required: true,
        unique: true
    },
    AdminContactParagraph: {
        type: String,
        required: true,
        unique: true
    },
    AdminContactBanner: {
        type: String,
        required: true,
        unique: true
    }
})


let AdminContactBannerModal = mongoose.model('ContactUsBanner', AdminContactBannerScema)
module.exports = AdminContactBannerModal;