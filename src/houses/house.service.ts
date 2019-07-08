import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { House, HouseData } from './house.interface';
import { InjectModel } from '@nestjs/mongoose';
import * as crypto from 'crypto';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel('House') private readonly servModel: Model<House>,
  ) {}

  async find(code: string): Promise<House> {
    const item = await this.servModel.findOne({code}).exec();
    if (!item) {
      throw Error('house not found!');
    }
    return item;
  }

  async findAll(): Promise<House[]> {
    return await this.servModel.find().exec();
  }

  async create(data: HouseData): Promise<House> {
    const alreadyCreated = await this.servModel.findOne({name: data.name, owner: data.owner}).exec();
    if (alreadyCreated) {
      throw Error('house already exists!');
    }
    data.code = this.randomCode();
    const houseData = new this.servModel(data);
    return await houseData.save();
  }

  async update(id: string, data: HouseData): Promise<House> {
    data.updatedAt = new Date();
    return await this.servModel.findOneAndUpdate({_id: id}, data, (err, doc: House) => {
      if (err) {
        throw Error(err);
      }
      return doc;
    });
  }

  async delete(id: string): Promise<any> {
    return await this.servModel.findOneAndDelete({_id: id});
  }

  /**
   *
   * @param code unique code of the houses
   * Check if the unique code was alrady taken
   */
  async randomCodeIsUnique(code: string): Promise<boolean> {
    return await this.servModel.findOne({code}) ? true : false;
  }

  /**
   *
   * @param length of the generated code
   * Create a new and unique random code
   */
  randomCode(length: number = 4): string {
    let randomCode = '';
    do {
      const buf = crypto.randomBytes(48);
      randomCode = buf.toString('hex').substring(0, length).toUpperCase();
    } while (!this.randomCodeIsUnique(randomCode));
    return randomCode;
  }
}
