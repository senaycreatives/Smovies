import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchMovieData(imdb_id) {
  const fetch = async () => {
    const response = await axios.get(
      `https://fda8-196-189-190-239.ngrok-free.app/details/${imdb_id}`
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getMoviedetail", imdb_id],
    queryFn: fetch,
    enabled: !!imdb_id,
  });
}
