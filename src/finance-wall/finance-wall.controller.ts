import { Controller, Get, Res, Req, Post, Put, Param, Delete } from '@nestjs/common';
import { FinanceWallService } from './finance-wall.service';
import { FinanceWallData, FinanceWall } from './finance-wall.interface';
import { Request, Response } from 'express';

@Controller('/finance-wall')
export class FinanceWallController {
  constructor(private readonly houseService: FinanceWallService) {}

  @Get('/:id')
  async find(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await this.houseService.find(id)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(404).send({success: false, message: err.message}))
    ;
  }

  @Post()
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const data = req.body as unknown as FinanceWallData;
    return await this.houseService.create(data)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const body = req.body as unknown as FinanceWallData;
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
