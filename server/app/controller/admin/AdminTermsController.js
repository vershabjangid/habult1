const TermsBannerModel = require("../../model/admin/AdminTermsBanner")

exports.AddTermsBanner = async (req, res) => {
    let data = {
        TermsHeading: req.body.TermsHeading,
        TermsSubHeading: req.body.TermsSubHeading,
        TermsParagraph: req.body.TermsParagraph,
        TermsBanner: req.files[0].filename,
    }

    let viewdata = await TermsBannerModel.find()

    if (viewdata.length == 0) {

        let insertdata = await TermsBannerModel(data)
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




exports.ViewTermsBanner = async (req, res) => {
    let viewdata = await TermsBannerModel.find();
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}