let mongoose = require('mongoose');

let homewhychooseschema = mongoose.Schema({
    HomeWhyChooseHeading: {
        type: String,
        required: true,
        unique: true
    },
    HomeWhyChooseAboutParagraph: {
        type: String,
        required: true,
        unique: true
    },
    HomeWhyChooseAboutBanner: {
        type: String,
        required: true,
    }
})


let Adminwhychoosemodel = mongoose.model('adminwhychoose', homewhychooseschema);
module.exports = Adminwhychoosemodel;