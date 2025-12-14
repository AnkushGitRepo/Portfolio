const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    spotifyEmbedUrl: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Playlist', playlistSchema);
