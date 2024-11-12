let jwt = require('jsonwebtoken')

require('dotenv').config()

let Email = process.env.EMAIL
let Password = process.env.PASSWORD
let Adminkey = process.env.ADMINKEY
let Email2 = process.env.EMAIL2
let Password2 = process.env.PASSWORD2

exports.adminauth = (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password,
    }

    if (Email == data.Email && Password == data.Password || Email2 == data.Email && Password2 == data.Password) {

        let newtoken;
        jwt.sign({ newtoken }, Adminkey, { expiresIn: '1h' }, (err, value) => {
            res.send({
                Status: 1,
                Message: "Admin Found Successfully",
                admintoken: value,
            })
        })


    }
    else {
        res.status(400).send({
            Status: 0,
            Message: "No User Found"
        })
    }
}