var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var ItemOfTheCreationSchema = new Schema(
    {    
        src: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }
);
 
module.exports = mongoose.model('ItemOfTheCreation', ItemOfTheCreationSchema);