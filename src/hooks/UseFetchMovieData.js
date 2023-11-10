import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchMovieData(imdb_id) {
  const fetch = async () => {
    const response = await axios.get(
      `https://inquisitive-hospital-gown-fish.cyclic.app/details/${imdb_id}`
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getMoviedetail", imdb_id],
    queryFn: fetch,
    enabled: !!imdb_id,
  });
}
