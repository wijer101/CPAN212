require('dotenv').config(); // Load .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const recipeRouter = require('./recipes_router'); // Importing router
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/recipe', recipeRouter); // Route all recipe-related endpoints

// Connect to MongoDB
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
