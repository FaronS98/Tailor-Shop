const express = require('express');
const Front = require('../models/front.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
   
    Front.find({},(err,data) =>{
        res.json(data);
    });
});

module.exports = router;
