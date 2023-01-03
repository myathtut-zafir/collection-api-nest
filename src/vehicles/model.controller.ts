import { Controller, Get, Param } from '@nestjs/common';
import { VehicleModelService } from './vehiclemodel.service';

@Controller('models')
export class ModleController {
  constructor(private readonly modelService: VehicleModelService) {}
  @Get('/:id')
  getModels(@Param('id') id: number) {
    return this.modelService.getVehicleModels(id);
  }
}
