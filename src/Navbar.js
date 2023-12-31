import React, { useState } from "react";
import logo from "../src/Asset/logo.svg";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkSide from "./UseDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkSide();
  const [Search, setSearch] = useState();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );
  const [menuactive,setmenuactive]=useState(false)

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <div className="    h-[70px] w-screen absolute top-0 left-0 z-20 ">
      <div className="  w-full h-full  absolute dark:bg-nightnavcovergrad bg-lightgrad   flex flex-row items-center justify-between px-2">
        <div className="h-full flex flex-row items-center">
          <img
            src={logo}
            alt="logo"
            className=" h-full  w-[70px]  object-center"
          />
          <h1 className=" font-bold dark:text-white text-black  font-Imprima pt-6">
            .com
          </h1>
        </div>
        <div className="  w-[30px] h-[30px] " onClick={()=>setmenuactive(!menuactive)}>
        <AiOutlineMenu className=" text-black font-bold" size={34}/>
      </div>
      
        
        <div className=" sm:flex  hidden  h-full flex-row items-center">
          <h1 className="  group  hover:text-lime-400 dark:text-white text-black     flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/" className=" pr-5 text-[14px]">
             
              HOME
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px] group-hover:bg-lime-400"></div>
          </h1>
          <h1 className="  group  hover:text-lime-400 dark:text-white text-black   flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/movie" className=" pr-5 text-[14px]">
             
              MOVIE
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px]  group-hover:bg-lime-400"></div>
          </h1>

          <h1 className="  group  hover:text-lime-400 dark:text-white text-black   flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/tvseries" className=" pr-5 text-[14px]">
             
              TVSERIES
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px] group-hover:bg-lime-400"></div>
          </h1>

          <h1 className=" group   hover:text-lime-400 dark:text-white text-black   flex flex-row  items-center border-white   text-[15px] font-Imprima mx-5 ">
            <Link to="/Genre" className=" pr-5 text-[14px]">
             
              GENERE
            </Link>
            <div className=" w-[1px] h-[9px] bg-white transition-all duration-150 group-hover:h-[19px] group-hover:bg-lime-400"></div>
          </h1>
        </div>
       
        <div className="  sm:flex  hidden h-full  flex-row items-center mx-4">
          <div className=" h-[35px]  bg-slate-100    bg-opacity-40  w-[300px]">
            <input
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 dark:text-white  border-2 rounded-md overflow-hidden border-lime-500 outline-lime-400 h-full bg-transparent"
            ></input>
          </div>
          <Link
            to={Search === "" ? "#" : `search/${Search}`}
            className=" w-[40px]  flex items-center justify-center h-[40px] mx-2"
          >
            <AiOutlineSearch
              size={25}
              className=" dark:text-white text-black   mx-2"
            />
          </Link>

          <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            sunColor="orange"
            size={25}
          />
          <div className=" h-full flex items-center justify-center mx-2">
            <BiWorld size={25} className=" text-lime-500  mx-1" />
            <h1 className=" font-bold dark:text-white text-black  text-[15px] font-Imprima ">
              Eng
            </h1>
            <FaAngleDown className=" dark:text-white text-black" />
          </div>
        </div>
      </div>
    
      <div className={` w-full h-screen top-0 left-0 absolute  m-0 p-0 sm:hidden  ${menuactive?'flex':'hidden'}  flex-row `}>
      <div className=" flex-[0.2] h-full   dark:bg-zinc-800 dark:bg-opacity-50  bg-zinc-400  backdrop-blur-md  bg-opacity-20" onClick={()=>setmenuactive(false)}></div>
      <div className=" relative flex-[0.8] h-full  bg-zinc-800  flex items-center  flex-col  pt-16">
        <div className=" absolute duration-700 top-0 ml-3 mt-3  left-0 w-[40px] h-[40px]  "> <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            sunColor="orange"
            size={25}
          /></div>
        <div className=" w-full h-[70px] bg-zinc-700 bg-opacity-30 flex items-center justify-center mt-3"><p className=" text-white  text-lg">Home</p></div>
        <div className=" w-full h-[70px] bg-zinc-700 bg-opacity-30 flex items-center justify-center mt-3"><p className=" text-white  text-lg">Home</p></div>
        <div className=" w-full h-[70px] bg-zinc-700 bg-opacity-30 flex items-center justify-center mt-3"><p className=" text-white  text-lg">Home</p></div>
        <div className=" w-full h-[70px] bg-zinc-700 bg-opacity-30 flex items-center justify-center mt-3"><p className=" text-white  text-lg">Home</p></div>
      </div>
      </div>
    
     
    </div>
  );
}
