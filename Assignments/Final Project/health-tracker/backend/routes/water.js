const express = require('express');
const WaterIntake = require('../models/WaterIntake');
const verifyToken = require('./authMiddleware'); // Import middleware if routes are protected
const router = express.Router();

// Add a new water intake record
router.post('/', verifyToken, async (req, res) => {
    const { amount } = req.body;

    try {
        const newRecord = new WaterIntake({
            userId: req.user.id, // Assumes user ID is extracted via middleware
            amount,
        });

        await newRecord.save();
        res.status(201).json(newRecord);
    } catch (error) {
        res.status(500).json({ message: 'Error saving water intake', error: error.message });
    }
});

// Get all water intake records for a user
router.get('/', verifyToken, async (req, res) => {
    try {
        const records = await WaterIntake.find({ userId: req.user.id }).sort({ date: -1 }); // Sorted by date descending
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching water intake', error: error.message });
    }
});

// Clear all water intake records for a user
router.delete('/', verifyToken, async (req, res) => {
    try {
        await WaterIntake.deleteMany({ userId: req.user.id });
        res.status(200).json({ message: 'All water intake records deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting records', error: error.message });
    }
});

module.exports = router;
