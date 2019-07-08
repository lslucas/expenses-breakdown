import { Document, Types } from 'mongoose';

// tslint:disable-next-line: no-empty-interface
export interface User extends Document {}

export interface Profile {
  budget: Types.Decimal128;
  preferedLivingLocation: string;
  bio: string;
  habits: string;
  pic: string;
}

export interface PersonalData {
  cpf: string;
  rg: string;
  birthdate: Date;
  phone: string;
}

export interface UserData {
  _id: object;
  name: string;
  email: string;
  profile?: Profile;
  personalData?: PersonalData;
  createdAt: Date;
  updatedAt?: Date;
}
