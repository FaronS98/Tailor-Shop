const express = require('express');
const Bottom = require('../models/bottom.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    
    Bottom.find({},(err,data) =>{
        res.json(data);
    });

});

module.exports = router;
