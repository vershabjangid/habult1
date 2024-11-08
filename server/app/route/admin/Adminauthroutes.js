let express = require('express')
const { adminauth } = require('../../controller/admin/Adminauth')
const { getmembers, getstartups } = require('../../controller/admin/Admincontroller')
let admin = express.Router()


let jwt = require('jsonwebtoken')
require('dotenv').config()
let adminkey = process.env.ADMINKEY
console.log(adminkey)
let verifytoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, adminkey, (err, valid) => {
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
admin.get('/get-startups', verifytoken, getstartups)

module.exports = admin