import React from "react";
import Headerbanner from "../Headerbanner";
import bg from "../Asset/bg.png";

export default function Home() {
  return (
    <div className="min-h-screen min-w-screen bg-zinc-900 ">
      <Headerbanner />
      <div className="pagess  h-screen bg-cover"></div>
    </div>
  );
}
