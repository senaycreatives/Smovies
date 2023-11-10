import React from "react";

import "react-html5video/dist/styles.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import UseFetchMovieData from "../hooks/UseFetchMovieData";
function MovieDetail() {
  const { movieId } = useParams();
  const { data } = UseFetchMovieData(movieId);

  const videoUrl = `https://vidsrc.to/embed/${
    data?.Type === "series" ? "tv" : "movie"
  }/${movieId}`;
  return (
    <div className="  pt-[70px] min-h-screen  pb-[70px] min-w-screen flex items-center  flex-col justify-center dark:bg-zinc-900  bg-zinc-100 ">
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
          <img className=" h-full w-[200px]  " alt="jj" src={data?.Poster} />
          <div className="  flex-1 flex flex-col  px-4">
            <div className=" h-[50px]   dark:border-b-white border-b-black  border-b-2 flex justify-center flex-col border-opacity-20 ">
              <p className=" text-2xl dark:text-white text-black font-bold font-Imprima">
                {data?.Title}
              </p>
            </div>
            <div className="h-[20px]  mt-1 flex flex-row items-center">
              <div className="h-full border-r-2 dark:border-r-white  border-r-black   border-opacity-40 px-2">
                <p className=" text-sm dark:text-white text-black">
                  {data?.Runtime}
                </p>
              </div>
              <div className="h-full border-r-2 dark:border-r-white  border-r-black border-opacity-40 px-2">
                <p className=" text-sm dark:text-white text-black">
                  {data?.Genre}
                </p>
              </div>
              <div className="h-full border-r-2 dark:border-r-white  border-r-black border-opacity-40 px-2">
                <p className=" text-sm dark:text-white text-black">
                  {data?.Released}
                </p>
              </div>
              <div className="h-full border-r-2 dark:border-r-white  border-r-black flex flex-row border-opacity-40 px-2">
                <p className=" text-sm  text-lime-400">Imdb-</p>
                <p className=" text-sm dark:text-white text-black">
                  {data?.imdbRating}
                </p>
              </div>
            </div>
            <div className="h-[60px]  mt-1 flex flex-row items-center">
              <p className=" text-sm dark:text-white text-black ">
                {data?.Plot}
              </p>
            </div>
            <p className=" dark:text-white text-black font-bold">Casts</p>
            <div className=" h-[50px] w-full ">
              <p className=" text-sm dark:text-white text-black ">
                {data?.Actors}
              </p>
            </div>
            <p className=" dark:text-white text-black font-bold">Rating</p>

            <div className=" h-[50px] w-full flex mt-1 flex-row  ">
              <AiFillStar className=" text-orange-500" />
              <AiFillStar className=" text-orange-500" />
              <AiFillStar className=" text-orange-500" />
              <AiFillStar className=" text-orange-500" />
              <AiOutlineStar className=" dark:text-white text-black" />
            </div>
          </div>
        </div>
        <div className="  flex flex-[0.3] items-center flex-col p-3 dark:bg-zinc-800 bg-zinc-50 rounded-md shadow-md shadow-gray-700 h-[250px]">
          <p className=" dark:text-white text-black font-bold">Direct Link</p>
          <div className=" border-2 hover:bg-lime-400  rounded-md cursor-pointer dark:border-white dark:border-opacity-5 border-black border-opacity-5  w-full h-[50px] flex items-center justify-center mt-3">
            <p className="  dark:text-white text-black">filemoon</p>
          </div>
          <div className=" border-2 hover:bg-lime-400  rounded-md cursor-pointer dark:border-white dark:border-opacity-5 border-black border-opacity-5  w-full h-[50px] flex items-center justify-center mt-3">
            <p className="  dark:text-white text-black">upstream</p>
          </div>
          <div className=" border-2 hover:bg-lime-400  rounded-md cursor-pointer dark:border-white dark:border-opacity-5 border-black border-opacity-5  w-full h-[50px] flex items-center justify-center mt-3">
            <p className="  dark:text-white text-black">wootly</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
