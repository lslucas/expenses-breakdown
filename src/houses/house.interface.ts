import { Document, Types } from 'mongoose';

// tslint:disable-next-line: no-empty-interface
export interface House extends Document {}

export interface HouseData {
  _id: object;
  owner: Types.ObjectId;
  code: string;
  name: string;
  people: Types.ObjectId[];
  location: string;
  visible: boolean;
  rules: string;
  description: string;
  createdAt: Date;
  updatedAt?: Date;
}
