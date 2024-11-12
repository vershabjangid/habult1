let nodemailer = require('nodemailer')

const IndustryModel = require("../../model/admin/IndustryModel")
const investorregistermodel = require("../../model/web/InvestorAuth")
const websiteregistermodel = require("../../model/web/Webauthmodel")
const addteammodel = require('../../model/admin/Team')
let emailpass = process.env.EMAILPASS




const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "jangidvershab23@gmail.com",
        pass: emailpass,
    },
});


exports.getmembers = async (req, res) => {
    let getdata = await investorregistermodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        getdata,
        imgurl
    }
    )
}



exports.getstartups = async (req, res) => {
    let getdata = await websiteregistermodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        getdata,
        imgurl
    }
    )
}



exports.updatestartups = async (req, res) => {

    let data = {
        Email: req.body.Email,
        Message: req.body.Message
    }

    console.log(req.body)
    if (req.body.Activestatus == "reject") {
        try {
            const info = transporter.sendMail({
                from: 'hivexv', // sender address
                to: `${data.Email}`, // list of receivers
                subject: "forgot password OTP", // Subject line
                text: `hello user welcome to hivexv`, // plain text body
                html: `${data.Message}`, // html body
            });

            let update = await websiteregistermodel.updateOne({ _id: req.body._id }, { Activestatus: req.body.Activestatus })
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

        catch {
            res.send({
                Status: 1,
                Message: "Email Not Found",
            })
        }

    }

    else {


        let update = await websiteregistermodel.updateOne({ _id: req.body._id }, { Activestatus: req.body.Activestatus })
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
}






exports.updateinvestors = async (req, res) => {

    let data = {
        Email: req.body.Email,
        Message: req.body.Message
    }

    console.log(req.body)
    if (req.body.Activestatus == "reject") {
        try {
            const info = transporter.sendMail({
                from: 'hivexv', // sender address
                to: `${data.Email}`, // list of receivers
                subject: "forgot password OTP", // Subject line
                text: `hello user welcome to hivexv`, // plain text body
                html: `${data.Message}`, // html body
            });

            let update = await investorregistermodel.updateOne({ _id: req.body._id }, { Activestatus: req.body.Activestatus })
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

        catch {
            res.send({
                Status: 1,
                Message: "Email Not Found",
            })
        }

    }

    else {


        let update = await investorregistermodel.updateOne({ _id: req.body._id }, { Activestatus: req.body.Activestatus })
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
}





exports.addindustry = async (req, res) => {
    let data = {
        Industry: req.body.Industry
    }

    console.log(data)

    let insertdata = await IndustryModel(data)
    insertdata.save()
        .then(() => {
            res.send(
                {
                    Status: "1",
                    Message: "Data Inserted Successfully"
                }
            )
        })
        .catch((error) => {
            if (error.code == 11000) {
                res.send(
                    {
                        Status: "0",
                        Message: "Data Already Exists"
                    }
                )
            }
            else {
                res.status(400).send(
                    {
                        Status: "0",
                        Message: "Data Missing"
                    }
                )
            }
        })
}



exports.viewindustry = async (req, res) => {
    let viewdata = await IndustryModel.find()
    res.send(
        viewdata
    )
}



exports.updateindustry = async (req, res) => {


    let updatedata = await IndustryModel.updateOne({ _id: req.body._id }, { Industry: req.body.Industry })
        .then(() => {
            res.send(
                {
                    Status: "1",
                    Message: "Data Updated Successfully"
                }
            )
        })
        .catch((error) => {
            if (error.code == 11000) {
                res.send(
                    {
                        Status: "0",
                        Message: "Data Already Exists"
                    }
                )
            }
            else {
                res.status(400).send(
                    {
                        Status: "0",
                        Message: "Data Missing"
                    }
                )
            }
        })
}



exports.deleteindustry = async (req, res) => {

    console.log(req.body)
    let updatedata = await IndustryModel.deleteOne({ _id: req.body._id })
        .then(() => {
            res.send(
                {
                    Status: "1",
                    Message: "Data Deleted Successfully"
                }
            )
        })
        .catch((error) =>
            res.status(400).send(
                {
                    Status: "0",
                    Message: "Data Missing"
                }
            )
        )
}




exports.addteam = async (req, res) => {
    console.log(req.files)
    let data = {
        First_Name: req.body.First_Name,
        Last_Name: req.body.Last_Name,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Password: req.body.Password,
        Aadhar_Card: req.files[0].filename,
        Pan_Card: req.files[1].filename,
        Address: req.body.Address,
        Bank_Name: req.body.Bank_Name,
        Account_Number: req.body.Account_Number,
        IFSC_Code: req.body.IFSC_Code,
        Bank_Proof: req.files[2].filename,
        Reffered_Code: Math.floor(1000 + Math.random() * 8000)
    }


    let insertdata = await addteammodel(data)
    insertdata.save()
        .then(() => {
            res.send(
                {
                    Status: "1",
                    Message: "Data Inserted Successfully"
                }
            )
        })
        .catch((error) => {
            if (error.code == 11000) {
                res.send(
                    {
                        Status: "0",
                        Message: "Data Already Exists"
                    }
                )
            }
            else {
                res.status(400).send(
                    {
                        Status: "0",
                        Message: "Data Missing"
                    }
                )
            }
        })
}



exports.viewteam = async (req,res) => {
    let viewteam = await addteammodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewteam,
        imgurl
    })
}

