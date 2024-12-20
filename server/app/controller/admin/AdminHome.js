const adminhomemodel = require("../../model/admin/AdminHomeModel")
let fs = require('fs')
let path = require('path')
const AdminHomeAboutModel = require("../../model/admin/AdminHomeAbout")
const Adminwhychoosemodel = require("../../model/admin/AdminHomeWhyChoose")
let dirpath = path.join(__dirname, '../../../uploads')


exports.AdminHomeController = async (req, res) => {
    let data = {
        HomeHeading: req.body.HomeHeading,
        HomeSubHeading: req.body.HomeSubHeading,
        HomeParagraph: req.body.HomeParagraph,
        HomeBanner: req.files[0].filename,
    }


    let viewdata = await adminhomemodel.find();
    console.log(viewdata)

    if (viewdata.length == 0) {
        let insertdata = await adminhomemodel(data)
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



exports.viewHomeBanner = async (req, res) => {
    let viewdata = await adminhomemodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        imgurl,
        viewdata
    })
}














exports.AdminHomeAboutController = async (req, res) => {
    let data = {
        HomeAboutHeading: req.body.HomeAboutHeading,
        HomeAboutParagraph: req.body.HomeAboutParagraph,
        HomeAboutBanner: req.files[0].filename,
    }

    console.log(req.body)


    let viewdata = await AdminHomeAboutModel.find();
    console.log(viewdata)

    if (viewdata.length == 0) {
        let insertdata = await AdminHomeAboutModel(data)
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


exports.viewHomeAbout = async (req, res) => {
    let viewdata = await AdminHomeAboutModel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        imgurl,
        viewdata
    })
}


















exports.AdminHomeWhyChooseController = async (req, res) => {
    console.log(req.files)
    let data = {
        HomeWhyChooseHeading:req.body.HomeWhyChooseHeading,
        HomeWhyChooseAboutParagraph:req.body.HomeWhyChooseAboutParagraph,
        HomeWhyChooseAboutBanner:req.files[0].filename,
    }

    let insertdata = await Adminwhychoosemodel(data)
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


exports.ViewAdminHomeWhyChoose = async (req, res) => {
    let viewdata = await Adminwhychoosemodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        imgurl,
        viewdata
    })
}