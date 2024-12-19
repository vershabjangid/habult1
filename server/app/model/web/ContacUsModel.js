let mongoose = require('mongoose')

let ContactUsschema = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: Number,
        required: true,
        unique: true
    },
    Message: {
        type: String,
        required: true,
    }
})



let contactusemodal = mongoose.model('ConactUs', ContactUsschema)
module.exports = contactusemodal