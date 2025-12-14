const express = require('express');
const router = express.Router();
const { getPlaylists, createPlaylist } = require('../controllers/playlistController');

router.route('/').get(getPlaylists).post(createPlaylist);

module.exports = router;
