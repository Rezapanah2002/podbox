"use client";

import React from "react";
import "@/assets/css/globals.css";
import Anim from "./Anim";
import Cards from "./Cards";

function Intro() {
  return (
    <div>
      <div className="relative mt-[100px]">
        <Anim />
        <Cards />
      </div>
    </div>
  );
}

export default Intro;
