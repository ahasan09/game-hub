//import useData from "./useData";
import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APICLient, { FetchResponse } from '../services/api-client';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APICLient<Genre>('/genres');

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, results: genres },
    });

export default useGenres

//const useGenres = () => ({ data: genres, isLoading: false, error: null });
//const useGenres = () => useData<Genre>('/genres');