import StudentDetailsDTO from './StudentDtailsDTO';
import { StudentInterface } from './Interface';
export declare class StudentService implements StudentInterface {
    private readonly pool;
    getAllStudent(): Promise<any>;
    addStudent(studentDetailsDTO: StudentDetailsDTO): Promise<any>;
    getStudentById(id: number): Promise<any>;
    DeleteStudentById(id: number): Promise<any>;
}
