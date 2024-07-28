import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../interfaces/FetchResponse";

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '663d2ae1fb0d449fa60aef4416b96fee'
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
