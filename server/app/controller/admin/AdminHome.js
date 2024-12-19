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
    .then((res)=>{
        
    })
}