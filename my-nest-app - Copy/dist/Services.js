"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
let StudentService = class StudentService {
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
                return ("Data Not Found");
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
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)()
], StudentService);
//# sourceMappingURL=Services.js.map