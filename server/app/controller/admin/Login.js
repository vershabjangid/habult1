let jwt = require('jsonwebtoken')

require('dotenv').config()
let ADMINTOKEN = process.env.ADMINTOKEN
let EMAIL1 = process.env.EMAIL1
let PASSWORD1 = process.env.PASSWORD1
let EMAIL2 = process.env.EMAIL2
let PASSWORD2 = process.env.PASSWORD2
console.log(ADMINTOKEN)

exports.dashlogin = (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }

    if (data.Email === EMAIL1 && data.Password === PASSWORD1 || data.Email === EMAIL2 && data.Password === PASSWORD2) {
        let newtoken;
        jwt.sign({ newtoken }, ADMINTOKEN, (error, value) => {
            res.send({
                Status: 1,
                Message: "User Verified Successfully",
                Token: value
            })
        })
    }
    else {
        res.send({
            Status: 0,
            Message: "Incorrect Email Or Password",
            data: data
        })
    }
}