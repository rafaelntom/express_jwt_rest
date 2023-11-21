import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import * as bcrypt from "bcryptjs";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: "json", nullable: true })
  phone: { number: string; ddd: string };

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @Column({ type: "timestamp", nullable: true })
  lastLogin: Date;

  @BeforeUpdate()
  updateLastLogin() {
    this.lastLogin = new Date();
  }

  @BeforeUpdate()
  @BeforeInsert()
  hashUserPassword() {
    if (!bcrypt.getRounds(this.password)) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }
}
