import React from "react";
import Headerbanner from "./Headerbanner";

export default function HeaderBannerSlide() {
  return (
    <div className="  w-screen  h-screen  flex flex-row  flex-nowrap  ">
      <Headerbanner />
      <Headerbanner />
      <Headerbanner />
    </div>
  );
}
