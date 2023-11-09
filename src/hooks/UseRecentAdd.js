import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddMovie() {
  const fetch = async () => {
    axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const response = await axios.get(
      "https://vidsrc.me/movies/latest/page-1.json",
      {
        headers: {
          "Access-Control-Allow-Origin":
            "https://frabjous-frangollo-32c56e.netlify.app",
        },
      }
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getadd"],
    queryFn: fetch,
  });
}
