const investorformmodel = require("../../model/web/Investorformmodel")
let fs = require('fs')
let path = require('path')
let dirpath = path.join(__dirname, '../../../uploads')
console.log(dirpath)


exports.investorform = async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    let data = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Phone: req.body.Phone,
        Status: false,
        AadhaarCard: req.files[0].filename,
        Address: req.body.Address,
        Email: req.body.Email,
        PanCard: req.files[1].filename,
        Bank_Name: req.body.Bank_Name,
        Account_Number: req.body.Account_Number,
        IFSC_Code: req.body.IFSC_Code,
        Bank_Proof: req.files[2].filename,
    }

    let insertdata = await investorformmodel(data)
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
                    Message: "Data Already Exists"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
            let fileunlink = fs.unlinkSync(`${dirpath}/${req.files[0].filename}`)
            let fileunlink1 = fs.unlinkSync(`${dirpath}/${req.files[1].filename}`)
            let fileunlink2 = fs.unlinkSync(`${dirpath}/${req.files[2].filename}`)
        })
}


exports.viewinvestor = async (req, res) => {
    let viewdata = await investorformmodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}

exports.deleteform = async (req, res) => {

    let deleteone = await industrymodel.deleteOne({ _id: req.body._id })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Deleted Successfully"
            })
            let fileunlink = fs.unlinkSync(`${dirpath}/${req.files[0].filename}`)
            let fileunlink1 = fs.unlinkSync(`${dirpath}/${req.files[1].filename}`)
            let fileunlink2 = fs.unlinkSync(`${dirpath}/${req.files[2].filename}`)
        })
        .catch((error) => {
            res.send({
                Status: 0,
                Message: "Data Missing"
            })
        })

}