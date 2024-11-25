import DepartmentDTO from "./DepartmentDTO";

interface InstructorDTO {
    id: string;
    name: string;
    salary: number;
    deptName: string;
    department: DepartmentDTO;
}

export default InstructorDTO;