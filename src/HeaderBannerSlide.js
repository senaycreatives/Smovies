import React, { useEffect, useState } from "react";
import Headerbanner from "./Headerbanner";
import genvmovie from "./Asset/genv.jpg";
import avator from "./Asset/avator.jpg";
import newimage from "./Asset/new.jpg";

import Navbar from "./Navbar";
import UseFetchNewMovies from "./hooks/UseFetchNewMovies";

export default function HeaderBannerSlide() {
  const [current, setCurrent] = useState(0);

  const changeslide = () => {
    const nextPage = (current + 1) % 3;
    setCurrent(nextPage);
    console.log();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      changeslide();
    }, 6000);

    return () => clearInterval(interval);
  }, [current]);
  const { data, isError } = UseFetchNewMovies();

  return (
    <div className="   w-screen  h-screen   ">
      <div
        className={`  translate-x-[-${
          current * 100
        }%]  duration-1000  w-full h-screen flex flex-row`}
      >
        {data?.result?.items.slice(0, 5).map((movie, index) => {
          return (
            <Headerbanner
              MovieImage={genvmovie}
              id={movie.imdb_id}
              name={movie.title}
            />
          );
        })}
      </div>
    </div>
  );
}
