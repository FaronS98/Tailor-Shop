var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var ItemOFTheCreationSchema = new Schema(
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
 
module.exports = mongoose.model('ItemOFTheCreation', ItemOFTheCreationSchema);