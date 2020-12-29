const express = require('express');
const Belt = require('../models/belt.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
   
    Belt.find({},(err,data) =>{
        res.json(data);
    });

});

module.exports = router;
