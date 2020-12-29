const express = require('express');
const Back = require('../models/back.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    
    Back.find({},(err,data) =>{
        res.json(data);
    });

   
});

module.exports = router;
