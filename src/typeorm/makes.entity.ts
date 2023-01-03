import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Models } from './models.entity';
@Entity()
export class Makes {
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
  @OneToMany(() => Models, (model) => model.make)
  models: Models[];
}
