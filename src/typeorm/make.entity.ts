import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Model } from './model.entity';
@Entity()
export class Make {
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
  @OneToMany(() => Model, (model) => model.make)
  models: Model[];
}
