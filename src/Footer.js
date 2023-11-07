import React from "react";
import logo from "../src/Asset/logo.svg";
export default function Footer() {
  return (
    <div className=" bg-zinc-900 flex border-t-[1px]  border-lime-400 items-center justify-center w-full h-[200px]">
      <div className=" flex items-center  justify-center w-4/5 flex-col">
        <img className=" w-[100px] h-[100px] " src={logo} />
        <p className="  text-zinc-300 text-center text-sm font-bold">
          Smovies is top of free streaming website, where to watch movies online
          free without registration required. With a big database and great
          features, we're confident SMovies is the best free movies online
          website in the space that you can't simply miss!
        </p>
        <p className=" text-lime-500  ">
          This site does not store any files on our server, we only linked to
          the media which is hosted on 3rd party services.
        </p>
      </div>
    </div>
  );
}
