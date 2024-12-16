import http from "../http-common";
import DataResponse from "../types/DataResponse";
import SourceCodeResponse from "../types/SourceCodeResponse";
import SortAlgorithmPost from "../types/SortAlgorithmPost";
import SortAlgorithmResponse from "../types/SortAlgorithmResponse";

// Function to fetch data from the API
const fetchData = async (mapPath: string): Promise<DataResponse> => {
    try {
        const response = await http.get<DataResponse>(mapPath);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const fetchAlgorithmSourceCode = async (mapPath: string): Promise<SourceCodeResponse> => {
    try {
        const response = await http.get<SourceCodeResponse>(mapPath);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

const runAlgorithm = async (mapPath: string, postData: SortAlgorithmPost): Promise<SortAlgorithmResponse> => {
    try {
        const response = await http.post<SortAlgorithmResponse>(mapPath, postData);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const fetchDataStructureSourceCode = async (mapPath: string): Promise<SourceCodeResponse> => {
    try {
        const response = await http.get<SourceCodeResponse>(mapPath);
        return response.data;
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const RequestService = {
    fetchData,
    fetchAlgorithmSourceCode,
    runAlgorithm,
    fetchDataStructureSourceCode
};

export default RequestService;