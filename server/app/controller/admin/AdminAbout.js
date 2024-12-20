const aboutbannermodel = require("../../model/admin/AdminAboutBanner")
let fs = require('fs')
let path = require('path')
const aboutcontentmodel = require("../../model/admin/AdminAboutContent")
const adminaboutourmissionmodel = require("../../model/admin/AdminAboutWhyChoose")
const adminourvisionsmodel = require("../../model/admin/AdminOurVision")
let dirpath = path.join(__dirname, '../../../uploads')

exports.Addaboutbannercontroller = async (req, res) => {
    let data = {
        AboutHeading: req.body.AboutHeading,
        AboutParagraph: req.body.AboutParagraph,
        AboutBanner: req.files[0].filename
    }


    let viewdata = await aboutbannermodel.find()

    if (viewdata.length == 0) {
        let insertdata = await aboutbannermodel(data)
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



exports.viewadboutbannercontroller = async (req, res) => {
    let viewdata = await aboutbannermodel.find()
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}














exports.Addaboutcontentcontroller = async (req, res) => {
    console.log(req.body)
    let data = {
        About_Content: req.body.About_Content,
    }

    let insertdata = await aboutcontentmodel(data)
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



exports.viewadboutcontentcontroller = async (req, res) => {
    let viewdata = await aboutcontentmodel.find()
    res.send({
        viewdata
    })
}








exports.AdminaboutOurMission = async (req, res) => {
    console.log(req.body)
    let data = {
        WhyChooseParagraph: req.body.WhyChooseParagraph,
        WhyChooseBanner: req.files[0].filename
    }


    let viewdata = await adminaboutourmissionmodel.find()

    if (viewdata.length == 0) {

        let insertdata = await adminaboutourmissionmodel(data)
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


exports.viewadboutourmissioncontroller = async (req, res) => {
    let viewdata = await adminaboutourmissionmodel.find()
    res.send({
        viewdata
    })
}

















exports.AdminaboutOurVisioncontroller = async (req, res) => {
    console.log(req.body)
    let data = {
        OurVisionParagraph: req.body.OurVisionParagraph,
        OurVisionBanner: req.files[0].filename
    }


    let viewdata = await adminourvisionsmodel.find()

    if (viewdata.length == 0) {

        let insertdata = await adminourvisionsmodel(data)
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


exports.viewadboutourvisioncontroller = async (req, res) => {
    let viewdata = await adminourvisionsmodel.find()
    res.send({
        viewdata
    })
}
