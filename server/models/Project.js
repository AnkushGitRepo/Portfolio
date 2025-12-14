const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    techStack: {
        type: [String],
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
    },
    githubLink: {
        type: String,
    },
    featured: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
