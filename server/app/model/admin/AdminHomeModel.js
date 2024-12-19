let mongoose = require('mongoose');

let homeschema = mongoose.Schema({
    HomeHeading: {
        type: String,
        required: true,
        unique: true
    },
    HomeSubHeading: {
        type: String,
        required: true,
        unique: true
    },
    HomeParagraph: {
        type: String,
        required: true,
        unique: true
    },
    HomeBanner: {
        type: String,
        required: true,
    }
})


let adminhomemodel = mongoose.model('AdminHome',homeschema);
module.exports = adminhomemodel;