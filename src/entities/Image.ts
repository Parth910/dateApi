import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('images')
export class Like extends BaseEntity {
    @PrimaryGeneratedColumn('uuid') id: string;
    @Column({
        type: 'text'
    })
    userid: string;
}