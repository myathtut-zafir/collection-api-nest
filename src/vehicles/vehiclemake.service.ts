import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Makes } from 'src/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class VehicleMake {
  constructor(
    @InjectRepository(Makes)
    private readonly makeRpository: Repository<Makes>,
  ) {}
  getVehicleMakes() {
    return this.makeRpository.find({
      relations: {
        models: true,
      },
    });
  }
}
