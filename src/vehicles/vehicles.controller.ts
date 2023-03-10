import { Controller, Get } from '@nestjs/common';
import { VehiclesService } from './vehicles.service';
import { ConfigService } from '@nestjs/config';

@Controller('vehicles')
export class VehiclesController {
  constructor(
    private readonly vehiclesService: VehiclesService, // private readonly configService: ConfigService,
  ) {}
  @Get('/')
  getPosts() {
    return this.vehiclesService.getVehicles();
  }
}
