import { promises } from "dns";
import StudentDtailsDTO from "./StudentDtailsDTO";
import { InjectionToken } from '@nestjs/common';

export  interface StudentInterface {

    getAllStudent()  :any ;
    

    getStudentById(id:number) : any;

    addStudent(studentDtailsDTO: StudentDtailsDTO) : any;


}