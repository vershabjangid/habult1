let express = require('express')
const { investorform } = require('../../controller/web/Investor')
const multer = require('multer')
let path = require('path')
let profileroutes = express.Router()
let jwt = require('jsonwebtoken')
const { addindustry, viewindustry, updateindustry, deleteindustry, viewindustryweb } = require('../../controller/admin/industrycontroller')
const { addfaq, viewfaq, updatefaq, deletefaq } = require('../../controller/admin/faqcontroller')
const { updateprofilestatus } = require('../../controller/admin/ProfileController')
require('dotenv').config()
let ADMINTOKEN = process.env.ADMINTOKEN





let verifytoken = (req, res, next) => {
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


profileroutes.put('/update-status',verifytoken, updateprofilestatus)


module.exports = profileroutes