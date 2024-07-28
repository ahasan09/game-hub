//import useData from "./useData";
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import { FetchResponse } from '../interfaces/FetchResponse';
import { Genre } from '../interfaces/Genre';
import APICLient from '../services/api-client';

const apiClient = new APICLient<Genre>('/genres');

const useGenres = () =>
    useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
        initialData: genres,
    });

export default useGenres

//const useGenres = () => ({ data: genres, isLoading: false, error: null });
//const useGenres = () => useData<Genre>('/genres');