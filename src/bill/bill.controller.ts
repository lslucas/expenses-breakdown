import { Controller, Res, Req, Post, Put, Param, Delete } from '@nestjs/common';
import { BillService } from './bill.service';
import { Request, Response } from 'express';
import { BillData, ODate } from 'src/expenses-breakdown/expenses-breakdown.interface';

@Controller('/expenses-breakdown/:eb/bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  /*
  @Get('/:id')
  async find(@Param('eb') eb: string, @Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await this.billService.find(eb, id)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(404).send({success: false, message: err.message}))
    ;
  }

  @Get()
  async findAll(@Param('eb') eb: string): Promise<ExpenseBreakdown[]> {
    return await this.billService.findAll(eb);
  }
  */

  @Post()
  async create(@Param('eb') eb: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const data = req.body as unknown as ODate;
    return await this.billService.create(eb, data.odate)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Put('/:id')
  async update(@Param('eb') eb: string, @Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const body = req.body as unknown as BillData;
    return await this.billService.update(eb, id, body)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Delete('/:id')
  async delete(@Param('eb') eb: string, @Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await this.billService.delete(eb, id)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }
}
