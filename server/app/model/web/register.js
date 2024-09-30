let mongoose = require('mongoose')


let registerschema = mongoose.Schema({
    Email : {
        type : String,
        required : true,
        unique : true
    },
    Phone : {
        type : Number,
        required : true,
        unique : true
    },
    Password : {
        type : String,
        required : true,
        unique : true
    },
    Firm_name : {
        type : String,
        required : true,
        unique : true
    },
    Category : {
        type : String,
        required : true,
    },
    Bio : {
        type : String,
        required : true,
    },
    Join_as : {
        type : String,
        required : true,
    },
    Active_Status :{
        type : String,
        required : true
    }
    // Logo : {
    //     type : String,
    //     required : true,
    // } ,
    // Background_Banner :{
    //     type : String,
    //     required : true,
    // }
})

let hubaltwebRegister = mongoose.model('hubalt_users',registerschema);
module.exports = hubaltwebRegister;
