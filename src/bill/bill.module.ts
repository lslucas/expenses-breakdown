import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { FinanceWallService } from 'src/finance-wall/finance-wall.service';
import { ExpenseBreakdownService } from 'src/expenses-breakdown/expenses-breakdown.service';
import { HouseService } from 'src/houses/house.service';

@Module({
  imports: [FinanceWallService],
  controllers: [BillController],
  providers: [
    BillService,
    ExpenseBreakdownService,
    HouseService,
  ],
})
export class BillModule {}
