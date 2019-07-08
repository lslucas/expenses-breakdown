import { Document, Types } from 'mongoose';

// tslint:disable-next-line: no-empty-interface
export interface FinanceWall extends Document {}

export interface FinanceWallData {
  _id: object;
  house: Types.ObjectId;
  owner: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  installments: number;
  createdAt: Date;
}
