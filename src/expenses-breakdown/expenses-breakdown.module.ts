import { Module } from '@nestjs/common';
import { ExpenseBreakdownController } from './expenses-breakdown.controller';
import { ExpenseBreakdownService } from './expenses-breakdown.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseBreakdownSchema } from './expenses-breakdown.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'ExpenseBreakdown', schema: ExpenseBreakdownSchema }])],
  controllers: [ExpenseBreakdownController],
  providers: [
    ExpenseBreakdownService,
  ],
})
export class ExpenseBreakdownModule {}
