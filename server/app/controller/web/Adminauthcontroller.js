const websiteregistermodel = require("../../model/web/Webauthmodel")
const nodemailer = require("nodemailer");
let jwt = require('jsonwebtoken');
const investorregistermodel = require("../../model/web/InvestorAuth");
require('dotenv').config()
let webkey = process.env.KEY
let emailpass = process.env.EMAILPASS


exports.webregister = async (req, res) => {
    let data = {
        Join_as: req.body.Join_as,
        Email: req.body.Email,
        Phone: req.body.Phone,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Company_Name: req.body.Company_Name,
        Industry: req.body.Industry,
        LinkedinUrl: req.body.LinkedinUrl,
        Company_Pan: req.files[0].filename,
        Website: req.body.Website,
        Funding_Ask: req.body.Funding_Ask,
        Stage: req.body.Stage,
        Equity_Dilution: req.body.Equity_Dilution,
        ReferredBy: req.body.ReferredBy,
        Logo: req.files[1].filename,
        Company_Description: req.body.Company_Description,
        TeamProfile1: req.files[2].filename,
        TeamName1: req.body.TeamName1,
        TeamDesignation1: req.body.TeamDesignation1,
        TeamExperience1: req.body.TeamExperience1,
        TeamProfile2: req.files[3].filename,
        TeamName2: req.body.TeamName2,
        TeamDesignation2: req.body.TeamDesignation2,
        TeamExperience2: req.body.TeamExperience2,
        Highlight1: req.body.Highlight1,
        Highlight2: req.body.Highlight2,
        Highlight3: req.body.Highlight3,
        Highlight4: req.body.Highlight4,
        Highlight5: req.body.Highlight5,
        BackersProfile1: req.files[4].filename,
        BackersName1: req.body.BackersName1,
        BackersDesignation1: req.body.BackersDesignation1,
        BackersExperience1: req.body.BackersExperience1,
        BackersProfile2: req.files[5].filename,
        BackersName2: req.body.BackersName2,
        BackersDesignation2: req.body.BackersDesignation2,
        BackersExperience2: req.body.BackersExperience2,
        Problem: req.body.Problem,
        Solution: req.body.Solution,
        Market_Size: req.body.Market_Size,
        Competition: req.body.Competition,
        Video_Link: req.body.Video_Link,
        Pitch_Deck: req.files[6].filename,
        Incorporation_Certificate: req.files[7].filename,
        Financial_Projection: req.files[8].Financial_Projection,
        TermsAndConditions: req.body.TermsAndConditions,
        Activestatus: "ok",
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



exports.webregisterotp = async (req, res) => {
    console.log(req.body)
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
        jwt.sign({ newtoken }, webkey, { expiresIn: '2h' }, (err, value) => {
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

    let data = {
        AadharCard: req.files[1].filename,
        AccountNumber: req.body.AccountNumber,
        Address: req.body.Address,
        All_Instructions: req.body.All_Instructions,
        BankName: req.body.BankName,
        BankProof: req.files[2].filename,
        Company_Name: req.body.Company_Name,
        Email: req.body.Email,
        IFSC_Code: req.body.IFSC_Code,
        Join_as: req.body.Join_as,
        Pan: req.files[0].filename,
        Password: req.body.Password,
        Phone: req.body.Phone,
        Activestatus: "ok",
        TermsAndConditions: req.body.TermsAndConditions,
        ReferredBy: req.body.ReferredBy,
    }

    console.log(req.body)

    let insertdata = await investorregistermodel(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch(async (error) => {
            if (error.code == 11000) {
                res.send({
                    Status: 0,
                    Message: "Data Already Exists"
                })

            }
            else {
                res.status(401).send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })

}




exports.updateinvestorregister = async (req, res) => {
    let updatedata = await investorregistermodel.updateOne({ Email: req.body.Email }, { Password: req.body.Password })
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






exports.webinvestorlogin = async (req, res) => {
    console.log(req.body)
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }
    let getdata = await investorregistermodel.find(data)

    let newtoken;
    jwt.sign({ newtoken }, webkey, { expiresIn: '2h' }, (err, value) => {
        res.send({
            getdata,
            Token: value
        })
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




exports.weblogin = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }
    let getdata = await websiteregistermodel.find(data)

    let newtoken;
    jwt.sign({ newtoken }, webkey, { expiresIn: '2h' }, (err, value) => {
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


exports.forgotinvestorpassword = async (req, res) => {
    let data = {
        Email: req.body.Email
    }

    let getdata = await investorregistermodel.find(data)
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
        jwt.sign({ newtoken }, webkey, { expiresIn: '2h' }, (err, value) => {
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