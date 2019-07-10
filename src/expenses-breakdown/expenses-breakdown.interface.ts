import { Document, Types } from 'mongoose';

// tslint:disable-next-line: no-empty-interface
export interface ExpenseBreakdown extends Document {}

export interface BillData {
  _id?: object;
  owner: Types.ObjectId;
  bill: Types.ObjectId;
  payedAt?: Date;
}

export interface ODate {
  odate: Date;
}

export interface ExpenseBreakdownData {
  _id: object;
  house: Types.ObjectId;
  odate: Date;
  bills: BillData[];
  createdAt: Date;
  updatedAt: Date;
}
