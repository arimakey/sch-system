import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({})
export class Student {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	lastname: string;

	@Column()
	birthdate: Date;

	@Column()
	email: string;

	@Column({
		nullable: true,
	})
	phoneNumber: string;

    @Column({
        nullable: true
    })
    address: string

	@Column({
		enum: ['male', 'female', 'other'],
	})
	gender?: 'male' | 'female' | 'other';

	@Column({
		nullable: true,
	})
	image?: string;

	@Column({
		default: true,
	})
	isActive: boolean;
}
