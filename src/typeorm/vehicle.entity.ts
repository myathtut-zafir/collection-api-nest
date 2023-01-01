import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Vehicle {
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

  @Column({
    name: 'otr_price',
    nullable: true,
    default: '',
  })
  otr_price: string;
}
