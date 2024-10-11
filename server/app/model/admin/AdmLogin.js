let mongoose = require('mongoose')

let adminlogin = mongoose.Schema({

    Email :  {
        type :String,
        required : true
    },
    Password :  {
        type :String,
        required : true
    },
})