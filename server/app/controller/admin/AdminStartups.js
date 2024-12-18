const startupformmodel = require("../../model/web/Startupformmodel");

exports.viewadminstartup = async (req, res) => {
    let viewdata = await startupformmodel.find();
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}

exports.updateadminstartups = async (req, res) => {
    console.log(req.body)
    let data = {
        Email: req.body.Email,
        Status: req.body.Status
    }


    let update = await startupformmodel.updateOne({ Email: req.body.Email }, { Status: req.body.Status })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Updated Successfully"
            })
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "User Alredy Exists"
                })
            }
            else {
                res.status(400).send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })

}