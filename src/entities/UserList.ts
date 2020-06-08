import {BaseEntity, Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users')
export class UserList extends BaseEntity{
@PrimaryGeneratedColumn('uuid') id: string;
@Column({
    type:'text'
})
name: string;
@Column({
    type:'text'
})
email: string;
@Column({
    type:'text'
})
password: string;
@Column({
    type:'text'
})
token: string;


}