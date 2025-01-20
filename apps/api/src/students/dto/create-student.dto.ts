import { IsBoolean, IsDate, IsNumber, IsString, IsUrl } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateStudentDto {
	@IsString()
	name: string;

	@IsString()
	lastname: string;

	@Transform(({ value }) => new Date(value))
	@IsDate()
	birthdate: Date;

	@IsString()
	email: string;

	@IsNumber()
	phoneNumber: string;

	@IsString()
	address: string;

	@IsString()
	gender?: 'male' | 'female' | 'other';

	@IsUrl()
	image?: string;

	@IsBoolean()
	isActive: boolean;
}
