
exports.updateprofilestatus = async (req, res) => {

    let data = {
        Email: req.body.Email,
        Status: req.body.Status
    }


    let update = await registermodel.updateOne({ Email: req.body.Email }, data)
        .then(() => {
            res.send({
                Status: 1,
                Message: "Register Successfully"
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