import { Controller, Get } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { VehicleMake } from './vehiclemake.service';

@Controller('makes')
export class MakeController {
  constructor(private readonly makeService: VehicleMake) {}
  @Get('/')
  getPosts() {
    return this.makeService.getVehicleMakes();
  }
}
