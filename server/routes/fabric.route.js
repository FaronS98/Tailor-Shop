var express = require('express'); 
var app = module.exports = express.Router(); 
var Fabric = require('../models/fabric.model');

// GET, get all fabric
app.get('/fabric/', (req, res) => {
    Fabric.find({}, (err, fabrics) => {   
        if (err) {
            return res.json({ "error": err });
        } else {
            console.log(fabrics);
            return res.status(200).json(fabrics);
        }
    });
});
