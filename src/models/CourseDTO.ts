import DepartmentDTO from "./DepartmentDTO"

interface CourseDTO {
    courseId: string
    title: string
    deptName: string
    credits: number
    department: DepartmentDTO
}

export default CourseDTO;