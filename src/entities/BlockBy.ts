import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('blockby')
export class BlockBy extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column()
    userId: string;
    @ManyToOne(() => User, user => user.blockbys)
    @JoinColumn({ name: "userId" })
    user: User;
}