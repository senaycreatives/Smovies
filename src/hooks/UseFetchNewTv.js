import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchNewTv() {
  const fetch = async () => {
    const response = await axios.get(
      "https://intelligent-subdued-tennis.glitch.me/tv/new"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewtvs"],
    queryFn: fetch,
  });
}
