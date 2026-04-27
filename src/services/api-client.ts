import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../interfaces/FetchResponse";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: import.meta.env.VITE_RAWG_API_KEY
    }
});

class APICLient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint, config)
            .then((res) => res.data);
    };
}

export default APICLient;
