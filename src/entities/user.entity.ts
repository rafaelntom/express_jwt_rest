import {
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ type: "varchar" })
  name: string;

  @Column({ type: "varchar", unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
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
}
