import { Controller, Get, Post, Body, Param, ParseIntPipe , Inject } from '@nestjs/common';
import StudentDetailsDTO from './StudentDtailsDTO';
import{ StudentInterface} from './Interface';

@Controller()
export class StudentController {
  constructor( @Inject() private readonly studentInterface: StudentInterface) {}

  @Get()
  async getAllProducts() {
    return await this.studentInterface.getAllStudent();
  }

  @Get(':id')
  async getStudentById(@Param('id' , ParseIntPipe) id: number) {
    return this.studentInterface.getStudentById(id);
  }


  @Post()
     async addStudents(@Body() studentDetails : StudentDetailsDTO)
     {
      return await this.studentInterface.addStudent(studentDetails);
     }
  
}