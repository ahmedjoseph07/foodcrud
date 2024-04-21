import express from 'express';
import { createFood, getAllFoods, updateFood, deleteFood } from '../controllers/foodController.js';

const router = express.Router();


router.post('/', createFood);


router.get('/', getAllFoods);


router.put('/:id', updateFood);


router.delete('/:id', deleteFood);

export default router;
