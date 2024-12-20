const aboutbannermodel = require("../../model/admin/AdminAboutBanner")

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
            })
    }
    else {
        res.send({
            Status: 0,
            Message: "Data Already Inserted"
        })
    }
}