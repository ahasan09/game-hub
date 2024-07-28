//import useData from "./useData";
import { useQuery } from '@tanstack/react-query';
import genres from '../data/genres';
import APICLient from '../services/api-client';
import { Genre } from '../interfaces/Genre';
import { FetchResponse } from '../interfaces/FetchResponse';

const apiClient = new APICLient<Genre>('/genres');

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: { count: genres.length, next: null, results: genres },
    });

export default useGenres

//const useGenres = () => ({ data: genres, isLoading: false, error: null });
//const useGenres = () => useData<Genre>('/genres');