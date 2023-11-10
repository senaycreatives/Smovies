import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseSearchMovie(searchtext) {
  const fetch = async () => {
    const response = await axios.get(
      `https://inquisitive-hospital-gown-fish.cyclic.app/search/${searchtext}`
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["searchmovie", searchtext],
    queryFn: fetch,
    enabled: !!searchtext,
  });
}
