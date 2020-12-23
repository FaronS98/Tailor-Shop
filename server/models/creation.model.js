var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var CreationSchema = new Schema(
    {    
        frontId: {
            type: Number,
            required: true
        },
        bottomId: {
            type: Number,
            required: true
        },
        backId: {
            type: Number,
            required: true
        },
        beltId: {
            type: Number,
            required: true
        },
        fabricId: {
            type: Number,
            required: true
        },        
        price: {
            type: Number,
            required: true
        },
        userName: {
            type: String,
            required: false
        },
        userSurname: {
            type: String,
            required: false
        },
        userEmail: {
            type: String,
            required: false
        },
        userTelephoneNumber: {
            type: Number,
            required: false
        },
        bustCircumference:{
            type: Number,
            required: true
        },
        waistCircumference:{
            type: Number,
            required: true
        },
        hipCircumference:{
            type: Number,
            required: true
        },
        growth:{
            type: Number,
            required: true
        },
        dateOfOrder: {
            type: Date,
            required: false
        }
    }
);
 
module.exports = mongoose.model('Creation', CreationSchema);