import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('blocklists')
export class BlockList extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column()
    userId: string;
    @ManyToOne(() => User, user => user.blocklists)
    @JoinColumn({ name: "userId" })
    user: User;
}