let mongoose = require('mongoose')

let AdminHomeAboutschema = mongoose.Schema({
    HomeAboutHeading: {
        type: String,
        required: true,
        unique: true
    },
    HomeAboutParagraph: {
        type: String,
        required: true,
        unique: true
    },
    HomeAboutBanner: {
        type: String,
        required: true,
        unique: true
    },
})



let AdminHomeAboutModel = mongoose.model('AdminHomeAbout',AdminHomeAboutschema)
module.exports = AdminHomeAboutModel;