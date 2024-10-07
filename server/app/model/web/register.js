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
    },
    Logo:{
        type : Buffer,
        required : true
    },
    Goal:{
        type : Number,
        required : true
    },
    Raised:{
        type : Number,
        required : true
    },
    PreMoneyValuation: {
        type : Number,
        required : true
    },
    Equity: {
        type : Number,
        required : true
    },
    MinimumInvestment: {
        type : Number,
        required : true
    },
    Pan: {
        type : Buffer,
        required : true
    },
    // Logo : {
    //     type : String,
    //     required : true,
    // } 
})

let hubaltwebRegister = mongoose.model('hubalt_users',registerschema);
module.exports = hubaltwebRegister;
