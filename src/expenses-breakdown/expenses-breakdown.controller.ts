import { Controller, Get, Res, Req, Post, Put, Param, Delete } from '@nestjs/common';
import { ExpenseBreakdownService } from './expenses-breakdown.service';
import { ExpenseBreakdownData, ExpenseBreakdown } from './expenses-breakdown.interface';
import { Request, Response } from 'express';

@Controller('/expenses-breakdown')
export class ExpenseBreakdownController {
  constructor(private readonly houseService: ExpenseBreakdownService) {}

  @Get('/:id')
  async find(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await this.houseService.find(id)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(404).send({success: false, message: err.message}))
    ;
  }

  @Get()
  async findAll(): Promise<ExpenseBreakdown[]> {
    return await this.houseService.findAll();
  }

  @Post()
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const data = req.body as unknown as ExpenseBreakdownData;
    return await this.houseService.create(data)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const body = req.body as unknown as ExpenseBreakdownData;
    return await this.houseService.update(id, body)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await this.houseService.delete(id)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }
}
