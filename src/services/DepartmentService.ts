import DepartmentDTO from "../models/DepartmentDTO";
import axios from 'axios';
import { BASE_URL } from "./config";

class DepartmentService {

    async getDepartments(): Promise<DepartmentDTO[]> {
        try {
            const response = await axios.get(`${BASE_URL}/departments`);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }

    async getDepartmentById(deptName: string): Promise<DepartmentDTO> {
        try {
            const response = await axios.get(`${BASE_URL}/departments/${deptName}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return {} as DepartmentDTO;
        }
    }

    async updateDepartment(department: DepartmentDTO): Promise<DepartmentDTO> {
        try {
            const response = await axios.put(`${BASE_URL}/departments/${department.deptName}`, department);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return {} as DepartmentDTO;
        }
    }
}

export default DepartmentService;