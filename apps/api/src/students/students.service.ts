import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
	constructor(
		@InjectRepository(Student)
		private readonly studentRepository: Repository<Student>
	) {}

	async findAll(): Promise<Student[]> {
		return this.studentRepository.find();
	}

	async findActive(): Promise<Student[]> {
		return this.studentRepository.find({ where: { isActive: true } });
	}

	async findInactive(): Promise<Student[]> {
		return this.studentRepository.find({ where: { isActive: false } });
	}

	async findOne(id: number): Promise<Student> {
		const student = await this.studentRepository.findOne({ where: { id } });
		if (!student)
			throw new NotFoundException(
				`Estudiante con id: ${id} no encontrado`
			);
		return student;
	}

	async remove(id: number): Promise<Student> {
		const student = await this.findOne(id);
		await this.studentRepository.delete(student);
		return student;
	}

	async create(createStudentDto: CreateStudentDto): Promise<Student> {
		const student = this.studentRepository.create(createStudentDto);
		return this.studentRepository.save(student);
	}

	async update(
		id: number,
		updateStudentDto: UpdateStudentDto
	): Promise<Student> {
		const student = await this.findOne(id);
		this.studentRepository.merge(student, updateStudentDto);
		return this.studentRepository.save(student);
	}
}
