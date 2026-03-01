const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${conn.connection.host} `);
    } catch (error) {
        console.error(`Error: ${error.message} `);
        console.warn('Continuing without DB connection...');
    }
};

module.exports = connectDB;
