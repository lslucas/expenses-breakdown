import { Document, Types } from 'mongoose';

// tslint:disable-next-line: no-empty-interface
export interface ExpenseBreakdown extends Document {}

export interface BillData {
  _id: object;
  owner: Types.ObjectId;
  price: number;
  payedAt: Date;
}

export interface ExpenseBreakdownData {
  _id: object;
  house: Types.ObjectId;
  odate: Date;
  bill: BillData;
  createdAt: Date;
  updatedAt: Date;
}
