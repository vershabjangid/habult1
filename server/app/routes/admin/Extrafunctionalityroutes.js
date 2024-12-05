let express = require('express')
const { investorform } = require('../../controller/web/Investor')
const multer = require('multer')
let path = require('path')
let Extrafunctionality = express.Router()
let jwt = require('jsonwebtoken')
const { addindustry, viewindustry, updateindustry, deleteindustry } = require('../../controller/admin/industrycontroller')
const { addfaq, viewfaq, updatefaq, deletefaq } = require('../../controller/admin/faqcontroller')
require('dotenv').config()
let WEBTOKEN = process.env.WEBTOKEN





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
Extrafunctionality.post('/add-industry', addindustry)
Extrafunctionality.get('/view-industry', viewindustry)
Extrafunctionality.put('/update-industry', updateindustry)
Extrafunctionality.delete('/delete-industry', deleteindustry)


Extrafunctionality.post('/add-faq', addfaq)
Extrafunctionality.get('/view-faq', viewfaq)
Extrafunctionality.put('/update-faq', updatefaq)
Extrafunctionality.delete('/delete-faq', deletefaq)
module.exports = Extrafunctionality;