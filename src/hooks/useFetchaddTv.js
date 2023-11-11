import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddTv() {
  const fetch = async () => {
    const response = await axios.get(
      "https://intelligent-subdued-tennis.glitch.me/tv/add"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewtv"],
    queryFn: fetch,
  });
}
