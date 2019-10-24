const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const ItemSchema = new Schema({
    name: {
        type: String,    
        trim: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('users', ItemSchema);
