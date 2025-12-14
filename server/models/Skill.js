const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    category: {
        type: String, // e.g., "Languages", "Frameworks"
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    iconUrl: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
