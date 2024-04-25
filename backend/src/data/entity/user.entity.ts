import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { AppDataSource } from "../data-source";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  email: string;
}

export const getUserRepository = () => {
  return AppDataSource.getRepository(User);
};

export type UserRepository = ReturnType<typeof getUserRepository>;
