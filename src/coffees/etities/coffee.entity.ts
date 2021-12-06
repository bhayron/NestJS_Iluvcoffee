import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Coffee {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column('json', { nullable: true })
  flavors: string[];
}
