import {
	IsNotEmpty,
	IsEmail,
	IsPhoneNumber,
	Length,
    IsStrongPassword,
	IsOptional,
} from 'class-validator';

export class CreateUserDto {
	@IsNotEmpty()
	@Length(3, 50)
	name: string;

	@IsNotEmpty()
	@IsStrongPassword()
	password: string;

	@IsNotEmpty()
	role: string;

	@IsNotEmpty()
	@Length(3, 30)
	username: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;


	@IsOptional()
	@IsPhoneNumber()
	phone_number: string;
}
