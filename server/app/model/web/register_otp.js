let mongoose = require('mongoose')


let otpschema = mongoose.Schema({
    Email : {
        type : String,
        required : true,
    },
    OTP : {
        type : Number,
        required : true,
    }
})

let registermodel = mongoose.model('Register_otp',otpschema);
module.exports = registermodel;