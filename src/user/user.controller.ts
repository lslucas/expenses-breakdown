import { Controller, Get, Res, Req, Post, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserData, User } from './user.interface';
import { Request, Response } from 'express';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:email')
  async find(@Param('email') email: string, @Res() res: Response): Promise<Response> {
    return await this.userService.find(email)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(404).send({success: false, message: err.message}))
    ;
  }

  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async create(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const data = req.body as unknown as UserData;
    return await this.userService.create(data)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Req() req: Request, @Res() res: Response): Promise<Response> {
    const body = req.body as unknown as UserData;
    return await this.userService.update(id, body)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }

  @Delete('/:id')
  async delete(@Param('id') id: string, @Res() res: Response): Promise<Response> {
    return await this.userService.delete(id)
      .then((resp) => res.send(resp))
      .catch((err) => res.status(409).send({success: false, message: err.message}))
    ;
  }
}
