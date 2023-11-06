import React from "react";
import genvmovie from "./Asset/avator.jpg";
export default function MovieCards() {
  return (
    <div className=" w-[240px] mt-9   overflow-hidden flex-shrink-0   mx-7  h-[300px] ">
      <div
        className=" h-[250px] rounded-[5px] overflow-hidden w-full bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage: `url(${genvmovie})`,
        }}
      ></div>
      <div className=" h-[50px] w-full  flex flex-col">
        <div>
          <p className=" text-white font-bold">Five Nights at Freddy's</p>
        </div>
        <div className=" flex  flex-row justify-between">
          <div className=" flex flex-row items-center">
            <p className=" text-zinc-300  text-sm mx-1 font-thin">2023</p>
            <p className=" text-white text-sm">.</p>
            <p className=" text-zinc-300 text-sm mx-1  font-thin">200m</p>
          </div>
          <div className=" h-[20px]  border-[1px]  border-opacity-25 border-lime-600 items-center justify-center flex">
            <p className="  text-zinc-400 text-sm px-[2px] font-bold">
              {" "}
              Movies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
