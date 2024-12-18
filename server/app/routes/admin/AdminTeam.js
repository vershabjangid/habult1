let express = require('express');
const { addteam, viewteam, updateteam, deleteteam } = require('../../controller/admin/AdminTeam');
const multer = require('multer');
let AdminTeamroute = express.Router();
let path = require('path')
let jwt = require('jsonwebtoken')
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



const upload = multer({ storage: storage }).any('Bank_Proof', 'PanCard', 'AadhaarCard')


AdminTeamroute.post('/add-team', upload,verifyadmintoken, addteam);
AdminTeamroute.get('/view-team',verifyadmintoken, viewteam);
AdminTeamroute.put('/update-team',verifyadmintoken, updateteam);
AdminTeamroute.delete('/delete-team',upload,verifyadmintoken, deleteteam);

AdminTeamroute.get('/view-web-team',verifyadmintoken, viewteam);

module.exports = AdminTeamroute;