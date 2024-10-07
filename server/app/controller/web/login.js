const Jwt = require('jsonwebtoken')
const key = "gjj^&&%^**!%$3443024940@($*)@$*"
const hubaltwebRegister = require("../../model/web/register")
let nodemailer = require('nodemailer')

exports.loginfind = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }

    let findlogin = await hubaltwebRegister.findOne(data).select("-Password")
    if (findlogin) {
        Jwt.sign({ findlogin }, key, { expiresIn: "1min" }, (err, token) => {
            if (err) {
                res.send({ Message: "Incorrect Email or Password" })
            }
            else {
                res.send({ findlogin, auth: token })
            }
        })
    }

    else {
        res.send({
            Status: 0,
            Message: "Incorrect Email or Password"
        })
    }
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "jangidvershab23@gmail.com",
        pass: "qoigtoidkoaipxgp",
    },
});


exports.forgotpassword = async (req, res) => {

    let getdata = await hubaltwebRegister.findOne({ Email: req.body.Email })
    console.log(getdata)
    if (getdata) {
        let data = {
            Email: req.body.Email,
            OTP: Math.floor(1000 + Math.random() * 8000)
        }

        console.log(data)

        const info = await transporter.sendMail({
            from: '"Hubalt Ventures" <jangidvershab23@gmail.com>', // sender address
            to: `${data.Email}`, // list of receivers
            subject: "your otp verification code", // Subject line
            text: "565465", // plain text body
            html: `<b>${data.OTP}</b>`, // html body
        })
        res.send(data)
    }

    else {
        res.send({
            Status: 0,
            Message: "Email Doesn't Exists"
        })
    }
}



exports.newpassword = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }

    let updatedata = await hubaltwebRegister.updateOne({ Email: data.Email }, { Password: data.Password })
    if (updatedata.acknowledged == true) {
        res.send({
            Status: 1,
            Message: "Data Successfully Updated"
        })
    }
    else {
        res.send({
            Status: 0,
            Message: "Data Doesn't Updated"
        })
    }
}