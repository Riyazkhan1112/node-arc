"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const pg_1 = require("pg");
class StudentService {
    constructor() {
        this.pool = new pg_1.Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'Student',
            password: 'Password',
            port: 5432,
        });
    }
    async getAllStudent() {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM Student');
            return result.rows;
        }
        finally {
            client.release();
        }
    }
    async addStudent(studentDetailsDTO) {
        const client = await this.pool.connect();
        try {
            const result = await client.query(`
          INSERT INTO Student(student_id, first_name, last_name)
          VALUES($1, $2, $3)
          RETURNING *
        `, [studentDetailsDTO.student_id, studentDetailsDTO.first_name, studentDetailsDTO.last_name]);
            return result.rows[0];
        }
        finally {
            client.release();
        }
    }
    async getStudentById(id) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM Student WHERE student_id = $1', [id]);
            if (result == null)
                throw new Error();
            return result.rows[0];
        }
        finally {
            client.release();
        }
    }
    async DeleteStudentById(id) {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT * FROM Student WHERE student_id = $1', [id]);
            if (result == null)
                return ("Data Not Found");
            return "Data Delete Sucessfully ";
        }
        finally {
            client.release();
        }
    }
}
exports.StudentService = StudentService;
//# sourceMappingURL=Services.js.map