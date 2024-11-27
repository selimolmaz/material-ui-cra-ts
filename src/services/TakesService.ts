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

    

}

export default TakesService;