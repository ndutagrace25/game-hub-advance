import { useQuery } from "@tanstack/react-query";
import { Genre } from "../services/genreService";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
