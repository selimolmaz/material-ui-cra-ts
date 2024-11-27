import CourseDTO from "./CourseDTO"

interface SectionDTO {
    courseId: string
    secId: string
    semester : string
    year: number
    building: string
    roomNumber: string
    timeSlotId: string
    course: CourseDTO
    classRoom: CourseDTO
}

export default SectionDTO;