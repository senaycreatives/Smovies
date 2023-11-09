import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddMovie() {
  const fetch = async () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const response = await axios.get("https://vidsrc.to/vapi/movie/add");
    return response.data;
  };

  return useQuery({
    queryKey: ["getadd"],
    queryFn: fetch,
  });
}
