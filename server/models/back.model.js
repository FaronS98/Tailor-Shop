var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var backSchema = new Schema({
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

module.exports = mongoose.model('Back', backSchema);