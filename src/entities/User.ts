import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, JoinTable } from 'typeorm';
import { BlockList } from './BlockList';
import { BlockBy } from './BlockBy';
@Entity('user')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column({
        type: 'text'
    })
    email: string;
    @Column({
        type: 'text'
    })
    password: string;
    @Column({
        type: 'bigint',
        nullable: true
    })
    signupuniqid: number;
    @Column({
        type: 'text',
        nullable: true
    })
    imgPath: string;
    @Column({
        type: 'text',
        nullable: true
    })
    imgId: string;
    @Column({
        type: 'text',
        nullable: true
    })
    token: string;

    @Column({
        type: 'jsonb',
        array: false,
        default: () => "'[]'",
        nullable: true,
    })
    public blocklist!: Array<{ id: string }>;

    @OneToMany(() => BlockList, blocklist => blocklist.user)
    @JoinTable()
    blocklists: BlockList[];
    @OneToMany(() => BlockBy, blockby => blockby.user)
    blockbys: BlockBy[];



}