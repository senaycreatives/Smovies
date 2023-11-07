import React from "react";
import Headerbanner from "../Headerbanner";
import MovieCards from "../MovieCards";
import bg from "../Asset/bg.png";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-900  ">
      <Headerbanner />
      <div className="pagess pl-3  min-h-screen w-screen bg-cover pb-6">
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  text-white">
            Trending
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
        </div>
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  text-white">
            Latest Movies
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
        </div>
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
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
        </div>
      </div>
    </div>
  );
}
