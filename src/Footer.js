import React from "react";
import logo from "../src/Asset/logo.svg";
export default function Footer() {
  return (
    <div className=" dark:bg-zinc-900  bg-white flex border-t-[1px]  dark:border-lime-400  border-lime-700 items-center justify-center w-full h-[200px]">
      <div className=" flex items-center  justify-center w-4/5 flex-col">
        <img className=" w-[100px] h-[100px] " alt="hell" src={logo} />
        <p className="  dark:text-zinc-300  text-black text-center text-sm font-bold">
          Smovies is top of free streaming website, where to watch movies online
          free without registration required. With a big database and great
          features, we're confident SMovies is the best free movies online
          website in the space that you can't simply miss!
        </p>
        <p className=" dark:text-lime-500 text-lime-800 text-sm  ">
          This site does not store any files on our server, we only linked to
          the media which is hosted on 3rd party services.
        </p>
      </div>
    </div>
  );
}
