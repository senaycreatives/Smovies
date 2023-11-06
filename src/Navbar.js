import React from "react";
import logo from "../src/Asset/logo.svg";
import {
  AiOutlineSearch,
  AiFillFileWord,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="  h-[70px] w-full ">
      <div className=" w-full h-full   navbar flex flex-row justify-between px-2">
        <div className="h-full flex flex-row items-center">
          <img src={logo} className=" h-full   object-center" />
          <h1 className=" font-bold text-white  font-Imprima pt-6">.com</h1>
        </div>
        <div className="h-full flex flex-row items-center">
          <h1 className="  text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <p className=" pr-5 text-[14px]"> HOME</p>
            <div className=" w-[1px] h-[9px] bg-white"></div>
          </h1>
          <h1 className="  text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <p className=" pr-5 text-[14px]"> MOVIE</p>
            <div className=" w-[1px] h-[9px] bg-white"></div>
          </h1>

          <h1 className="  text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <p className=" pr-5 text-[14px]"> TVSERIES</p>
            <div className=" w-[1px] h-[9px] bg-white"></div>
          </h1>

          <h1 className="  text-white  flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <p className=" pr-5 text-[14px]"> WEBSERIES</p>
            <div className=" w-[1px] h-[9px] bg-white"></div>
          </h1>
        </div>
        <div className="h-full flex flex-row items-center mx-4">
          <AiOutlineSearch size={25} className=" text-white mx-2" />
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