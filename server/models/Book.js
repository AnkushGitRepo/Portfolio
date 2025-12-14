const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    review: {
        type: String, // Your personal take
    },
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);
