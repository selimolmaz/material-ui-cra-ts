import axios from "axios";
import StudentDTO from "../models/StudentDTO";
import { BASE_URL } from "./config";

class StudentService {
    
    async getStudentsByDeptName(deptName: string): Promise<StudentDTO[]> {
        const response = await axios.get(`${BASE_URL}/students/department/${deptName}`);
        return response.data;
      }
}

export default StudentService;