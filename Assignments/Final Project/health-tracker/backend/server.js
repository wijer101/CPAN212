const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const waterRoutes = require('./routes/water'); // Import water routes
const exerciseRoutes = require('./routes/exercise'); // Import exercise routes

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/water', waterRoutes); // Add water intake routes
app.use('/api/exercise', exerciseRoutes); // Add exercise log routes

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
