import InstructorDTO from "./InstructorDTO";
import SectionDTO from "./SectionDTO";

interface TeachesDTO {
    instructorId: string;
    courseId: string;
    secId: string;
    semester: string;
    year: number;
    section: SectionDTO;
    instructor: InstructorDTO;
}

export default TeachesDTO;