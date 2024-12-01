import SectionDTO from "./SectionDTO";
import StudentDTO from "./StudentDTO";

interface TakesDTO {
    studentId: string;
    courseId: string;
    secId: string;
    semester: string;
    year: number;
    grade: string;
    section: SectionDTO;
    student: StudentDTO;
}

export default TakesDTO;