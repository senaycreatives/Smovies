import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchNewMovies() {
  const fetch = async () => {
    const response = await axios.get("https://vidsrc.to/vapi/movie/new/2");
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewmovies"],
    queryFn: fetch,
  });
}
