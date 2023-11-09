import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import genres from "../data/genres";
import { CATCHE_KEY_GENRES } from "../services/constants";

const useGenres = () => {
  return useQuery({
    queryKey: CATCHE_KEY_GENRES,
    queryFn: () => genreService.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hrs
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
