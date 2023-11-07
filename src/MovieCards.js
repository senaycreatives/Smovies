import React from "react";
import genvmovie from "./Asset/avator.jpg";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function MovieCards() {
  return (
    <Link to="/movie/1" className=" w-[220px] mt-9  group  hover:scale-105 transition-all duration-200 overflow-hidden flex-shrink-0   mx-7  h-[300px] ">
      <div
        className=" h-[250px] relative rounded-[5px] overflow-hidden w-full bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${genvmovie})`,
        }}
      >
        <div className=" moviecard  absolute flex items-center justify-center h-full w-full group-hover:visible group-hover:opacity-100 opacity-0 transition-opacity  duration-300 cursor-pointer  invisible">
          <FaPlayCircle size={60} className=" text-lime-950" />
        </div>
      </div>
      <div className=" h-[50px] w-full  flex flex-col">
        <div>
          <p className=" text-white font-bold group-hover:text-lime-400">
            Five Nights at Freddy's
          </p>
        </div>
        <div className=" flex  flex-row justify-between">
          <div className=" flex flex-row items-center">
            <p className=" text-zinc-300  text-sm mx-1 font-thin">2023</p>
            <p className=" text-white text-sm">.</p>
            <p className=" text-zinc-300 text-sm mx-1  font-thin">200m</p>
          </div>
          <div className=" h-[20px]  border-[1px]  border-opacity-25 group-hover:border-lime-300 items-center justify-center flex">
            <p className="  text-zinc-400 group-hover:text-lime-400 text-sm px-[2px] font-bold">
              {" "}
              Movies
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
