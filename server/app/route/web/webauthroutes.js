let express = require('express');
const { webregister, webregisterotp } = require('../../controller/web/Adminauthcontroller');
let webauthroutes = express.Router();
let jwt = require('jsonwebtoken');
const multer = require('multer');
let path = require('path')
require('dotenv').config()
let webkey = process.env.KEY
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



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniquesuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname)
        const filename = 'file' + uniquesuffix + extension
        cb(null, filename)
    }
})

const upload = multer({ storage: storage }).any('Logo', 'FounderImage', 'Incorporation_Certificate', 'Pitch_deck', 'Financials_Projection', 'Pan')




webauthroutes.post('/register', upload, verifytoken, webregister)
webauthroutes.post('/register-otp', webregisterotp)

module.exports = webauthroutes