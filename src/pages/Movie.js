import React from "react";
import MovieCards from "../MovieCards";

import UseFetchAddMovie from "../hooks/UseRecentAdd";
import UseFetchNewMovies from "../hooks/UseFetchNewMovies";

function Movie() {
  const { data } = UseFetchAddMovie();
  const { data: newmovies } = UseFetchNewMovies();
  return (
    <div className=" pt-[70px] min-h-screen min-w-screen dark:bg-zinc-900 pb-6 bg-zinc-100 ">
      <div className="bg-cuspage px-3  min-h-screen w-screen bg-cover">
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="   text-2xl font-bold  font-Imprima  dark:text-white ">
            Movies
          </p>
        </div>
        <div className=" mb-3 w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
          {data?.result.items.map((movie, index) => {
            return <MovieCards name={movie.title} id={movie.imdb_id} />;
          })}
        </div>
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  dark:text-white ">
            Top Rated
          </p>
        </div>
        <div className="  w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
          {newmovies?.result.items.map((movie, index) => {
            return <MovieCards name={movie.title} id={movie.imdb_id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Movie;
