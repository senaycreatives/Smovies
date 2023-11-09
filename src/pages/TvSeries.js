import React from "react";
import MovieCards from "../MovieCards";
import Navbar from "../Navbar";
import UseFetchNewTv from "../hooks/useFetchaddTv";
import UseFetchAddTv from "../hooks/useFetchaddTv";

function Movie() {
  const { data } = UseFetchNewTv();
  const { data: adds } = UseFetchAddTv();
  return (
    <div className="pt-[70px] min-h-screen dark:bg-zinc-900 bg-zinc-200 min-w-screen ">
      <Navbar />
      <div className="bg-cuspage min-h-screen w-screen bg-cover">
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  dark:text-white ">
            Latest Shows
          </p>
        </div>
        <div className=" mb-3 w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
          {data?.result.items.map((movie, index) => {
            return <MovieCards name={movie.title} id={movie.imdb_id} />;
          })}
        </div>
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  dark:text-white ">
            Recently Add
          </p>
        </div>
        <div className="  w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
          {adds?.result.items.map((movie, index) => {
            return <MovieCards name={movie.title} id={movie.imdb_id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Movie;
