import React, { useEffect, useState } from "react";
import Headerbanner from "./Headerbanner";
import genvmovie from "./Asset/genv.jpg";
import UseFetchNewMovies from "./hooks/UseFetchNewMovies";

export default function HeaderBannerSlide() {
  const [current, setCurrent] = useState(0);

  const changeSlide = () => {
    const nextPage = (current + 1) % 10;
    setCurrent(nextPage);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const { data } = UseFetchNewMovies();

  return (
    <div className="w-screen h-screen">
      <div
        className="duration-1000 w-full h-screen transform flex flex-row"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {data?.result?.items.slice(0, 5).map((movie, index) => {
          return (
            <Headerbanner
              key={index}
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
