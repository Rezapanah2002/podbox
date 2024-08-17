"use client";

import React from "react";
import { motion } from "framer-motion";

function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-evenly p-32 bg-custom-gradient gap-32 h-full w-full">
        <div className="grid justify-items-center whitespace-pre-wrap">
          <h1 className="text-6xl text-center font-thin w-5/6 max-[745px]:text-3xl max-[745px]:w-full">
            پادباکس، دوستی برای سرگرمی و زندگی هوشمند
          </h1>
          <h3 className="text-2xl text-wrap text-center w-1/2 max-[745px]:text-lg max-[745px]:w-full">
            شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و
            زندگی‌تان هستید، شما پادباکس را کم دارید
          </h3>
          <a href="https://app.podbox.ir/" target="_blank">
            <button className="m-10 p-5 border-2 bg-w-b border-b-from rounded-xl hover:scale-110 duration-500">
              ورود به وب اپلیکیشن پادباکس
            </button>
          </a>
        </div>
        {/* animation */}
        <div className="w-full h-full flex justify-center">
          <motion.div className="flex justify-center items-center w-4/5 h-96 bg-gradient-to-r from-b-from via-b-via to-b-to rounded-2xl">
            <img className="w-5/6 h-5/6" src="../../../anim-bg.png" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
