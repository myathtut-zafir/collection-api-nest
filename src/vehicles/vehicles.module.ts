import { Module } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Make, Model, Vehicle } from 'src/typeorm';
import { MakeController } from './makes.controller';
import { VehicleMake } from './vehiclemake.service';
import { ModleController } from './model.controller';
import { VehicleModelService } from './vehiclemodel.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Make, Model])],
  controllers: [VehiclesController, MakeController, ModleController],
  providers: [VehiclesService, VehicleMake, VehicleModelService],
})
export class VehiclesModule {}
