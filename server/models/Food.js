
import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  image: { type: String },
  category: { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

const Food = mongoose.model('Food', foodSchema);

export default Food;
