import React from "react";
import genvmovie from "./Asset/avator.jpg";
import Navbar from "./Navbar";
import { AiFillClockCircle } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";
export default function Headerbanner() {
  return (
    <div
      className="h-screen w-screen bg-zinc-700 bg-cover"
      style={{
        backgroundImage: `url(${genvmovie})`,
      }}
    >
          <Navbar />
      <div className="bg-text  flex  flex-col justify-center  pl-3  ">
        <h1 className=" font-bold  text-4xl text-white mb-5">
          Attack on Titan
        </h1>
        <p className=" text-white w-[600px] line-clamp-2  ">
          From the world of "The Boys" comes "Gen V," which explores the first
          generation of superheroes to know that their super powers are from
          Compound V. These heroes put their physical and moral boundaries to
          the test competing for the school's top ranking.
        </p>
        <div className="h-[50px] flex flex-row">
          <div className=" w-[80px] font-bold text-black h-[20px] mt-3 flex items-center justify-center  rounded-full  text-xs bg-yellow-600">
            IMDB-7.08
          </div>{" "}
          <div className=" mx-2 w-[40px] font-bold text-black h-[20px] mt-3 flex items-center justify-center  rounded-full  text-xs bg-lime-600">
            HD
          </div>
          <div className=" mx-2 flex flex-row  text-white h-[20px] mt-3  items-center justify-center  rounded-full  text-xs ">
            <AiFillClockCircle /> <p>2:00</p>
          </div>
          <div className=" mx-2 flex flex-row  text-white h-[20px] mt-3  items-center justify-center  rounded-full  text-xs ">
            Action, Adventure, Drama
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
