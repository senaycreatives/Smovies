import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddMovie() {
  const fetch = async () => {
    const response = await axios.get("/vapi/movie/add");
    return response.data;
  };

  return useQuery({
    queryKey: ["getadd"],
    queryFn: fetch,
  });
}
