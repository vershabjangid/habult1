const nodemailer = require("nodemailer");
const Jwt = require('jsonwebtoken')
const key = "gjj^&&%^**!%$3443024940@($*)@$*"
const hubaltwebRegister = require("../../model/web/register")


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "jangidvershab23@gmail.com",
        pass: "qoigtoidkoaipxgp",
    },
});


exports.registerotp = async (req, res) => {

    let data = {
        Email: req.body.Email,
        OTP: Math.floor(1000 + Math.random() * 8000)
    }


    const info = await transporter.sendMail({
        from: '"Hubalt Ventures"', // sender address
        to: `${data.Email}`, // list of receivers
        subject: "your otp verification code", // Subject line
        text: "565465", // plain text body
        html: `<b>${data.OTP}</b>`, // html body
    });

    let newtoken;
    let finaltoken = Jwt.sign({ newtoken }, key, { expiresIn: '300s' }, (err, token) => {
        res.send({ data, token })
    })

}



exports.registerdata = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Phone: req.body.Phone,
        Password: req.body.Password,
        Join_as: req.body.Join_as,
        Firm_name: req.body.Firm_name,
        Category: req.body.Category,
        Bio: req.body.Bio,
        Logo: req.body.Logo,
        Goal: req.body.Goal,
        Raised: req.body.Raised,
        PreMoneyValuation: req.body.PreMoneyValuation,
        Equity: req.body.Equity,
        MinimumInvestment: req.body.MinimumInvestment,
        Pan: req.body.Pan,
        Active_Status: "pending"
    }
    let insertdata = await hubaltwebRegister(data)

    insertdata.save().then((insertres) => {
        insertdata = insertdata.toObject();
        delete insertdata.Password

        res.send({
            "Status": 1,
            "message": "data inserted successfully"
        })
    })
        .catch((error) => {
            if (error._message == "hubalt_users validation failed") {
                res.send({
                    "Status": 0,
                    "Message": "Data Missing"
                })
            }
            else {
                res.send({
                    "Status": 0,
                    "Message": "Data Already Exists"
                })
            }
        })

}


