import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from 'src/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehiclepository: Repository<Vehicle>,
  ) {}
  getVehicles() {
    return this.vehiclepository.find();
  }
}
