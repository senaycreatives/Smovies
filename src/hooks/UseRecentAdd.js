import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddMovie() {
  const fetch = async () => {
    const response = await axios.get(
      "https://inquisitive-hospital-gown-fish.cyclic.app/movie/add"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getadd"],
    queryFn: fetch,
  });
}
