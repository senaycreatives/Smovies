import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import bg from "../Asset/genv.jpg";
import { FaStar } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
function MovieDetail() {
  const videoUrl = "https://vidsrc.to/embed/tv/tt3107288";
  return (
    <div className="  pt-[70px] min-h-screen  pb-[70px] min-w-screen flex items-center  flex-col justify-center bg-zinc-900 ">
      <div className=" w-full h-[30px]  pt-1 flex items-center ">
        <p className="   text-l font-bold  font-Imprima  text-lime-400 ">
          Movies
        </p>
      </div>
      <div className=" w-11/12 h-[500px]  bg-black">
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          autoPlay
          poster="https://m.media-amazon.com/images/M/MV5BZDcwMzU4NWYtODIzZi00Yzg4LWJhOTAtOTQ2ZDA4NmFlYmFlXkEyXkFqcGdeQXVyMTY1MTU3NDY5._V1_SX300.jpg"
          className=" w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded Video"
        ></iframe>
      </div>
      <div className="  flex   w-11/12 flex-row mt-[50px]">
        <div className=" flex flex-[0.7]  h-[250px]">
          <img
            className=" h-full w-[200px]  "
            src={
              "https://m.media-amazon.com/images/M/MV5BZDcwMzU4NWYtODIzZi00Yzg4LWJhOTAtOTQ2ZDA4NmFlYmFlXkEyXkFqcGdeQXVyMTY1MTU3NDY5._V1_SX300.jpg"
            }
          />
          <div className="  flex-1 flex flex-col  px-4">
            <div className=" h-[50px]   border-b-white  border-b-2 flex justify-center flex-col border-opacity-20 ">
              <p className=" text-2xl text-white font-bold font-Imprima">
                The Flash(2003)
              </p>
            </div>
            <div className="h-[20px]  mt-1 flex flex-row items-center">
              <div className="h-full border-r-2 border-r-white border-opacity-40 px-2">
                <p className=" text-sm text-white">0Min</p>
              </div>
              <div className="h-full border-r-2 border-r-white border-opacity-40 px-2">
                <p className=" text-sm text-white">Action, Adventure, Drama</p>
              </div>
              <div className="h-full border-r-2 border-r-white border-opacity-40 px-2">
                <p className=" text-sm text-white">07 Oct 2014</p>
              </div>
              <div className="h-full border-r-2 border-r-white flex flex-row border-opacity-40 px-2">
                <p className=" text-sm  text-lime-400">Imdb-</p>
                <p className=" text-sm text-white">7.5/10</p>
              </div>
            </div>
            <div className="h-[60px]  mt-1 flex flex-row items-center">
              <p className=" text-sm text-white ">
                After being struck by lightning, Barry Allen wakes up from his
                coma to discover he's been given the power of super speed,
                becoming the Flash, and fighting crime in Central City.
              </p>
            </div>
            <p className=" text-white font-bold">Casts</p>
            <div className=" h-[50px] w-full ">
              <p className=" text-sm text-white ">
                "Grant Gustin, Candice Patton, Danielle Panabaker"
              </p>
            </div>
            <p className=" text-white font-bold">Rating</p>

            <div className=" h-[50px] w-full flex mt-1 flex-row  ">
              <AiFillStar className=" text-orange-500" />
              <AiFillStar className=" text-orange-500" />
              <AiFillStar className=" text-orange-500" />
              <AiFillStar className=" text-orange-500" />
              <AiOutlineStar className=" text-white" />
            </div>
          </div>
        </div>
        <div className="  flex flex-[0.3] items-center flex-col p-3 bg-zinc-800 rounded-md shadow-md shadow-gray-700 h-[250px]">
          <p className=" text-white font-bold">Direct Link</p>
          <div className=" border-2 hover:bg-lime-600  rounded-md cursor-pointer border-white border-opacity-5  w-full h-[50px] flex items-center justify-center mt-3">
            <p className="  text-white">filemoon</p>
          </div>
          <div className=" border-2 hover:bg-lime-600  rounded-md cursor-pointer border-white border-opacity-5  w-full h-[50px] flex items-center justify-center mt-3">
            <p className="  text-white">upstream</p>
          </div>
          <div className=" border-2 hover:bg-lime-600  rounded-md cursor-pointer border-white border-opacity-5  w-full h-[50px] flex items-center justify-center mt-3">
            <p className="  text-white">wootly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
