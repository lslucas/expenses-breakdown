import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { FinanceWall, FinanceWallData } from './finance-wall.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FinanceWallService {
  constructor(
    @InjectModel('FinanceWall') private readonly servModel: Model<FinanceWall>,
  ) {}

  async find(id: string): Promise<FinanceWall> {
    const item = await this.servModel.findOne({_id: id}).exec();
    if (!item) {
      throw Error('bill not found!');
    }
    return item;
  }

  async findAll(): Promise<FinanceWall[]> {
    return await this.servModel.find().exec();
  }

  async create(data: FinanceWallData): Promise<FinanceWall> {
    const alreadyCreated = await this.servModel.findOne({name: data.title, owner: data.owner, house: data.house}).exec();
    if (alreadyCreated) {
      throw Error('bill already exists!');
    }
    const houseData = new this.servModel(data);
    return await houseData.save();
  }

  async update(id: string, data: FinanceWallData): Promise<FinanceWall> {
    return await this.servModel.findOneAndUpdate({_id: id}, data, (err, doc: FinanceWall) => {
      if (err) {
        throw Error(err);
      }
      return doc;
    });
  }

  async delete(id: string): Promise<any> {
    return await this.servModel.findOneAndDelete({_id: id});
  }

}
