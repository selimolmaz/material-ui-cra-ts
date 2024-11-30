import axios from 'axios';
import { BASE_URL } from "./config";
import CourseDTO from '../models/CourseDTO';

class CourseService {
    getCourseByDeptName(deptName: string): Promise<CourseDTO[]> {
        return axios.get(`${BASE_URL}/courses/dept/${deptName}`)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                return [];
            });
    }
}

export default CourseService;