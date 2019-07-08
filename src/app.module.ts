import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseModule } from './houses/house.module';
import { FinanceWallModule } from './finance-wall/finance-wall.module';
import { ExpenseBreakdownModule } from './expenses-breakdown/expenses-breakdown.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/mr', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }),
    UserModule,
    HouseModule,
    FinanceWallModule,
    ExpenseBreakdownModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
