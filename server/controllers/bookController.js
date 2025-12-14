const Book = require('../models/Book');

// @desc    Get all books
// @route   GET /api/books
// @access  Public
const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a book
// @route   POST /api/books
// @access  Private
const createBook = async (req, res) => {
    try {
        const book = new Book(req.body);
        const createdBook = await book.save();
        res.status(201).json(createdBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getBooks, createBook };
