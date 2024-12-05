const mongoose = require('mongoose');

const WaterIntakeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Links to a user
    amount: { type: Number, required: true }, // Amount of water in milliliters
    date: { type: Date, default: Date.now }, // Timestamp of the intake
});

module.exports = mongoose.model('WaterIntake', WaterIntakeSchema);
