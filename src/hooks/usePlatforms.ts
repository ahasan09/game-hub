import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import { FetchResponse } from "../interfaces/FetchResponse";
import { Platform } from "../interfaces/Platform";
import APICLient from "../services/api-client";

const apiClient = new APICLient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
    useQuery<FetchResponse<Platform>, Error>({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: platforms

    });
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents');

export default usePlatforms;