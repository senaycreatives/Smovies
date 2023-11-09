import React, { useState } from "react";
import logo from "../src/Asset/logo.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkSide from "./UseDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="  h-[70px] w-screen absolute top-0 left-0 z-20 ">
      <div className=" w-full h-full   navbar flex flex-row justify-between px-2">
        <div className="h-full flex flex-row items-center">
          <img src={logo} alt="logo" className=" h-full   object-center" />
          <h1 className=" font-bold text-white  font-Imprima pt-6">.com</h1>
        </div>
        <div className="h-full flex flex-row items-center">
          <h1 className="  group  hover:text-lime-400 text-white    flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/" className=" pr-5 text-[14px]">
              {" "}
              HOME
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px] group-hover:bg-lime-400"></div>
          </h1>
          <h1 className="  group  hover:text-lime-400 text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/movie" className=" pr-5 text-[14px]">
              {" "}
              MOVIE
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px]  group-hover:bg-lime-400"></div>
          </h1>

          <h1 className="  group  hover:text-lime-400 text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/tvseries" className=" pr-5 text-[14px]">
              {" "}
              TVSERIES
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px] group-hover:bg-lime-400"></div>
          </h1>

          <h1 className=" group   hover:text-lime-400 text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/Genre" className=" pr-5 text-[14px]">
              {" "}
              GENERE
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px] group-hover:bg-lime-400"></div>
          </h1>
        </div>
        <div className="h-full flex flex-row items-center mx-4">
          <AiOutlineSearch size={25} className=" text-white mx-2" />
          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            sunColor="orange"
            size={25}
          />
          <div className=" h-full flex items-center justify-center mx-2">
            <BiWorld size={25} className=" text-lime-500  mx-1" />
            <h1 className=" font-bold text-white text-[15px] font-Imprima ">
              Eng
            </h1>
            <FaAngleDown className=" text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
