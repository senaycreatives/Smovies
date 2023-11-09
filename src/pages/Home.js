import React from "react";

import MovieCards from "../MovieCards";

import HeaderBannerSlide from "../HeaderBannerSlide";
import UseFetchNewMovies from "../hooks/UseFetchNewMovies";
import UseFetchNewTv from "../hooks/UseFetchNewTv";

export default function Home() {
  const { data, isError } = UseFetchNewMovies();
  const { data: TV, isError: istvfetcherror } = UseFetchNewTv();
  console.log(data);
  return (
    <div className="min-h-screen w-screen dark:bg-zinc-900 bg-zinc-200  ">
      <HeaderBannerSlide />
      <div className=" pl-3  min-h-screen w-screen   bg-cuspage bg pb-6">
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  dark:text-white">
            Latest Movies
          </p>
        </div>
        <div className=" pb-3 w-full mt-5 pl-3  z-10  flex  flex-row flex-wrap">
          {data?.result.items.map((movie, index) => {
            return <MovieCards name={movie.title} id={movie.imdb_id} />;
          })}
        </div>
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  dark:text-white">
            Latest TvSeries
          </p>
        </div>
        <div className=" pb-3 w-full mt-5 pl-3  z-10  flex  flex-row flex-wrap">
          {TV?.result.items.map((movie, index) => {
            return <MovieCards name={movie.title} id={movie.imdb_id} />;
          })}
        </div>
        {/* <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  text-white">
            Latest TvSeries
          </p>
        </div>
        <div className=" pb-3 w-full mt-5 pl-3  z-10  flex  flex-row flex-wrap">
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
        </div> */}
      </div>
    </div>
  );
}
