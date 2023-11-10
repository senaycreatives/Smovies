import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function UseFetchAddTv() {
  const fetch = async () => {
    const response = await axios.get(
      "https://fda8-196-189-190-239.ngrok-free.app/movies"
    );
    return response.data;
  };

  return useQuery({
    queryKey: ["getNewtv"],
    queryFn: fetch,
  });
}
