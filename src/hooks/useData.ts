// import { useState, useEffect } from "react";
// import { AxiosRequestConfig, CanceledError } from "axios";
// import apiClient from "../services/api-client";
// import { FetchResponse } from "../interfaces/FetchResponse";


// const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
//     const [data, setData] = useState<T[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         setIsLoading(true);

//         const controller = new AbortController();
//         apiClient
//             .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
//             .then((res: any) => {
//                 setData(res.data.results);
//                 setIsLoading(false);
//             })
//             .catch((err: any) => {
//                 if (err instanceof CanceledError) return '';
//                 setError(err.message)
//                 setIsLoading(false);
//             });

//         return () => controller.abort();
//     }, deps ? [...deps] : []);

//     return { data, error, isLoading };
// }

// export default useData