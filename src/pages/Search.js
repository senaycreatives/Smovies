import React from "react";
import { Link, useParams } from "react-router-dom";
import search from "../Asset/searchicon.svg";
import SearchCards from "../SearchCards";
import UseSearchMovie from "../hooks/useSearchMovie";

export default function Search() {
  const { searchtext } = useParams();
  const { data } = UseSearchMovie(searchtext);
  return (
    <div className=" w-full min-h-screen  dark:bg-zinc-900 pb-[70px] pt-[70px]  bg-zinc-100  flex flex-col items-center ">
      <div className=" w-full h-[30px] mt-10  px-[50px] flex items-center ">
        <p className="    text-xl font-bold  font-Imprima  text-lime-400 ">
          search result for <span className=" text-white"> "{searchtext}"</span>
          ({data?.totalResults || 0})
        </p>
      </div>
      <div className=" w-full  flex flex-col  items-start ml-[100px] my-2 ">
        {data?.Search?.map((movie) => {
          return (
            <SearchCards
              title={movie.Title}
              poster={movie.Poster}
              id={movie.imdbID}
              Type={movie.Type}
              Year={movie.Year}
            />
          );
        })}
      </div>

      {data?.Response === "False" && (
        <>
          <div className=" mt-[100px] w-[200px] h-[200px]  ">
            <img alt="images" src={search} />
          </div>
          <p className=" text-white text-sm  font-Imprima ">
            {data?.Error} for "{searchtext}"
          </p>
          <Link
            to={"/"}
            className=" w-[140px] h-[30px] bg-lime-400 rounded-md flex items-center justify-center mt-2"
          >
            <p className=" text-black font-bold">Back To Home</p>
          </Link>
        </>
      )}
    </div>
  );
}
