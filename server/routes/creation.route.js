const express = require('express'); 
const Creation = require('../models/creation.model');
const router = express.Router();
 
// GET, get all creation
router.get('/', ( req , res ) =>{
   
    Creation.find({},(err,data) =>{
        res.json(data);
    });

});


// POST new creation
router.post('/', (req, res) => {
    
    const creation = req.body.creation;
    const creationData = new Creation({
       frontItem:{
        name: creation.frontItem.name,
        price: creation.frontItem.price,
        type: creation.frontItem.type
       },
       bottomItem:{
        name: creation.bottomItem.name,
        price: creation.bottomItem.price,
        type: creation.bottomItem.type
       },
       backItem:{
        name: creation.backItem.name,
        price: creation.backItem.price,
        type: creation.backItem.type
       },
       beltItem:{
        name: creation.beltItem.name,
        price: creation.beltItem.price,
        type: creation.beltItem.type
       },
       fabricItem:{
        name: creation.fabricItem.name,
        price: creation.fabricItem.price,
        type: creation.fabricItem.type
       },
       price: creation.price,
       user:{
        userName: creation.user.userName,
        userSurname: creation.user.userSurname,
        userEmail: creation.user.userEmail,
        userTelephoneNumber: creation.user.userTelephoneNumber,
        bustCircumference: creation.user.bustCircumference,
        waistCircumference: creation.user.waistCircumference,
        hipCircumference: creation.user.hipCircumference,
        growth: creation.user.growth
       },
       dateOfOrder: this.default
      
    });

    creationData.save((err) => {
        console.log(err);
    });    
});

module.exports = router;