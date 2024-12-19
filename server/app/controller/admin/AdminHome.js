const adminhomemodel = require("../../model/admin/AdminHomeModel")

exports.AdminHomeController = async (req, res) => {
    let data = {
        HomeHeading: req.body.HomeHeading,
        HomeSubHeading: req.body.HomeSubHeading,
        HomeParagraph: req.body.HomeParagraph,
        HomeBanner: req.files[0].filename,
    }


    let insertdata = await adminhomemodel(data)
    insertdata.save()
        .then((res) => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 1,
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