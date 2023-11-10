import React from "react";

import { Link } from "react-router-dom";

export default function SearchCards({ title, poster, id, Type, Year }) {
  return (
    <Link
      to={`/movie/${id}`}
      className="  dark:bg-zinc-800 mt-5  bg-slate-50 hover:bg-slate-200 dark:bg-opacity-30 dark:hover:bg-opacity-80  cursor-pointer w-[500px] h-[160px]  flex flex-row"
    >
      <div className=" flex   h-[160px]">
        <img className=" h-full w-[130px]  " alt="jj" src={poster} />
        <div className="  flex-1 flex flex-col  px-4">
          <div className=" h-[50px]   dark:border-b-white dark:border-opacity-20 border-b-black  border-b-2 flex justify-center flex-col border-opacity-20 ">
            <p className=" text-2xl dark:text-white text-black font-bold font-Imprima">
              {title}
            </p>
          </div>

          <div className="h-[20px]  mt-1 flex flex-row items-center">
            <div className="h-full border-r-2 dark:border-r-white dark:border-opacity-20 border-r-black   border-opacity-40 px-2">
              <p className=" text-sm dark:text-white text-black">{Year}</p>
            </div>
            <div className="h-full border-r-2 dark:border-r-white dark:border-opacity-20  border-r-black border-opacity-40 px-2">
              <p className=" text-sm dark:text-white text-black ">{Type}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
