import axios from "axios";
import StudentDTO from "../models/StudentDTO";
import { BASE_URL } from "./config";

class StudentService {

  async getStudentsByDeptName(deptName: string): Promise<StudentDTO[]> {
    const response = await axios.get(`${BASE_URL}/students/department/${deptName}`);
    return response.data;
  }

  async updateStudent(student: StudentDTO): Promise<StudentDTO> {
    const response = await axios.put(`${BASE_URL}/students/${student.id}`, student);
    return response.data;
  }
}

export default StudentService;