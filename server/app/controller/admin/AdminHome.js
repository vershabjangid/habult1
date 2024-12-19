const adminhomemodel = require("../../model/admin/AdminHomeModel")
let fs = require('fs')
let path = require('path')
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

exports.viewHomeBanner=async (req,res)=>{
    let viewdata = await adminhomemodel.find()
    let imgurl =  "https://api.hivexv.com/uploads/"
    res.send({
        imgurl,
        viewdata
    })
}