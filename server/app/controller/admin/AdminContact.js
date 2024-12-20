const AdminContactBannerModal = require("../../model/admin/AdminContactBanner")
let fs = require('fs')
let path = require('path')
let dirpath = path.join(__dirname, '../../../uploads')



exports.AddAdminContactBanner = async (req, res) => {
    console.log(req.body)
    let data = {
        AdminContactHeading: req.body.AdminContactHeading,
        AdminContactParagraph: req.body.AdminContactParagraph,
        AdminContactBanner: req.files[0].filename
    }


    let viewdata = await AdminContactBannerModal.find()

    if (viewdata.length == 0) {

        let insertdata = await AdminContactBannerModal(data)
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
                let fileunlink = fs.unlinkSync(`${dirpath}/${req.files[0].filename}`)
            })
    }
    else {
        res.send({
            Status: 0,
            Message: "Data Already Inserted"
        })
        let fileunlink = fs.unlinkSync(`${dirpath}/${req.files[0].filename}`)
    }
}


exports.ViewAdminContactBanner = async (req, res) => {
    let viewdata = await AdminContactBannerModal.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}