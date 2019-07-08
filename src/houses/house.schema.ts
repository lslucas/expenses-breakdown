import * as mongoose from 'mongoose';

export const HouseSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  owner: { type: mongoose.Types.ObjectId, required: true },
  name: { type: String, required: true, trim: true },
  location: { type: String, required: false, trim: true },
  visible: { type: Boolean, default: false },
  description: String,
  rules: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
});
