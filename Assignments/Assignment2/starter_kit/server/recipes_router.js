const express = require('express');
const Recipe = require('./models/recipe');
const mongoose = require('mongoose');

const router = express.Router();

// Export router
module.exports = router;

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new recipe
router.post('/', async (req, res) => {
    const { name, description, difficulty, ingredients, steps } = req.body;

    try {
        const newRecipe = new Recipe({
            name,
            description,
            difficulty,
            ingredients,
            steps,
        });

        const savedRecipe = await newRecipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a recipe by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid recipe ID format' });
    }

    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json(recipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// PUT to update a recipe by ID
router.put('/:id', async (req, res) => {
    const { name, description, difficulty, ingredients, steps } = req.body;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            { name, description, difficulty, ingredients, steps },
            { new: true }
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        res.status(200).json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// DELETE a recipe by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
