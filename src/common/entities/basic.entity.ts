import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BasicEntity {
  @PrimaryGeneratedColumn({
    type: 'int',
  })
  id: number = 0;

  @CreateDateColumn({
    type: 'datetime',
  })
  createdAt: Date = new Date();

  @UpdateDateColumn({
    type: 'datetime',
  })
  updatedAt: Date = new Date();
}
