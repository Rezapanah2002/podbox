"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [100, -100]);
  const smoothY = useSpring(y, { stiffness: 600, damping: 200 });

  return (
    <div>
      <section className="flex flex-col items-center py-32 px-10 bg-custom-gradient gap-32 h-full w-full">
        <div className="grid justify-items-center whitespace-pre-wrap">
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
        {/* animation */}
        <div className="w-4/5 h-screen flex justify-center max-[1210px]:hidden">
          <motion.div className="flex justify-center w-4/5 h-3/5 bg-gradient-to-r from-b-from via-b-via to-b-to rounded-3xl relative">
            <motion.img
              className="px-16 pt-20 w-full h-full absolute bottom-0"
              src="../../../anim-bg.png"
            />

            {/* voice */}
            <motion.div
              className="bg-gray-500 bg-opacity-20 rounded-3xl w-1/3 h-28 absolute -top-28 -left-28 flex justify-evenly items-center cursor-grab"
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
                scale: 1.2,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <motion.div className="w-56 h-2 rounded-2xl bg-slate-100 px-4" />
              <motion.div className="w-16 h-16 rounded-full bg-slate-100 px-4" />
            </motion.div>

            {/* soul */}
            <a
              href="https://app.podbox.ir/videos/detail/3350655"
              target="_blank"
            >
              <motion.div
                className="bg-gray-500 bg-opacity-20 rounded-3xl w-56 h-72 absolute -top-44 -right-28 flex justify-center items-center cursor-grab"
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
                  scale: 1.2,
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
            </a>

            {/* dune */}
            <a
              href="https://app.podbox.ir/videos/detail/3353042"
              target="_blank"
            >
              <motion.div
                className="bg-gray-500 bg-opacity-20 rounded-3xl w-44 h-56 absolute bottom-16 -left-20 flex justify-center items-center cursor-grab"
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
                  scale: 1.2,
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
            </a>

            {/* music */}
            <motion.div
              className="bg-gray-500 bg-opacity-20 rounded-3xl w-40 h-40 absolute bottom-52 flex justify-center items-center  cursor-grab"
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
                scale: 1.2,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <motion.img
                className="relative w-1/2 rounded-3xl"
                src="../../../music.png"
              />
            </motion.div>

            {/* gaming */}
            <motion.div
              className="bg-gray-500 bg-opacity-20 rounded-3xl w-24 h-24 absolute bottom-28 -right-10 flex justify-center items-center cursor-grab"
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
                scale: 1.2,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <motion.img
                className="relative w-3/5 rounded-3xl"
                src="../../../gaming.png"
              />
            </motion.div>
          </motion.div>
        </div>
        <div class="flex justify-evenly w-full h-screen">
          <div class="w-1/5 h-1/2 bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-70 hover:opacity-100">
            <h1 className="text-xl m-10 bg-gradient-to-l from-b-to via-b-via to-b-from bg-clip-text inline-block text-transparent">
              معرفی پادباکس پلاس
            </h1>
          </div>
          <div class="w-1/5 h-1/2 bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-70 hover:opacity-100">
            <h1 className="text-xl m-10 bg-gradient-to-l from-green-800 via-green-500 to-green-300 bg-clip-text inline-block text-transparent">
              لانچر پادباکس
            </h1>
          </div>
          <div class="w-1/5 h-1/2 bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-70 hover:opacity-100">
            <h1 className="text-xl m-10 bg-gradient-to-l from-indigo-800 via-indigo-600 to-indigo-400 bg-clip-text inline-block text-transparent">
              اندروید باکس پادباکس
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
