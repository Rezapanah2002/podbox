"use client";

import React from "react";
import "@/assets/css/globals.css";
import IntroAnim from "./IntroAnim";
import IntroCards from "./IntroCards";

function Intro() {
  return (
    <div>
      <div>
        <IntroAnim />
        <IntroCards />
      </div>
    </div>
  );
}

export default Intro;
