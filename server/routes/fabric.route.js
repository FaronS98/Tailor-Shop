const express = require('express');
const Fabric = require('../models/fabric.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    
    Fabric.find({},(err,data) =>{
        res.json(data);
    });
});

module.exports = router;
