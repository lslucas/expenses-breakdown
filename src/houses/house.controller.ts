import { Controller, Get, Res, Req, Post, Put, Param, Delete } from '@nestjs/common';
import { HouseService } from './house.service';
import { HouseData, House } from './house.interface';
import { Request, Response } from 'express';

@Controller('/houses')
export class HouseController {
  constructor(private readonly houseService: HouseService) {}

  @Get('/:code')
  async findByCode(@Param('code') code: string, @Res() res: Response): Promise<Response> {
    return await this.houseService.findByCode(code)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(404).send({success: false, message: err.message}))
    ;
  }

  @Get()
  async findAll(): Promise<House[]> {
    return await this.houseService.findAll();
  }

  @Post()
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const data = req.body as unknown as HouseData;
    return await this.houseService.create(data)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const body = req.body as unknown as HouseData;
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
