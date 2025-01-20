import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	password: string;

	@Column({default: 'user'})
	role: string;

	@Column({unique: true})
	username: string;

	@Column({unique: true})
	email: string;

	@Column()
	phone_number: string;
}
