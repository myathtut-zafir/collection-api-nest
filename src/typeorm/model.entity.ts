import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Make } from './make.entity';
@Entity()
export class Model {
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
  @ManyToOne(() => Make, (make) => make.models)
  make: Make;
}
