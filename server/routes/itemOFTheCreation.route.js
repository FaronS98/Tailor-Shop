var express = require('express'); 
var app = module.exports = express.Router(); 
var ItemOfTheCreation = require('../models/itemOfTheCreation.model');

app.get('/ItemOfTheCreation/', (req, res) => {
    ItemOfTheCreation.find({}, (err, items) => {   
        if (err) {
            return res.json({ "error": err });
        } else {
            console.log(items);
            return res.status(200).json(items);
        }
    });
});
