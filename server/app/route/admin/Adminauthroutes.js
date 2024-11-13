let express = require('express')
let path = require('path')
const { adminauth } = require('../../controller/admin/Adminauth')
const { getmembers, getstartups, updatestartups, addindustry, viewindustry, updateinvestors, updateindustry, deleteindustry, addteam, viewteam, updateteam, deleteteam } = require('../../controller/admin/Admincontroller')
let admin = express.Router()
const multer = require('multer')
let jwt = require('jsonwebtoken')
require('dotenv').config()


let adminkey = process.env.ADMINKEY
console.log(adminkey)
let verifytoken = (req, res, next) => {
    let token = req.headers['authorization']
    if (token) {
        jwt.verify(token, adminkey, (err, valid) => {
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

const upload = multer({ storage: storage }).any('Pan_Card', 'Aadhar_Card', 'Bank_Proof')


admin.post('/Admin_Login', adminauth)


admin.get('/get-members', verifytoken, getmembers)
admin.get('/get-startups', verifytoken, getstartups)
admin.put('/update-startup', updatestartups)
admin.put('/update-investor', updateinvestors)
admin.post('/add-industry', addindustry)
admin.get('/view-industry', viewindustry)
admin.put('/update-industry', updateindustry)
admin.delete('/delete-industry', deleteindustry)


admin.post('/add-team', upload, addteam)
admin.get('/view-team', viewteam)
admin.put('/update-team', updateteam)
admin.delete('/delete-team', deleteteam)

module.exports = admin