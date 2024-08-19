"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [100, -100]);
  const smoothY = useSpring(y, { stiffness: 600, damping: 200 });

  return (
    <div>
      <section className="bg-custom-gradient h-full w-full">
        <div className="flex flex-col items-center whitespace-pre-wrap py-32 px-10">
          <h1 className="text-6xl text-center font-thin w-full relative mb-10 max-[745px]:text-2xl">
            پادباکس، دوستی برای سرگرمی و زندگی هوشمند
          </h1>
          <h3 className="text-2xl text-wrap text-center w-4/5 max-[745px]:text-lg">
            شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و
            زندگی‌تان هستید، شما پادباکس را کم دارید
          </h3>
          <a href="https://app.podbox.ir/" target="_blank" className="mt-10">
            <button className="font-thin text-xl flex justify-center items-center w-64 h-16 border-2 bg-w-b border-b-from rounded-xl hover:scale-110 duration-500">
              ورود به وب اپلیکیشن پادباکس
            </button>
          </a>
        </div>
        {/* Section-1 */}
        <div>
          {/* animation */}
          <div className="w-full h-screen flex justify-center mb-0 max-[1210px]:hidden">
            <motion.div className="flex justify-center w-2/3 h-3/5 bg-gradient-to-r from-b-from via-b-via to-b-to rounded-3xl relative">
              <motion.img
                className="px-16 pt-20 w-full h-full absolute bottom-0"
                src="../../../anim-bg.png"
              />

              {/* voice */}
              <motion.div
                className="bg-gray-400 bg-opacity-20 rounded-3xl w-1/3 h-28 absolute -top-28 -left-28 flex justify-evenly items-center cursor-grab"
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
                style={{ y: smoothY }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.div className="w-56 h-2 rounded-2xl bg-slate-100 px-4" />
                <motion.div className="w-16 h-16 rounded-full bg-slate-100 px-4" />
              </motion.div>

              {/* soul */}
              <Link
                href="https://app.podbox.ir/videos/detail/3350655"
                target="_blank"
              >
                <motion.div
                  className="bg-gray-400 bg-opacity-20 rounded-3xl w-64 h-80 absolute -top-44 -right-28 flex justify-center items-center cursor-grab"
                  drag
                  dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                  dragTransition={{
                    bounceStiffness: 600,
                    bounceDamping: 10,
                  }}
                  style={{
                    y: smoothY,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <motion.img
                    className="relative w-4/5 rounded-2xl opacity-70"
                    src="../../../soul.jpeg"
                  />
                </motion.div>
              </Link>

              {/* dune */}
              <motion.div>
                <Link
                  href="https://app.podbox.ir/videos/detail/3353042"
                  target="_blank"
                >
                  <motion.div
                    className="bg-gray-400 bg-opacity-20 rounded-3xl w-56 h-72 absolute bottom-16 -left-20 flex justify-center items-center cursor-grab"
                    drag
                    dragConstraints={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                    dragTransition={{
                      bounceStiffness: 600,
                      bounceDamping: 10,
                    }}
                    style={{
                      y: smoothY,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <motion.img
                      className="relative w-4/5 rounded-2xl opacity-70"
                      src="../../../dune.jpeg"
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* music */}
              <motion.div
                className="bg-gray-400 bg-opacity-20 rounded-3xl w-40 h-40 absolute bottom-52 right-1/2 flex justify-center items-center  cursor-grab"
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
                style={{ y: smoothY }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.img
                  className="relative w-2/5 rounded-3xl"
                  src="../../../music.png"
                />
              </motion.div>

              {/* gaming */}
              <motion.div
                className="bg-gray-400 bg-opacity-20 rounded-3xl w-24 h-24 absolute bottom-28 -right-10 flex justify-center items-center cursor-grab"
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
                style={{ y: smoothY }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.img
                  className="relative w-2/5 rounded-3xl"
                  src="../../../gaming.png"
                />
              </motion.div>
            </motion.div>
          </div>
          {/* cards */}
          <div class="flex justify-center gap-5 w-full h-screen">
            {/* plus */}
            <div class="cursor-pointer p-10 flex flex-col items-center justify-evenly w-1/5 h-1/2 text-right bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-90 hover:opacity-70">
              <div className="flex flex-col justify-end mb-5">
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-stone-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <h2 className="text-xl font-medium bg-gradient-to-l from-b-to to-b-from bg-clip-text inline-block text-transparent">
                    معرفی پادباکس پلاس
                  </h2>
                </div>
                <h3 className="my-2">مسیرهای دسترسی به نرم افزار</h3>
                <p className="text-stone-400 my-2">
                  با پادباکس پلاس، خیالت از سرگرمی در دسترس و همیشگی تخته
                </p>
              </div>
              <img src="../../../podboxplus.png" className="w-full" />
            </div>

            {/* luncher */}
            <div class="cursor-pointer p-10 flex flex-col items-center justify-evenly w-1/5 h-1/2 text-right bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-90 hover:opacity-70">
              <div className="flex flex-col justify-end mb-5">
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-stone-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <h2 className="text-xl font-medium bg-gradient-to-l from-green-600 to-green-300 bg-clip-text inline-block text-transparent">
                    لانچر پادباکس
                  </h2>
                </div>
                <h3 className="my-2">تلوزیون با طعم پادباکس</h3>
                <p className="text-stone-400 my-2">
                  لانچر پادباکس راهش را به برند های مختلف تلوزیون ایرانی باز
                  کرده است
                </p>
              </div>
              <img src="../../../luncher.png" className="w-full" />
            </div>

            {/* android */}
            <div class="cursor-pointer p-10 flex flex-col items-center justify-evenly text-right w-1/5 h-1/2 bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-90 hover:opacity-70">
              <div className="flex flex-col justify-end mb-5">
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-stone-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <h1 className="text-xl font-medium bg-gradient-to-l from-indigo-600 to-indigo-400 bg-clip-text inline-block text-transparent">
                    اندروید باکس پادباکس
                  </h1>
                </div>
                <h3 className="my-2">!ابزاری که به آن احتیاج دارید</h3>
                <p className="text-stone-400 my-2">
                  همه تلویزیون های معمولی برای هوشمند شدن به پادباکس احتیاج
                  دارند
                </p>
              </div>
              <img src="../../../android.png" className="w-full" />
            </div>
          </div>
        </div>

        {/* Section-2 */}
        <div></div>
      </section>
    </div>
  );
}

export default Home;
