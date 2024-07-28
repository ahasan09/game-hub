import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient from "../services/api-client";
import { Platform } from "../interfaces/Platform";
import { FetchResponse } from "../interfaces/FetchResponse";

const apiClient = new APICLient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, next: null, results: platforms }

    });
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;