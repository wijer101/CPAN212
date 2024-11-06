const mongoose = require("mongoose");

const laptopSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    processor: {
        type: String,
        required: true,
    },
    ram: {
        type: String,
        required: true,
        },

    storage: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    }
});

// Create the model
const Device = mongoose.model("laptops", laptopSchema);
module.exports = Device;
