import { Module } from '@nestjs/common';
import { FinanceWallController } from './finance-wall.controller';
import { FinanceWallService } from './finance-wall.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FinanceWallSchema } from './finance-wall.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'FinanceWall', schema: FinanceWallSchema }])],
  controllers: [FinanceWallController],
  providers: [
    FinanceWallService,
  ],
})
export class FinanceWallModule {}
