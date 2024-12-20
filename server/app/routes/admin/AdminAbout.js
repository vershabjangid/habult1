let express = require('express');
const { Addaboutbannercontroller, viewadboutbannercontroller, Addaboutcontentcontroller, viewadboutcontentcontroller, AdminaboutOurMission, viewadboutourmissioncontroller } = require('../../controller/admin/AdminAbout');
let adminaboutroutes = express.Router();


let path = require('path')
let jwt = require('jsonwebtoken');
const multer = require('multer');
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



const upload = multer({ storage: storage }).any('AboutBanner')

adminaboutroutes.post('/add-about-banner', upload, verifyadmintoken, Addaboutbannercontroller)
adminaboutroutes.get('/view-about-banner', upload, viewadboutbannercontroller)




adminaboutroutes.post('/add-about-content', upload, verifyadmintoken, Addaboutcontentcontroller)
adminaboutroutes.get('/view-about-content', viewadboutcontentcontroller)



adminaboutroutes.post('/add-about-ourmission', upload, verifyadmintoken, AdminaboutOurMission)
adminaboutroutes.get('/view-about-ourmission', upload, viewadboutourmissioncontroller)



module.exports = adminaboutroutes;