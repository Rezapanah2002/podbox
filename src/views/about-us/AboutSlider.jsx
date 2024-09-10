"use client";

import React, { useState, useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

function AboutSlider() {
  const movies = [
    {
      src: "../../../gal1.jpeg",
    },
    {
      src: "../../../gal2.jpeg",
    },
    {
      src: "../../../gal3.jpeg",
    },
    {
      src: "../../../gal4.jpeg",
    },
  ];

  let [ref, { width }] = useMeasure();
  const [isPaused, setIsPaused] = useState(false);

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let finalpos = -width - 3;
    let controls;

    if (!isPaused) {
      controls = animate(xTranslation, finalpos, {
        ease: "linear",
        duration: 10,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0,
      });
    }

    return () => controls?.stop();
  }, [xTranslation, width, isPaused]);

  return (
    <div className="flex justify-center items-center my-10">
      <motion.div
        className="flex gap-5 overflow-hidden"
        style={{ x: xTranslation }}
        ref={ref}
      >
        {[...movies].map((movie, index) => (
          <motion.div
            key={index}
            className="relative group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <img
              src={movie.src}
              className="rounded-xl opacity-40 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img src="../../../play-button.png" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutSlider;
