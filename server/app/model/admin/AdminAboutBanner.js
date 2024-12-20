let mongoose = require('mongoose')

let aboutbannerschema = mongoose.Schema({
    AboutHeading: {
        type: String,
        required: true,
        unique: true
    },
    AboutParagraph: {
        type: String,
        required: true,
        unique: true
    },
    AboutBanner: {
        type: String,
        required: true,
        unique: true
    }
})


let aboutbannermodel = mongoose.model('aboutbanner',aboutbannerschema);
module.exports = aboutbannermodel;