import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import BooksEntity from './books.entity';

@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 40 })
  name: string;

  @OneToMany( type => BooksEntity , book => book.user)
  books: BooksEntity[];
}