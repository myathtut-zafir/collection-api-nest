import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Make } from 'src/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class VehicleMake {
  constructor(
    @InjectRepository(Make)
    private readonly makeRpository: Repository<Make>,
  ) {}
  getVehicleMakes() {
    return this.makeRpository.find();
  }
}
