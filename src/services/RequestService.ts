import http from "../http-common";
import DataResponse from "../types/DataResponse";

// Function to fetch data from the API
const fetchData = async (): Promise<DataResponse> => {
    try {
        const response = await http.get<DataResponse>('/api');
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const RequestService = {
    fetchData
};

export default RequestService;