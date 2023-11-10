import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddTv() {
  const fetch = async () => {
    const response = await axios.get(
      "https://inquisitive-hospital-gown-fish.cyclic.app/tv/add"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewtv"],
    queryFn: fetch,
  });
}
