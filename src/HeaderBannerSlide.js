import React, { useEffect, useState } from "react";
import Headerbanner from "./Headerbanner";

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

  return (
    <div className="   w-screen  h-screen   ">
      <div
        className={`  translate-x-[-${
          current * 100
        }%] duration-500  w-full h-screen flex flex-row`}
      >
        <Headerbanner name={"Avator"} />
        <Headerbanner name={"HEllo"} />
        <Headerbanner name={"thired"} />
      </div>
    </div>
  );
}
