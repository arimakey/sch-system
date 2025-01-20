import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';

@Controller('students')
export class StudentsController {
	constructor(private readonly studentsService: StudentsService) {}
	@Get()
	async findAll(): Promise<Student[]> {
		return this.studentsService.findAll();
	}

	@Get('active')
	async findActive(): Promise<Student[]> {
		return this.studentsService.findActive();
	}

	@Get('inactive')
	async findInactive(): Promise<Student[]> {
		return this.studentsService.findInactive();
	}

	@Post()
	async create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
		return this.studentsService.create(createStudentDto);
	}

	@Get(':id')
	async findOne(@Param('id') id: number): Promise<Student> {
		return this.studentsService.findOne(id);
	}

	@Put(':id')
	async update(
		@Param('id') id: number,
		@Body() updateStudentDto: UpdateStudentDto
	): Promise<Student> {
		return this.studentsService.update(id, updateStudentDto);
	}

	@Delete(':id')
	async remove(@Param('id') id: number): Promise<Student> {
		return this.studentsService.remove(id);
	}
}
