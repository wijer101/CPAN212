const express = require('express');
const ExerciseLog = require('../models/ExerciseLog');
const verifyToken = require('./authMiddleware'); // Ensure JWT verification
const router = express.Router();

// Add a new exercise log
router.post('/', verifyToken, async (req, res) => {
    const { exerciseType, duration, intensity, caloriesBurned } = req.body;

    try {
        const newLog = new ExerciseLog({
            userId: req.user.id,
            exerciseType,
            duration,
            intensity,
            caloriesBurned,
        });

        await newLog.save();
        res.status(201).json(newLog);
    } catch (error) {
        res.status(500).json({ message: 'Error saving exercise log', error: error.message });
    }
});

// Get all exercise logs for a user
router.get('/', verifyToken, async (req, res) => {
    try {
        const logs = await ExerciseLog.find({ userId: req.user.id }).sort({ date: -1 });
        res.status(200).json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching exercise logs', error: error.message });
    }
});

// Delete all exercise logs for a user
router.delete('/', verifyToken, async (req, res) => {
    try {
        await ExerciseLog.deleteMany({ userId: req.user.id });
        res.status(200).json({ message: 'All exercise logs deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting exercise logs', error: error.message });
    }
});

module.exports = router;
