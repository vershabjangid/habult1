let mongoose = require('mongoose')

let loginschema = mongoose.Schema({
    Email: {
        type: String,
        required: true
    },

    Password: {
        type: String,
        required: true
    }
})


let loginmodel = mongoose.model('loginmodel',loginschema)
module.exports = loginmodel