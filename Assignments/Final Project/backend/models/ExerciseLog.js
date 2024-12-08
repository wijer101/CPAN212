const mongoose = require('mongoose');

const ExerciseLogSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to a user
    exerciseType: { type: String, required: true }, // E.g., Running, Cycling
    duration: { type: Number, required: true }, // Duration in minutes
    intensity: { type: String, enum: ['Low', 'Medium', 'High'], required: true }, // Intensity of the exercise
    caloriesBurned: { type: Number, required: true }, // Estimated calories burned
    date: { type: Date, default: Date.now }, // Timestamp of the log
});

module.exports = mongoose.model('ExerciseLog', ExerciseLogSchema);
