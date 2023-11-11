import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddMovie() {
  const fetch = async () => {
    const response = await axios.get(
      "https://intelligent-subdued-tennis.glitch.me/movie/add"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getadd"],
    queryFn: fetch,
  });
}
