"use client";

import React from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function LaunchSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "../../../legal.jpeg",
      title: "دانلود قانونی محتوا (فیلم و سریال و موسیقی و اکران)",
      description:
        "پادباکس راه راحتی برای دانلود قانونیِ محتواهای مختلف و تماشای فیلم‌های روی پرده را برایتان باز می‌کند",
      icon: "../../../movie.png",
    },
    {
      image: "../../../health.jpeg",
      title: "سلامت هوشمند",
      description:
        "حالا وقتش شده که سلامت بدنتان را همیشه تحت‌نظر داشته باشید. با استفاده از سلامت هوشمند پادباکس و گجت‌های پوشیدنی، هیچ تپش قلبی از دست نمی‌رود!",
      icon: "../../../ihealth.png",
    },
    {
      image: "../../../study.jpeg",
      title: "آموزش",
      description:
        "بخش آموزش پادباکس تمام اعضای خانواده را همراهی می‌کند. اگر فرزندتان تا پایه دوازدهم در هر درسی ضعف داشته باشد، فقط کافی است وارد بخش آموزش شود!",
      icon: "../../../book.png",
    },

    {
      image: "../../../assis.jpeg",
      title: "دستیار صوتی پادباکس",
      description:
        "جستجوی صوتی پادباکس امکان سریع‌تر و بسیار راحت‌تری را برای گشتن بین هزاران محتوای مختلف به شما می‌دهد",
      icon: "../../../sound-assis.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="m-40 flex flex-col justify-center">
        {slides.map((slide, index) => (
          <div key={index} className="m-10 flex items-center justify-between">
            <img src={slide.image} className="w-1/3 rounded-3xl" />
            <div className="text-right m-5 flex flex-col items-end justify-center">
              <div className="sec3-icons">
                <img src={slide.icon} />
              </div>
              <h1 className="text-2xl font-light mb-5">{slide.title}</h1>
              <p className="text-stone-400">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0 }}
          style={{ fontSize: 100 }}
          key={seconds}
        >
          {seconds}
        </motion.div>
      </AnimatePresence> */}
    </div>
  );
}

export default LaunchSlider;
