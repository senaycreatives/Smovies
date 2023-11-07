import React from "react";
import MovieCards from "../MovieCards";
import Navbar from "../Navbar";

function Movie() {
  return (
    <div className=" pt-[70px] min-h-screen min-w-screen bg-zinc-900 ">
      <div className="pagess px-3  min-h-screen w-screen bg-cover">
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="   text-2xl font-bold  font-Imprima  text-white ">
            Movies
          </p>
        </div>
        <div className=" mb-3 w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
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
          <p className="  text-2xl font-bold  font-Imprima  text-white ">
            Top Rated
          </p>
        </div>
        <div className=" mb-3 w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
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

export default Movie;
