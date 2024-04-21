// routes/foodRoutes.js

import express from 'express';
import { createFood, getAllFoods, updateFood, deleteFood } from '../controllers/foodController.js';

const router = express.Router();

// Create a new food item
router.post('/', createFood);

// Get all food items
router.get('/', getAllFoods);

// Update a food item by ID
router.put('/:id', updateFood);

// Delete a food item by ID
router.delete('/:id', deleteFood);

export default router;
