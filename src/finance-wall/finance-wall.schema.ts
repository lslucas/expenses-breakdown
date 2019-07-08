import * as mongoose from 'mongoose';

export const FinanceWallSchema = new mongoose.Schema({
  house: { type: mongoose.Types.ObjectId, required: true },
  owner: { type: mongoose.Types.ObjectId, required: true },
  title: { type: String, required: true, trim: true },
  description: String,
  price: { type: mongoose.Types.Decimal128 },
  installments: Number,
  createdAt: Date,
});
