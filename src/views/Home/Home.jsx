"use client";

import React from "react";
import "@/assets/css/globals.css";
import AndroidBox from "./AndroidBox/AndroidBox";
import Launcher from "./Launcher/Launcher";
import Intro from "./Intro/Intro";

function Home() {
  return (
    <div>
      <section className="bg-custom-gradient h-full w-full">
        <div className="flex flex-col items-center whitespace-pre-wrap pt-56 px-10">
          <h1 className="pt-12 px-40 text-7xl text-center font-light w-full mb-10 max-[745px]:text-2xl">
            پادباکس، دوستی برای سرگرمی و زندگی هوشمند
          </h1>
          <h3 className="text-xl text-wrap text-center w-4/5 max-[745px]:text-lg">
            شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و
            زندگی‌تان هستید، شما پادباکس را کم دارید
          </h3>
          <a href="https://app.podbox.ir/" target="_blank" className="mt-10">
            <button className="font-light text-xl flex justify-center items-center py-6 px-10 border-2 bg-w-b border-b-from rounded-xl hover:scale-110 duration-500">
              ورود به وب اپلیکیشن پادباکس
            </button>
          </a>
        </div>
        <Intro />
        <AndroidBox />
        <Launcher />
      </section>
    </div>
  );
}

export default Home;
