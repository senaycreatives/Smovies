import React from "react";

import { AiFillClockCircle } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";

import UseFetchMovieData from "./hooks/UseFetchMovieData";

export default function Headerbanner({ id }) {
  const { data } = UseFetchMovieData(id);

  return (
    <div
      className="  relative  h-full w-screen bg-zinc-700  bg-fulls bg-no-repeat flex-shrink-0"
      style={{
        backgroundImage: `url(${data?.Poster})`,
      }}
    >
      <div className=" bg-text  pl-3 absolute w-full h-full  flex  flex-col justify-end pb-12    ">
        <h1 className=" font-bold  text-4xl text-white mb-5">{data?.Title}</h1>
        <p className=" text-white w-[600px] line-clamp-2  ">{data?.Plot}</p>
        <div className="h-[50px] flex flex-row">
          <div className=" w-[80px] font-bold text-black h-[20px] mt-3 flex items-center justify-center  rounded-full  text-xs bg-yellow-600">
            IMDB-{data?.imdbRating}
          </div>
          <div className=" mx-2 w-[40px] font-bold text-black h-[20px] mt-3 flex items-center justify-center  rounded-full  text-xs bg-lime-600">
            HD
          </div>
          <div className=" mx-2 flex flex-row  text-white h-[20px] mt-3  items-center justify-center  rounded-full  text-xs ">
            <AiFillClockCircle /> <p>{data?.Runtime}</p>
          </div>
          <div className=" mx-2 flex flex-row  text-white h-[20px] mt-3  items-center justify-center  rounded-full  text-xs ">
            {data?.Genre}
          </div>
        </div>
        <div className=" w-[140px]  mt-5 h-[50px] rounded-md flex items-center justify-center bg-lime-400">
          <p className=" font-bold mx-2">Play Now</p>
          <FaPlayCircle className=" after:text-transparent h-[40px] w-[40px]" />
        </div>
      </div>
    </div>
  );
}
