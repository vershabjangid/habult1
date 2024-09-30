let mongoose = require('mongoose')


let Forgot = mongoose.Schema({
    Email : {
        type : String,
        required : true,
    },
    Password : {
        type : String,
        required : true,
    }
})

let registermodel = mongoose.model('Register_otp',otpschema);
module.exports = registermodel;