import axios from "axios";
import { BASE_URL } from "./config";
import TeachesDTO from "../models/TeachesDTO";

class TeachesService {
    async getTeachesByCourseId(courseId: string): Promise<TeachesDTO[]> {
        try {
            const response = await axios.get(`${BASE_URL}/teaches/course/${courseId}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}

export default TeachesService;