var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var CreationSchema = new Schema(
    {    
        frontItem: {
            name: {
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            type:{
                type: String,
                required: true
            }
        },
        bottomItem: {
            name: {
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            type:{
                type: String,
                required: true
            }
        },
        backItem: {
            name: {
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            type:{
                type: String,
                required: true
            }
        },
        beltItem: {
            name: {
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            type:{
                type: String,
                required: true
            }
        },
        fabricItem: {
            name: {
                type: String,
                required: true
            },
            price:{
                type: Number,
                required: true
            },
            type:{
                type: String,
                required: true
            }
        },        
        price: {
            type: Number,
            required: true
        },
        user: {
            type: String,
            required: false
        },
        dateOfOrder: {
            type: String,
            required: false
        },
        user: {
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
                required: false
            },
            waistCircumference:{
                type: Number,
                required: false
            },
            hipCircumference:{
                type: Number,
                required: false
            },
            growth:{
                type: Number,
                required: false
            }
        }, 
        dateOfOrder: {
            type: Date,
            default: Date.now
        }
    }
);
 
module.exports = mongoose.model('Creation', CreationSchema);