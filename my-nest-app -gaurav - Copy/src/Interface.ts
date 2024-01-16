import { promises } from "dns";
import StudentDtailsDTO from "./StudentDtailsDTO";
import { Injectable, InjectionToken } from '@nestjs/common';

export  interface StudentInterface {

    getAllStudent()  :any ;
    

    getStudentById(id:number) : any;

    addStudent(studentDtailsDTO: StudentDtailsDTO) : any;


}