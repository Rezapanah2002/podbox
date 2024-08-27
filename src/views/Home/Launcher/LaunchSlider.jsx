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
        "حالا وقتش شده که سلامت بدنتان را همیشه تحت‌نظر داشته باشید. با استفاده از سلامت هوشمند پادباکس و گجت‌های پوشیدنی، هیچ تپش قلبی از دست نمی‌رود",
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
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="m-40 p-20 flex justify-center items-center">
      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 1, ease: [0.5, 0, 0.5, 1] }}
                className="absolute m-10 flex items-center justify-between w-3/4"
              >
                <img
                  src={slide.image}
                  className="w-1/3 rounded-3xl max-[1200px]:hidden"
                />
                <div className="text-right m-5 flex flex-col items-end justify-center max-[1200px]:items-center">
                  <div className="sec3-icons">
                    <img src={slide.icon} />
                  </div>
                  <div className="w-2/3 max-[780px]:w-full flex flex-col justify-center items-end max-[1200px]:items-center">
                    <h1 className="text-2xl font-light mb-5">{slide.title}</h1>
                    <p className="text-stone-400 max-[780px]:text-sm">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
}

export default LaunchSlider;
