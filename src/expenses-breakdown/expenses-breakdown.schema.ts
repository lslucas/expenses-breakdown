import * as mongoose from 'mongoose';

export const BillSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, required: true },
  bill: { type: mongoose.Types.ObjectId, required: true },
  payedAt: Date,
}, {versionKey: false});

export const ExpenseBreakdownSchema = new mongoose.Schema({
  house: { type: mongoose.Types.ObjectId, required: true },
  odate: Date,
  bills: [BillSchema],
  createdAt: {type: Date, default: Date.now},
  updatedAt: Date,
});
