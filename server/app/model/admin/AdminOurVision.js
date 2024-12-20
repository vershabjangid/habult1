let mongoose = require('mongoose')


let adminourvisionschema = mongoose.Schema({

    OurVisionParagraph: {
        type: String,
        required: true,
        unique: true
    },
    OurVisionBanner: {
        type: String,
        required: true,
        unique: true
    },

})


let adminourvisionsmodel = mongoose.model('adminourvision', adminourvisionschema)
module.exports = adminourvisionsmodel;
