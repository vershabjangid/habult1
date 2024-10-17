const websiteregistermodel = require("../../model/web/Webauthmodel")
const nodemailer = require("nodemailer");
let jwt = require('jsonwebtoken')
require('dotenv').config()
let webkey = process.env.KEY
let emailpass = process.env.EMAILPASS

exports.webregister = async (req, res) => {

    if (req.files[0] != undefined && req.files[1] != undefined && req.files[2] != undefined && req.files[3] != undefined && req.files[4] != undefined && req.files[5] != undefined) {
        let images = {
            file1: req.files[0].filename,
            file2: req.files[1].filename,
            file3: req.files[2].filename,
            file4: req.files[3].filename,
            file5: req.files[4].filename,
            file6: req.files[5].filename,

        }

        if (req.body.TermsAndConditions != undefined) {
            var terms = {
                TermsAndConditions: true
            }
        }
        else {
            var terms = {
                TermsAndConditions: false
            }
        }



        let data = {
            Join_as: req.body.Join_as,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Company_Name: req.body.Company_Name,
            Startup_Sector: req.body.Startup_Sector,
            Short_Bio: req.body.Short_Bio,
            Password: req.body.Password,
            Logo: images.file1,
            FounderName: req.body.FounderName,
            FounderImage: images.file2,
            Incorporation_Certificate: images.file3,
            Pitch_deck: images.file4,
            Financials_Projection: images.file5,
            Funding_Ask: req.body.Funding_Ask,
            Round: req.body.Round,
            PreMoneyValuation: req.body.PreMoneyValuation,
            Equity: req.body.Equity,
            Pan: images.file6,
            Description: req.body.Description,
            Activestatus: "pending",
            TermsAndConditions: terms.TermsAndConditions,
            ReferredBy: req.body.ReferredBy
        }


        let insertdata = await websiteregistermodel(data)
        insertdata.save()
            .then(() => {
                res.send({
                    Status: 1,
                    Message: "Data Inserted Successfully"
                })
            })
            .catch((error) => {
                if (error.code == 11000) {
                    res.send({
                        Status: 0,
                        Message: "Data Already Exists"
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
    else {
        res.send({
            Status: 0,
            Message: "Data Missing"
        })
    }
}


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "jangidvershab23@gmail.com",
        pass: emailpass,
    },
});


exports.webregisterotp = async (req, res) => {
    let data = {
        Email: req.body.Email,
        OTP: Math.floor(1000 + Math.random() * 8000)
    }

    try {
        const info = await transporter.sendMail({
            from: 'hivexv', // sender address
            to: `${data.Email}`, // list of receivers
            subject: "Your Registration OTP", // Subject line
            text: `hello user welcome to hivexv`, // plain text body
            html: `${data.OTP}`, // html body
        });

        let newtoken;
        jwt.sign({ newtoken }, webkey, (err, value) => {
            res.send({
                data,
                Token: value
            })
        })
    }
    catch {
        res.send({
            Status: 0,
            Message: "No Receiptment Found"
        })
    }
}