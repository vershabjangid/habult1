let express = require('express');
const { categories, viewcategory, updatecategory, deletecategory } = require('../../controller/admin/Category');
let categoryroutes = express.Router();

categoryroutes.post('/createcategory',categories)
categoryroutes.get('/viewcategory',viewcategory)
categoryroutes.put('/updatecategory',updatecategory)
categoryroutes.delete('/deletecategory',deletecategory)

module.exports = categoryroutes