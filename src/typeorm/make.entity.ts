import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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
}
