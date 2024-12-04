let mongoose = require('mongoose')


let registerschema = mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
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
    Join_as: {
        type: String,
        required: true,
    },
    Password: {
        type: String,
        required: true,
    },
    OTP_Value: {
        type: Number,
        required: true
    }
})


let registermodel = mongoose.model('new-user',registerschema)
module.exports = registermodel