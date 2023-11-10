import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchNewTv() {
  const fetch = async () => {
    const response = await axios.get(
      "https://inquisitive-hospital-gown-fish.cyclic.app/movies"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewtv"],
    queryFn: fetch,
  });
}
