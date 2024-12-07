const startupformmodel = require("../../model/web/Startupformmodel");

exports.viewadminstartup = async (req, res) => {
    let viewdata = await startupformmodel.find();
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}