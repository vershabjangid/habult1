let express = require('express')
const { investorform } = require('../../controller/web/Investor')
const multer = require('multer')
let path = require('path')
let startupsroute = express.Router()
let jwt = require('jsonwebtoken')
const { startupform, viewstartups } = require('../../controller/web/startup')
const { viewadminstartup } = require('../../controller/admin/AdminStartups')
require('dotenv').config()
let WEBTOKEN = process.env.WEBTOKEN



let verifytoken = (req, res, next) => {
    console.log(req.body)
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.body)
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniquesuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        const extension = path.extname(file.originalname)
        const filename = 'file' + uniquesuffix + extension
        cb(null, filename)
    }
})

const upload = multer({ storage: storage }).any('Company_Pan', 'Company_Logo', 'Team_Profile', 'Team_Profile1', 'Backers_Profile', 'Backers_Profile1', 'Financial_Projection', 'Pitch_Deck', 'Incorporation_Certificate')


startupsroute.post('/add-startup', upload, startupform);
startupsroute.get('/view-allstartups', viewstartups);



startupsroute.get('/view-adminstartup', viewadminstartup)


module.exports = startupsroute