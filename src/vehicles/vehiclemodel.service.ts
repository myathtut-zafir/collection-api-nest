import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Models } from 'src/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class VehicleModelService {
  constructor(
    @InjectRepository(Models)
    private readonly modelRpository: Repository<Models>,
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
