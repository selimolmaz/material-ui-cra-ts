import axios from "axios";
import { BASE_URL } from "./config";
import PrereqDTO from "../models/PrereqDTO";

class PrereqService {

    async getPrereqsByCourseId(courseId: string): Promise<PrereqDTO[]> {
        try {
            const response = await axios.get(`${BASE_URL}/prereqs/course/${courseId}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}

export default PrereqService;