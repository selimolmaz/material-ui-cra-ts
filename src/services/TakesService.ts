import axios from "axios";
import { BASE_URL } from "./config";

class TakesService {

    async getTakesByStudentId(studentId: string) {
        try {
            const response = await axios.get(`${BASE_URL}/takes/${studentId}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }

    async getTakesBySectionId(courseId: string, secId: string, semester: string, year: number) {
        try {
            const response = await axios.get(`${BASE_URL}/takes/section/${courseId}/${secId}/${semester}/${year}`);
            return response.data;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    }

    

}

export default TakesService;