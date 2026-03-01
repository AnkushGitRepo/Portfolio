console.log('--- STARTING SERVER.JS ---');
console.log('Loading express...');
const express = require('express');
console.log('Loading dotenv...');
const dotenv = require('dotenv');
console.log('Loading cors...');
const cors = require('cors');
console.log('Loading db...');
const connectDB = require('./config/db');

console.log('Loading env vars...');
// Load env vars
dotenv.config();

console.log('Calling connectDB...');
// Connect to database
connectDB();

console.log('Creating app...');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes Placeholder
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Import Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/books', require('./routes/books'));
app.use('/api/playlists', require('./routes/playlists'));
app.use('/api/contact', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
