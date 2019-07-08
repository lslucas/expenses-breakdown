import * as mongoose from 'mongoose';

export const BillSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, required: true },
  price: mongoose.Types.Decimal128,
  payedAt: Date,
}, {versionKey: false});

export const ExpenseBreakdownSchema = new mongoose.Schema({
  house: { type: mongoose.Types.ObjectId, required: true },
  odate: Date,
  bill: [BillSchema],
  createdAt: {type: Date, default: Date.now},
  updatedAt: Date,
});
