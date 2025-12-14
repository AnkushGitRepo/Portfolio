const Message = require('../models/Message');

// @desc    Create a new message
// @route   POST /api/contact
// @access  Public
const createMessage = async (req, res) => {
    try {
        const { name, email, reason, message } = req.body;
        const newMessage = new Message({
            name,
            email,
            reason,
            message,
        });
        const createdMessage = await newMessage.save();
        res.status(201).json(createdMessage);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all messages (for admin)
// @route   GET /api/contact
// @access  Private
const getMessages = async (req, res) => {
    try {
        const messages = await Message.find({}).sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createMessage, getMessages };
