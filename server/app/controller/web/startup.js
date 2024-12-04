const investorformmodel = require("../../model/web/Investorformmodel")
let fs = require('fs')
let path = require('path')
const startupformmodel = require("../../model/web/Startupformmodel")
let dirpath = path.join(__dirname, '../../../uploads')
console.log(dirpath)


exports.startupform = async (req, res) => {
    console.log(req.body)
    console.log(req.files)
    let data = {
        Company_Name: req.body.Company_Name,
        Company_Pan: req.body.Company_Pan,
        Email: req.body.Email,
        Funding_Ask: req.body.Funding_Ask,
        Industry: req.body.Industry,
        Linkedin_Url: req.body.Linkedin_Url,
        Stage: req.body.Stage,
        Website_Url: req.body.Website_Url,
        Equity: req.body.Equity,
        Company_Logo: req.body.Company_Logo,
        Company_Description: req.body.Company_Description,
        Highlights1: req.body.Highlights1,
        Highlights2: req.body.Highlights2,
        Team_Profile: req.body.Team_Profile,
        Team_Name: req.body.Team_Name,
        Team_Designation: req.body.Team_Designation,
        Team_Experience: req.body.Team_Experience,
        Team_Profile1: req.body.Team_Profile1,
        Team_Name1: req.body.Team_Name1,
        Team_Designation1: req.body.Team_Designation1,
        Team_Experience1: req.body.Team_Experience1,
        Backers_Profile: req.body.Backers_Profile,
        Backers_Name: req.body.Backers_Name,
        Backers_Designation: req.body.Backers_Designation,
        Backers_Experience: req.body.Backers_Experience,
        Backers_Profile1: req.body.Backers_Profile1,
        Backers_Name1: req.body.Backers_Name1,
        Backers_Designation1: req.body.Backers_Designation1,
        Backers_Experience1: req.body.Backers_Experience1,
        Video_Link: req.body.Video_Link,
        Competitor: req.body.Competitor,
        Market_Size: req.body.Market_Size,
        Solution: req.body.Solution,
        Problem_Statement: req.body.Problem_Statement,
        Financial_Projection: req.body.Financial_Projection,
        Pitch_Deck: req.body.Pitch_Deck,
        Incorporation_Certificate: req.body.Incorporation_Certificate,
        Terms_Conditions: req.body.Terms_Conditions
    }

    let insertdata = await startupformmodel(data)
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
                    Message: "Data Already Exists"
                })
                let fileunlink = fs.unlinkSync(`${dirpath}/${req.files[0].filename}`)
                let fileunlink1 = fs.unlinkSync(`${dirpath}/${req.files[1].filename}`)
                let fileunlink3 = fs.unlinkSync(`${dirpath}/${req.files[2].filename}`)
                let fileunlink4 = fs.unlinkSync(`${dirpath}/${req.files[3].filename}`)
                let fileunlink5 = fs.unlinkSync(`${dirpath}/${req.files[4].filename}`)
                let fileunlink6 = fs.unlinkSync(`${dirpath}/${req.files[5].filename}`)
                let fileunlink7 = fs.unlinkSync(`${dirpath}/${req.files[6].filename}`)
                let fileunlink8 = fs.unlinkSync(`${dirpath}/${req.files[7].filename}`)
                let fileunlink9 = fs.unlinkSync(`${dirpath}/${req.files[8].filename}`)
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })
}