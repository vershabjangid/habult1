let express = require('express');
const { AddTermsBanner, ViewTermsBanner } = require('../../controller/admin/AdminTermsController');
let AdminTerms = express.Router();

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



const upload = multer({ storage: storage }).any('TermsBanner')

AdminTerms.post('/add-terms-banner',upload,verifyadmintoken, AddTermsBanner);
AdminTerms.get('/view-terms-banner', ViewTermsBanner);


module.exports = AdminTerms;