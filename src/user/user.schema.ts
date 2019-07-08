import * as mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  budget: mongoose.Types.Decimal128,
  preferedLivingLocation: String,
  bio: String,
  habits: String,
  pic: String,
  visible: { type: Boolean, default: true },
}, { _id: false});

const personalDataSchema = new mongoose.Schema({
  cpf: String,
  rg: String,
  birthdate: Date,
  phone: String,
}, { _id: false });

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date },
  active: { type: Boolean, default: true },
  profile: profileSchema,
  personalData: personalDataSchema,
});
