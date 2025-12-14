const express = require('express');
const router = express.Router();
const { getBooks, createBook } = require('../controllers/bookController');

router.route('/').get(getBooks).post(createBook);

module.exports = router;
