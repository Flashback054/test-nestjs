import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Hello {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
