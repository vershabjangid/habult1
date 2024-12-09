let express = require('express')
const { investorform } = require('../../controller/web/Investor')
const multer = require('multer')
let path = require('path')
let Extrafunctionality = express.Router()
let jwt = require('jsonwebtoken')
const { addindustry, viewindustry, updateindustry, deleteindustry, viewindustryweb } = require('../../controller/admin/industrycontroller')
const { addfaq, viewfaq, updatefaq, deletefaq } = require('../../controller/admin/faqcontroller')
require('dotenv').config()
let WEBTOKEN = process.env.WEBTOKEN
let ADMINTOKEN = process.env.ADMINTOKEN





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




// update all are work with token industry
Extrafunctionality.post('/add-industry', verifyadmintoken, addindustry)
Extrafunctionality.get('/view-industry', verifyadmintoken, viewindustry)
Extrafunctionality.get('/view-web-industry', verifytoken, viewindustryweb)
Extrafunctionality.put('/update-industry', verifyadmintoken, updateindustry)
Extrafunctionality.delete('/delete-industry', verifyadmintoken, deleteindustry)


Extrafunctionality.post('/add-faq', verifyadmintoken, addfaq)
Extrafunctionality.get('/view-faq', viewfaq)
Extrafunctionality.put('/update-faq', verifyadmintoken, updatefaq)
Extrafunctionality.delete('/delete-faq', verifyadmintoken, deletefaq)
module.exports = Extrafunctionality;