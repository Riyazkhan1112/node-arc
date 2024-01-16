import StudentDetailsDTO from './StudentDtailsDTO';
import { StudentService } from './Services';
export declare class StudentController {
    private readonly studentInterface;
    constructor(studentInterface: StudentService);
    getAllProducts(): Promise<any>;
    getStudentById(id: number): Promise<any>;
    addStudents(studentDetails: StudentDetailsDTO): Promise<any>;
}
