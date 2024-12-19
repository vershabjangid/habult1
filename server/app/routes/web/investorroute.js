let express = require('express')
const { investorform, viewinvestor, deleteinvestorform } = require('../../controller/web/Investor')
const multer = require('multer')
let path = require('path')
let investorroutes = express.Router()
let jwt = require('jsonwebtoken')
const { viewadmininvestor, updateadmininvestors } = require('../../controller/admin/AdminInvestor')
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


let verifyadmintoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, ADMINTOKEN, (err, valid) => {
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

const upload = multer({ storage: storage }).any('Bank_Proof', 'PanCard', 'AadhaarCard')


investorroutes.post('/add-investors', upload, verifytoken, investorform);
investorroutes.get('/view-investors', verifyadmintoken, upload, viewinvestor);
investorroutes.delete('/delete-investors-profile', verifyadmintoken, upload, deleteinvestorform);


investorroutes.get('/view-admininvestors', upload, verifyadmintoken, viewadmininvestor);
investorroutes.put('/update-investor-status', verifyadmintoken, upload, updateadmininvestors);

module.exports = investorroutes