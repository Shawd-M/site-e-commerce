const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Masque = new Schema({
    title: String,
    description: String,
    price: Number,
    image: String
});

module.exports = mongoose.model('Masque', Masque);