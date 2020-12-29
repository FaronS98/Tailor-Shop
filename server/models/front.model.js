var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var frontSchema = new Schema({
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

module.exports = mongoose.model('Front', frontSchema);