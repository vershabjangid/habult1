const investorformmodel = require("../../model/web/Investorformmodel");

exports.viewadmininvestor = async (req, res) => {
    let viewdata = await investorformmodel.find();
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}