"use client";

import React, { useState, useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

function LaunchMovies() {
  const movies = [
    {
      src: "../../../wednesday.jpeg",
      href: "https://app.podbox.ir/videos/detail/3897581",
    },
    {
      src: "../../../interstellar.jpeg",
      href: "https://app.podbox.ir/videos/detail/3354999",
    },
    {
      src: "../../../red.jpeg",
      href: "https://app.podbox.ir/videos/detail/3355122",
    },
    {
      src: "../../../littlewomen.jpeg",
      href: "https://app.podbox.ir/videos/detail/3896480",
    },
    {
      src: "../../../see.jpeg",
      href: "https://app.podbox.ir/videos/detail/3355357",
    },
    {
      src: "../../../chernobyl.jpeg",
      href: "https://app.podbox.ir/videos/detail/3352551",
    },
    {
      src: "../../../separation.jpeg",
      href: "https://app.podbox.ir/videos/detail/3353901",
    },
    {
      src: "../../../pinichio.jpeg",
      href: "https://app.podbox.ir/videos/detail/3897946",
    },
    {
      src: "../../../goodnurse.jpeg",
      href: "https://app.podbox.ir/videos/detail/3894481",
    },
    {
      src: "../../../encanto.jpeg",
      href: "https://app.podbox.ir/videos/detail/3355842",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-20">
      <h1 className="text-5xl m-10">!هیچ روزی را بدون فیلم دیدن نگذران</h1>
      <p className="text-2xl font-light text-stone-500">
        با پادباکس می‌توانید تا بی‌نهایت فیلم و سریال ‌را در صفحه‌ بزرگ تلویزیون
        خانگی خودتان تماشا کنید
      </p>
      <div className="flex justify-center items-center my-10 ">
        <div className="flex gap-5 overflow-hidden">
          {[...movies].map((movie, index) => (
            <div key={index} className="relative group overflow-hidden">
              <a href={movie.href}>
                <img
                  src={movie.src}
                  className="rounded-xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="../../../play-button.png" />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LaunchMovies;
