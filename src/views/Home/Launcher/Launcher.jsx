"use client";

import React from "react";
import LuanchAnim from "./LuanchAnim";
import LaunchCards from "./LaunchCards";
import LaunchSlider from "./LaunchSlider";
import LaunchMovies from "./LaunchMovies";

function Launcher() {
  return (
    <div id="Luancher">
      <div className="pt-16 w-full min-h-screen flex flex-col items-center bg-gradient-radial from-emerald-950 to-black text-center">
        <h1 className="text-2xl font-medium bg-gradient-to-l from-emerald-700 to-emerald-400 bg-clip-text inline-block text-transparent max-[780px]:text-lg">
          لانچر پادباکس
        </h1>
        <h2 className="m-10 text-5xl max-[780px]:text-xl">
          تلویزیون با طعم پادباکس
        </h2>
        <p className="mb-5 text-2xl text-stone-500 max-[780px]:text-base">
          لانچر پادباکس راهش را به برندهای مختلف تلویزیون ایرانی بازکرده است
        </p>
        <LuanchAnim />
        <LaunchCards />
        <LaunchSlider />
        <LaunchMovies />
      </div>
    </div>
  );
}

export default Launcher;
