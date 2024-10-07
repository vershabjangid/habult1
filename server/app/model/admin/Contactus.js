let mongoose = require('mongoose')

let contactschema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Mobile: {
        type: Number,
        required: true
    }
})

let newcontact = mongoose.model('Contact_query',contactschema)
module.exports = newcontact;