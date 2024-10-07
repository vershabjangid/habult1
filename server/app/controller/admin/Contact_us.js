const newcontact = require("../../model/admin/Contactus")

exports.contactus = async (req, res) => {
    let data = {
        Name: req.body.Name,
        Mobile: req.body.Mobile
    }

    let insertcontact = await newcontact(data);
    insertcontact.save().then((inserting) => {
        res.send({
            "Status": "1",
            "Message": "Message Sended Successfully"
        })
    })
        .catch((error) => {
            res.send({
                "Status": "0",
                "Message": "Data Missing"
            })
        })
}

