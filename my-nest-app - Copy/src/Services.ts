import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import StudentDetailsDTO from './StudentDtailsDTO';
import {StudentInterface}from './Interface';




@Injectable()
export class StudentService implements StudentInterface {
  private readonly pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Student',
    password: 'Password',
    port: 5432,
  });

  async getAllStudent() {

    // connect with database 
    const client = await this.pool.connect();

    try {
      const result = await client.query('SELECT * FROM Student');

      // return product  = result.rows

      return result.rows;
    } finally {
      client.release();
    }
  }

  async addStudent(studentDetailsDTO: StudentDetailsDTO){

    const client = await this.pool.connect();
    try {
      const result = await client.query(
        `
          INSERT INTO Student(student_id, first_name, last_name)
          VALUES($1, $2, $3)
          RETURNING *
        `,
        [studentDetailsDTO.student_id, studentDetailsDTO.first_name, studentDetailsDTO.last_name]
      );
  
      return result.rows[0];
    } finally {
      client.release();
    }

    
  }


  async getStudentById(id: number) : Promise<any> {
    const client = await this.pool.connect();
 
    try {
      const result = await client.query('SELECT * FROM Student WHERE student_id = $1', [id]);

      if(result == null )  throw new Error() ;

      // Assuming you want to return the first matching student (if any)
      return result.rows[0];
    }
    
    finally {
      client.release();
    }
  }


  async DeleteStudentById(id: number) : Promise<any> {
    const client = await this.pool.connect();
 
    try {
      const result = await client.query('SELECT * FROM Student WHERE student_id = $1', [id]);

      if(result == null )  return ("Data Not Found") ;

      // Assuming you want to return the first matching student (if any)
      return "Data Delete Sucessfully ";
    }
    
    finally {
      client.release();
    }
  }

}
