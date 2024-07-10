import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../store";

const apiClient = new APIClient<Game>("/games");

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      console.log("all Pages:", allPages);
      console.log("last Page:", lastPage);
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
