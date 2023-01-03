import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Makes } from './makes.entity';
@Entity()
export class Models {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

  @Column({
    nullable: true,
    default: '',
  })
  name: string;
  @ManyToOne(() => Makes, (make) => make.models)
  make: Makes;
}
