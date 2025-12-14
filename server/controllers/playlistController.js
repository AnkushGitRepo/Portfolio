const Playlist = require('../models/Playlist');

// @desc    Get all playlists
// @route   GET /api/playlists
// @access  Public
const getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({});
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a playlist
// @route   POST /api/playlists
// @access  Private
const createPlaylist = async (req, res) => {
    try {
        const playlist = new Playlist(req.body);
        const createdPlaylist = await playlist.save();
        res.status(201).json(createdPlaylist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getPlaylists, createPlaylist };
