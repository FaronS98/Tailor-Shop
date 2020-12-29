const express = require('express');
const Fabric = require('../models/fabric.model');
const router = express.Router();

router.get('/', ( req , res ) =>{
    //dodanie do bazy fabrics 26 elementow
    // for(let i=1; i<26; i++){
    // let name = "fabric"+i+".jpg";
    // let price = 1 + (Math.round(Math.random()*10) /10);
    // const fabricData = new Fabric({
    //     name: name,
    //     price: price,
    //     type: 'fabric'
    // });

    // fabricData.save((err) => {
    //     console.log(err);
    // });
    // }

    // Fabric.find({},(err,data) =>{
    //     console.log(data);
    // });

    // res.render('fabric', {tittle: "Fabric"});

    Fabric.find({},(err,data) =>{
        res.json(data);
    });
});

module.exports = router;
