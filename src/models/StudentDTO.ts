import DepartmentDTO from "./DepartmentDTO";

interface StudentDTO {
    id: string;
    name: string;
    totCred: number;
    deptName: string;
    department: DepartmentDTO;
}
export default StudentDTO;