import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchNewMovies() {
  const fetch = async () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const response = await axios.get(
      "https://vidsrc.me/movies/latest/page-1.json"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewmovies"],
    queryFn: fetch,
  });
}
