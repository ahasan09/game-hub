import { useQuery } from "@tanstack/react-query";
import APICLient from "../services/api-client";
import { Game } from "../interfaces/Game";
import { FetchResponse } from "../interfaces/FetchResponse";
import { GameQuery } from "../interfaces/GameQuery";

const apiClient = new APICLient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
    useQuery<FetchResponse<Game>, Error>({
        queryKey: ['games', gameQuery],
        queryFn: () =>
            apiClient.getAll({
                params: {
                    genres: gameQuery.genreId,
                    platforms: gameQuery.platformId,
                    order: gameQuery.sortOrder,
                    search: gameQuery.searchText
                }
            })
    });

export default useGames