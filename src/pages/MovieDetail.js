import React from "react";

import "react-html5video/dist/styles.css";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import UseFetchMovieData from "../hooks/UseFetchMovieData";
import errorimage from "../Asset/error.svg";
function MovieDetail() {
  const { movieId } = useParams();
  const { data, isLoading, isError, error } = UseFetchMovieData(movieId);

  const videoUrl = `https://vidsrc.to/embed/${
    data?.Type === "series" ? "tv" : "movie"
  }/${movieId}`;
  if (data) {
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
        <div className="  flex   w-11/12 sm:flex-row flex-col mt-[50px]">
          <div className=" flex flex-[0.7]  sm:flex-row flex-col h-[250px]">
            <img className=" h-full w-[200px]  " alt="jj" src={data?.Poster} />
            <div className="  flex-1 flex flex-col  px-4">
              <div className=" sm:h-[50px]   dark:border-b-white border-b-black  border-b-2 flex justify-center flex-col border-opacity-20 ">
                <p className=" text-2xl dark:text-white text-black font-bold font-Imprima">
                  {data?.Title}
                </p>
              </div>
              <div className="sm:h-[20px]  mt-1 flex flex-row items-center">
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
              <div className="sm:h-[60px]  mt-1 flex flex-row items-center">
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
          <div className="  flex flex-[0.3] items-center flex-col p-3 dark:bg-zinc-800 bg-zinc-100 rounded-md  border-l-2 border-slate-400 shadow-gray-700 h-[250px]">
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
  if (isLoading) {
    return (
      <div className=" w-screen h-screen dark:bg-zinc-900  bg-zinc-100 flex  items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-10 h-10text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>{" "}
      </div>
    );
  }
  if (isError) {
    return (
      <div className=" w-screen h-screen dark:bg-zinc-900  bg-zinc-100 flex  items-center justify-center">
        <div className=" flex items-center justify-center flex-col">
          <img src={errorimage} className=" w-[200px] h-[200px]" />
          <p className="  text-red-600  font-bold">{error.message}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
