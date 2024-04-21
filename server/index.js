import express from 'express';
import mongoose from 'mongoose';
import foodRoutes from './routes/foodRoutes.js';

const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/foodDB');


app.use('/api/foods', foodRoutes);

const PORT = 5173;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
