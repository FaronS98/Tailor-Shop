var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fabricSchema = new Schema({
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
});

module.exports = mongoose.model('Fabric', fabricSchema);