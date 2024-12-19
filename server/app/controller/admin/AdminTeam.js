const teammodal = require("../../model/admin/Teammodal")
let fs = require('fs')
let path = require('path')
let dirpath = path.join(__dirname, '../../../uploads')

exports.addteam = async (req, res) => {
    let data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Phone: req.body.Phone,
        AadhaarCard: req.files[0].filename,
        Address: req.body.Address,
        Email: req.body.Email,
        PanCard: req.files[1].filename,
        Bank_Name: req.body.Bank_Name,
        Account_Number: req.body.Account_Number,
        IFSC_Code: req.body.IFSC_Code,
        Bank_Proof: req.files[2].filename,
        Profile_Id: Math.floor(1000 + Math.random() * 8000) + "HV",
    }

    let insertdata = await teammodal(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "Data Already Inserted"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}


exports.viewteam = async (req, res) => {
    let imgurl = "https://api.hivexv.com/uploads/"
    let viewteam = await teammodal.find();
    res.send({
        imgurl,
        viewteam
    })
}

exports.updateteam = async (req, res) => {

    let data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Phone: req.body.Phone,
        Address: req.body.Address,
        Email: req.body.Email,
        Bank_Name: req.body.Bank_Name,
        Account_Number: req.body.Account_Number,
        IFSC_Code: req.body.IFSC_Code,
    }
    let updatedata = await teammodal.updateOne({ _id: req.body._id }, data)
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "Data Already Inserted"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}


exports.deleteteam = async (req, res) => {
    let fileunlink = fs.unlinkSync(`${dirpath}/${req.body.AadhaarCard}`)
    let fileunlink1 = fs.unlinkSync(`${dirpath}/${req.body.PanCard}`)
    let fileunlink2 = fs.unlinkSync(`${dirpath}/${req.body.Bank_Proof}`)

    let deleteone = await teammodal.deleteOne({ _id: req.body._id })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Deleted Successfully"
            })
        })
        .catch((error) => {
            res.send({
                Status: 0,
                Message: "Data Missing"
            })
        })

}