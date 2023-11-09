import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import { CATCHE_KEY_PLATFORMS } from "../services/constants";
import platformService from "../services/platformService";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: CATCHE_KEY_PLATFORMS,
    queryFn: () => platformService.getAll(),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
