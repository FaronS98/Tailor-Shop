var express = require('express'); 
var app = module.exports = express.Router(); 
var Creation = require('../models/creation.model');
 
// GET, get all creation
app.get('/creation/', (res) => {
    Creation.find({}, (err, creations) => {   
        if (err) {
            return res.json({ "error": err });
        } else {
            console.log(creations);
            return res.status(200).json(creations);
        }
    });
});



// POST new creation
app.post('/creations', (req, res) => {
    var creation = new Creation();
    creation.frontId = req.body.frontId;
    creation.bottomId = req.body.bottomId;
    creation.backId = req.body.backId;
    creation.beltId = req.body.beltId;
    creation.price = req.body.price;
    creation.userName = req.body.userName;
    creation.userSurname = req.body.userSurname;
    creation.userEmail = req.body.userEmail;
    creation.userTelephoneNumber = req.body.userTelephoneNumber;
    creation.dateOfOrder = req.body.dateOfOrder;
    creation.executionDate = req.body.executionDate;

    creation.save((err) => {
        if (err) {
            return res.status(409).json({message: 'Wrong data'});
        } else {
            return res.status(201).json(creation);
        }
    });
});