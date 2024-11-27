import SectionDTO from "./SectionDTO";

interface TakesDTO {
    studentId: string;
    courseId: string;
    secId: string;
    semester: string;
    year: number;
    grade: string;
    section: SectionDTO;
    student: SectionDTO;
}

export default TakesDTO;