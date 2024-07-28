import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APICLient, { FetchResponse } from "../services/api-client";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new APICLient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: platforms.length, results: platforms }

    });
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;