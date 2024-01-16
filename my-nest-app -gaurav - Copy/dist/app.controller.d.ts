import StudentDetailsDTO from './StudentDtailsDTO';
import { StudentInterface } from './Interface';
export declare class StudentController {
    private readonly studentInterface;
    constructor(studentInterface: StudentInterface);
    getAllProducts(): Promise<any>;
    getStudentById(id: number): Promise<any>;
    addStudents(studentDetails: StudentDetailsDTO): Promise<any>;
}
