import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchMovieData(imdb_id) {
  const fetch = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?i=${imdb_id}&apikey=137680e0`
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getMoviedetail", imdb_id],
    queryFn: fetch,
    enabled: !!imdb_id,
  });
}
