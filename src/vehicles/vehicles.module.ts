import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Make, Vehicle } from 'src/typeorm';
import { MakeController } from './makes.controller';
import { VehicleMake } from './vehiclemake.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Make])],
  controllers: [VehiclesController, MakeController],
  providers: [VehiclesService, VehicleMake],
})
export class VehiclesModule {}
