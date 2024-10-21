const websiteregistermodel = require("../../model/web/Webauthmodel")
const nodemailer = require("nodemailer");
let jwt = require('jsonwebtoken');
const investorregistermodel = require("../../model/web/InvestorAuth");
require('dotenv').config()
let webkey = process.env.KEY
let emailpass = process.env.EMAILPASS




exports.webregister = async (req, res) => {
    if (req.body.TermsAndConditions == 'on') {
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
        Logo: req.files[0].filename,
        FounderName: req.body.FounderName,
        FounderImage: req.files[1].filename,
        Incorporation_Certificate: req.files[2].filename,
        Pitch_deck: req.files[3].filename,
        Financials_Projection: req.files[4].filename,
        Funding_Ask: req.body.Funding_Ask,
        Round: req.body.Round,
        PreMoneyValuation: req.body.PreMoneyValuation,
        Equity: req.body.Equity,
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


exports.updateregister = async (req, res) => {
    let updatedata = await websiteregistermodel.updateOne({ Email: req.body.Email }, { Password: req.body.Password })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Updated Successfully",
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

exports.webinvestorregister = async (req, res) => {

    console.log(req.body)
    if (req.body.TermsAndConditions == 'on') {
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
        Address: req.body.Address,
        Password: req.body.Password,
        Logo: req.files[0].filename,
        Pan: req.files[1].filename,
        AadharCard: req.files[2].filename,
        BankDocuments: req.files[3].filename,
        Activestatus: req.body.Activestatus,
        TermsAndConditions: req.body.TermsAndConditions,
        ReferredBy: req.body.ReferredBy,
    }

    let insertdata = await investorregistermodel(data)
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


exports.weblogin = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }
    let getdata = await websiteregistermodel.find(data)

    let newtoken;
    jwt.sign({ newtoken }, webkey, (err, value) => {
        res.send({
            getdata,
            Token: value
        })
    })
}


exports.forgotpassword = async (req, res) => {
    let data = {
        Email: req.body.Email
    }

    let getdata = await websiteregistermodel.find(data)
    if (getdata.length != 0) {
        res.send(getdata[0].Email)
    }
    else {
        res.send({
            Status: 0,
            Message: "No User Found"
        })
    }
}

exports.forgototp = async (req, res) => {
    let data = {
        Email: req.body.Email,
        OTP: Math.floor(1000 + Math.random() * 8000)
    }

    console.log(data)
    try {
        const info = await transporter.sendMail({
            from: 'hivexv', // sender address
            to: `${data.Email}`, // list of receivers
            subject: "forgot password OTP", // Subject line
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