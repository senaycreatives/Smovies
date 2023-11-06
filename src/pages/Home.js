import React from "react";
<<<<<<< HEAD:src/Home.js
import Headerbanner from "./Headerbanner";
import bg from "./Asset/bg.png";
import MovieCards from "./MovieCards";
=======
import Headerbanner from "../Headerbanner";
import bg from "../Asset/bg.png";
>>>>>>> fea24f811bb0094ec19914c2c2fa2288281ea10a:src/pages/Home.js

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-900 ">
      <Headerbanner />
      <div className="pagess  min-h-screen w-screen bg-cover">
        <div className=" w-full h-[50px]  pt-4 flex items-center ">
          <p className="  text-2xl font-bold  font-Imprima  text-white">
            Trending
          </p>
        </div>
        <div className=" mb-3 w-full mt-5 px-5  z-10  flex  flex-row flex-wrap">
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
        </div>
      </div>
    </div>
  );
}
