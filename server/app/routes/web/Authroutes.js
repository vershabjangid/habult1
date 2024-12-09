let express = require('express');
const { register, verifyotp, resendotp, viewregister, loginform, forgotpassword, changepassword, updateallfield } = require('../../controller/web/Auth');
let authroutes = express.Router()
let jwt = require('jsonwebtoken')
require('dotenv').config()
let WEBTOKEN = process.env.WEBTOKEN
let ADMINTOKEN = process.env.ADMINTOKEN



let verifytoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, WEBTOKEN, (err, valid) => {
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



authroutes.post('/register', register);
authroutes.post('/login', loginform)
authroutes.post('/forgot-password', forgotpassword)
authroutes.put('/change-password', verifytoken, changepassword)
authroutes.post('/verify-register', verifyotp);
authroutes.put('/change-all-field', updateallfield);
authroutes.put('/resend-otp', resendotp);


authroutes.get('/view-register', viewregister)




module.exports = authroutes;