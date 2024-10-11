require('dotenv').config()
let token = require('jsonwebtoken')
let email = process.env.LOGIN_ID
let password = process.env.PASSWORD
let adminkey = process.env.ADMINKEY

exports.Adminlogin = (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }

    if (data.Email == email && data.Password == password) {
        let newtoken;
        token.sign({ newtoken }, adminkey, { expiresIn: "1h" }, (err, value) => {
            res.send({
                Status: 1,
                Message: "Login Succeed",
                TokenVal: value
            })
        })
    }
    else {
        res.send({
            Status: 0,
            Message: "No Data Found"
        })
    }
}