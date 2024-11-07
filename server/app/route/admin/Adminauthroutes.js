let express = require('express')
const { adminauth } = require('../../controller/admin/Adminauth')
const { getmembers } = require('../../controller/admin/Admincontroller')
let admin = express.Router()
let jwt = require('jsonwebtoken')
require('dotenv').config()
let webkey = process.env.ADMINKEY
let verifytoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, webkey, (err, valid) => {
            if (err) {
                res.send("please enter the valid token")
            }
            else {
                next();
            }
        })
    }
    else {
        res.send("please enter the token")
    }
}


admin.post('/Admin_Login', adminauth)


admin.get('/get-members', verifytoken, getmembers)

module.exports = admin