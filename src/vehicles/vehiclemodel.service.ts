import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'src/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class VehicleModelService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRpository: Repository<Model>,
  ) {}
  getVehicleModels(id: number) {
    return this.modelRpository.find({
      relations: {
        make: false,
      },
      where: { make: { id: id } },
    });
  }
}
