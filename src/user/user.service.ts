import { Injectable, Next } from '@nestjs/common';
import { Model } from 'mongoose';
import { User, UserData } from './user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {}

  async find(email: string): Promise<User> {
    return await this.userModel.findOne({email}).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async create(data: UserData): Promise<User> {
    if (await this.find(data.email)) {
      throw Error('email exists!');
    }
    const userData = new this.userModel(data);
    return await userData.save();
  }

  async update(id: string, data: UserData): Promise<User> {
    data.updatedAt = new Date();
    return await this.userModel.findOneAndUpdate({_id: id}, data, (err, doc: User) => {
      if (err) {
        throw Error(err);
      }
      return doc;
    });
  }

  async delete(id: string): Promise<any> {
    return await this.userModel.findOneAndDelete({_id: id});
  }
}
