const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./bookRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/book-crud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Use the CRUD routes
app.use('/api', bookRoutes);

// Base route
app.get('/', (req, res) => {
    res.send('Welcome to the Book CRUD API');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${8080}`);
});
