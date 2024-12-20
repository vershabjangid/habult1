let mongoose = require('mongoose');


let aboutcontentschema = mongoose.Schema({
    About_Content: {
        type: String,
        required: true,
        unique: true
    }
})


let aboutcontentmodel = mongoose.model('aboutcontent', aboutcontentschema);
module.exports = aboutcontentmodel