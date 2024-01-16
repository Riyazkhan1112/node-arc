import StudentDtailsDTO from "./StudentDtailsDTO";
export interface StudentInterface {
    getAllStudent(): any;
    getStudentById(id: number): any;
    addStudent(studentDtailsDTO: StudentDtailsDTO): any;
}
