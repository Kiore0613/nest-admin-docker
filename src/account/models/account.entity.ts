import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Accounts {
  @PrimaryGeneratedColumn('uuid')
  id_account: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
