import { useInfiniteQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import { Game } from "../interfaces/Game";
import { FetchResponse } from "../interfaces/FetchResponse";
import { GameQuery } from "../interfaces/GameQuery";

const apiClient = new APICLient<Game>('/games');

const useInfiniteGames = (gameQuery: GameQuery) =>
    useInfiniteQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: ({ pageParam = 1 }) =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    platforms: gameQuery.platformId,
                    order: gameQuery.sortOrder,
                    search: gameQuery.searchText,
                    page: pageParam
                }
            }),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
        staleTime: 24 * 60 * 60 * 1000,
    });

export default useInfiniteGames