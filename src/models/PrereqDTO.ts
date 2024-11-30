import CourseDTO from "./CourseDTO";

interface PrereqDTO {
    courseId: string;
    prereqId: string;
    course: CourseDTO;
    prerequisiteCourse: CourseDTO;
}
export default PrereqDTO;