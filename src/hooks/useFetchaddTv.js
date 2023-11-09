import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddTv() {
  const fetch = async () => {
    const response = await axios.get("https://vidsrc.to/vapi/tv/new");
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewtv"],
    queryFn: fetch,
  });
}
