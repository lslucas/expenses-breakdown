import { Injectable } from '@nestjs/common';
import { ExpenseBreakdown, BillData, ExpenseBreakdownData } from 'src/expenses-breakdown/expenses-breakdown.interface';
import { FinanceWallService } from 'src/finance-wall/finance-wall.service';
import { ExpenseBreakdownService } from 'src/expenses-breakdown/expenses-breakdown.service';
import { HouseService } from 'src/houses/house.service';

@Injectable()
export class BillService {
  constructor(
    private financeWallService: FinanceWallService,
    private expensesBreakdown: ExpenseBreakdownService,
    private houseService: HouseService,
  ) {}

  async create(eb: string, odate: Date): Promise<ExpenseBreakdownData> {
    console.log(`Criando expenses breakdown para odate {$odate}`);
    const expenses = await this.expensesBreakdown.find(eb);
    const house = await this.houseService.find(expenses.house);

    const bills = [];

    const users = [house.owner];
    users.concat(house.people);

    users.forEach(async (u) => {
      const financeWall = await this.financeWallService.findAllByOwner(u);
      financeWall.forEach((b) => {
        bills.push({
          owner: u,
          bill: b._id,
        });
      });
    });

    expenses.bills = bills as BillData[];

    return expenses;
  }

  async update(eb: string, id: string, data: BillData): Promise<any> {
    /*
    // should remove and create a new one
    return await this.servModel.findOneAndUpdate({_id: id}, data, (err, doc: Bill) => {
      if (err) {
        throw Error(err);
      }
      return doc;
    });
    */
  }

  async delete(eb: string, id: string): Promise<any> {
    // return await this.servModel.findOneAndDelete({_id: id});
  }

}
