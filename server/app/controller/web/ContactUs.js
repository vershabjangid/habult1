const contactusemodal = require("../../model/web/ContacUsModel")
const nodemailer = require('nodemailer')



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



exports.conactUs = async (req, res) => {
    let data = {
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email,
        Message: req.body.Message
    }


    let insertdata = await contactusemodal(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Sended Successfully"
            })
            email(data)
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "Sended Already"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Field Missing"
                })
            }
        })
}


exports.viewcontactus = async (req, res) => {
    let viewdata = await contactusemodal.find()
    res.send(viewdata)
}