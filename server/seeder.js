const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const Book = require('./models/Book');
const Playlist = require('./models/Playlist');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();
        await Book.deleteMany();
        await Playlist.deleteMany();

        const projects = [
            {
                title: 'DataHarbor',
                description: 'A platform for sharing and discovering data datasets.',
                techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
                imageUrl: 'https://via.placeholder.com/150',
                liveLink: 'https://dataharbor.example.com',
                githubLink: 'https://github.com/ankush/dataharbor',
                featured: true,
            },
            {
                title: 'Resume Builder',
                description: 'AI-powered resume builder application.',
                techStack: ['Python', 'Flask', 'React'],
                imageUrl: 'https://via.placeholder.com/150',
                liveLink: 'https://resume.example.com',
                githubLink: 'https://github.com/ankush/resume-builder',
                featured: false,
            },
        ];

        const skills = [
            { category: 'Languages', name: 'Python', iconUrl: 'python-icon.png' },
            { category: 'Languages', name: 'JavaScript', iconUrl: 'js-icon.png' },
            { category: 'Frameworks', name: 'React', iconUrl: 'react-icon.png' },
            { category: 'Tools', name: 'Git', iconUrl: 'git-icon.png' },
        ];

        const books = [
            {
                title: 'Blue Ocean Strategy',
                author: 'W. Chan Kim',
                genre: 'Business',
                coverImage: 'https://via.placeholder.com/150',
                review: 'A must-read for entrepreneurs.',
            },
        ];

        const playlists = [
            {
                title: 'Onesided Love',
                spotifyEmbedUrl: 'https://open.spotify.com/embed/playlist/dummy',
                mood: 'Melancholy',
            },
        ];

        await Project.insertMany(projects);
        await Skill.insertMany(skills);
        await Book.insertMany(books);
        await Playlist.insertMany(playlists);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Project.deleteMany();
        await Skill.deleteMany();
        await Book.deleteMany();
        await Playlist.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
