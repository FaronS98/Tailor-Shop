var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var FabricSchema = new Schema(
    {    
        name: {
            type: String,
            required: true
        },
        qualityrPrice: {
            type: Number,
            required: true
        },
        src: {
            type: String,
            required: true
        }
    }
);
 
module.exports = mongoose.model('Fabric', FabricSchema);