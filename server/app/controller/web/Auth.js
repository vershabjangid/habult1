const registermodel = require("../../model/web/Authmodel")
let nodemailer = require('nodemailer')
let jwt = require('jsonwebtoken')

require('dotenv').config()
let SMTP = process.env.SMTP
let USER = process.env.SENDEREMAIL
let PASS = process.env.EMAILPASS
let WEBTOKEN = process.env.WEBTOKEN


const transporter = nodemailer.createTransport({
    host: SMTP,
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: USER,
        pass: PASS,
    },
});


async function email(value) {

    try {
        const info = await transporter.sendMail({
            from: 'Hivexv.com', // sender address
            to: `${value.Email}`, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: `<b>${value.OTP_Value}</b>`, // html body
        });

        return {
            Status: 1,
            Message: "Email Sended Successfully"
        }
    }
    catch {
        return { Message: "NO User Found" }
    }
}


exports.register = async (req, res) => {
    let data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Join_as: req.body.Join_as,
        Password: req.body.Join_as,
        ConfirmPassword: req.body.Join_as,
        OTP_Value: Math.floor(1000 + Math.random() * 8000),
        Is_Verified: false
    }




    let insertdata = await registermodel(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
            email(data);
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "User Alredy Exists",
                })

            }
            else {
                res.status(400).send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}


exports.verifyotp = async (req, res) => {

    let data = {
        Email: req.body.Email,
        OTP: req.body.OTP
    }

    let getdata = await registermodel.findOne({ Email: data.Email })


    if (data.OTP == getdata.OTP_Value) {
        let updatedata = await registermodel.updateOne({ Email: data.Email }, { Is_Verified: true })
        let newtoken;
        jwt.sign({ newtoken }, WEBTOKEN, { expiresIn: '1h' }, (error, value) => {
            res.send({
                Status: true,
                Message: "User Verified Successfully",
                Token: value
            })
        })
    }
    else {
        res.send({
            Status: false,
            Message: "Incorrect OTP"
        })
    }
}



exports.resendotp = async (req, res) => {

    let data = {
        Email: req.body.Email,
        OTP_Value: Math.floor(1000 + Math.random() * 8000)
    }


    let update = await registermodel.updateOne({ Email: req.body.Email }, data)
        .then(() => {
            res.send({
                Status: 1,
                Message: "OTP Sended Successfully"
            })
            email(data);
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "User Alredy Exists"
                })
            }
            else {
                res.status(400).send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}



exports.viewregister = async (req, res) => {
    let viewdata = await registermodel.find()
    res.send(viewdata)
}






exports.loginform = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }
    let getdata = await registermodel.find({ Email: data.Email, Password: data.Password })

    if (getdata.getdata != []) {
        let newtoken;
        jwt.sign({ newtoken }, WEBTOKEN, { expiresIn: '2h' }, (err, value) => {
            res.send({
                getdata,
                Token: value
            })
        })
    }
    else {
        res.send({
            Status: 0,
            Message: "No User Found"
        })
    }
}