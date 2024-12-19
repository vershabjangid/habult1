const registermodel = require("../../model/web/Authmodel")

exports.updateprofilestatus = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Status: req.body.Status
    }


    let update = await registermodel.updateOne({ Email: req.body.Email },{Status : req.body.Status})
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