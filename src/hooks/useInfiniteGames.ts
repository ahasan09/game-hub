import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import { FetchResponse } from "../interfaces/FetchResponse";
import { Game } from "../interfaces/Game";
import { GameQuery } from "../interfaces/GameQuery";
import APICLient from "../services/api-client";

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
        staleTime: ms('24h'),
    });

export default useInfiniteGames