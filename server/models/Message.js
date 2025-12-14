const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    reason: {
        type: String, // e.g., "Job Opportunity", "Consulting"
    },
    message: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
