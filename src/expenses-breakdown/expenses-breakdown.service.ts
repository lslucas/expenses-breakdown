import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ExpenseBreakdown, ExpenseBreakdownData } from './expenses-breakdown.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ExpenseBreakdownService {
  constructor(
    @InjectModel('ExpenseBreakdown') private readonly servModel: Model<ExpenseBreakdown>,
  ) {}

  async find(id: string): Promise<ExpenseBreakdown> {
    const item = await this.servModel.findOne({_id: id}).exec();
    if (!item) {
      throw Error('expense not found!');
    }
    return item;
  }

  async findAll(): Promise<ExpenseBreakdown[]> {
    return await this.servModel.find().exec();
  }

  async create(data: ExpenseBreakdownData): Promise<ExpenseBreakdown> {
    const alreadyCreated = await this.servModel.findOne({odate: data.odate, house: data.house}).exec();
    if (alreadyCreated) {
      throw Error('expense already exists!');
    }
    const expenseData = new this.servModel(data);
    return await expenseData.save();
  }

  async update(id: string, data: ExpenseBreakdownData): Promise<ExpenseBreakdown> {
    return await this.servModel.findOneAndUpdate({_id: id}, data, (err, doc: ExpenseBreakdown) => {
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
