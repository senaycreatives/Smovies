import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import UseFetchMovieData from "./hooks/UseFetchMovieData";

export default function MovieCards({ name, id }) {
  const { data } = UseFetchMovieData(id);

  return (
    <Link
      to={`/movie/${id}`}
      className="w-[220px] mt-9 group bg-white dark:bg-transparent rounded-md hover:scale-105 transition-all duration-200 overflow-hidden flex-shrink-0 mx-7 h-[300px] relative"
    >
      {data?.Poster !== "N/A" ? (
        <LazyLoadImage
          alt={data?.Title}
          effect="blur"
          src={data?.Poster !== "N/A" ? data?.Poster : ""}
          width="100%"
          placeholderSrc="placeholder.jpg" // Provide a placeholder image
          className=" relative rounded-[5px] bg-cover h-[250px] bg-center bg-no-repeat"
        />
      ) : (
        <div class="flex  justify-center w-full h-[250px] bg-gray-300 rounded   dark:bg-gray-700">
          <svg
            class=" w-14 h-14 self-center justify-self-center text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
      )}

      <div className="moviecard absolute w-full h-[250px] top-0  flex items-center justify-center   transform  opacity-0 transition-opacity duration-300 cursor-pointer group-hover:opacity-60">
        <FaPlayCircle size={60} className="text-lime-950" />
      </div>

      <div className="h-[50px] w-full flex flex-col">
        <div>
          <p className="dark:text-white line-clamp-1 font-bold group-hover:text-lime-400">
            {data?.Title}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <p className="dark:text-zinc-400 text-zinc-500 text-sm mx-1 font-thin">
              {data?.Year}
            </p>
            <p className="dark:text-white text-sm">.</p>
            <p className="dark:text-zinc-400 text-zinc-500 text-sm mx-1 font-thin">
              {data?.Runtime}
            </p>
          </div>
          <div className="h-[20px] border-[1px] border-opacity-25 group-hover:border-lime-300 items-center justify-center flex">
            <p className="dark:text-zinc-400 text-zinc-500 group-hover:text-lime-400 text-sm px-[2px] font-bold">
              {data?.Type}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
