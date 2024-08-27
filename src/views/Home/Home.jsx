"use client";

import React from "react";
import "@/assets/css/globals.css";
import AndroidBox from "./AndroidBox/AndroidBox";
import Launcher from "./Launcher/Launcher";
import Intro from "./Intro/Intro";
import PodboxPlus from "./PodboxPlus/PodboxPlus";

function Home() {
  return (
    <div>
      <section className="bg-custom-gradient w-full h-full sticky">
        <div className="flex flex-col items-center justify-center whitespace-pre-wrap py-20 px-10">
          <h1 className="text-7xl text-center font-thin w-5/6 mb-10 max-[1000px]:text-3xl max-[1000px]:w-full">
            پادباکس، دوستی برای سرگرمی و زندگی هوشمند
          </h1>
          <h3 className="text-stone-400 text-3xl font-light text-wrap text-center w-1/2 max-[1000px]:text-lg max-[1000px]:w-5/6">
            شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و
            زندگی‌تان هستید، شما پادباکس را کم دارید
          </h3>
          <a href="https://app.podbox.ir/" target="_blank" className="mt-10">
            <button className="mb-20 font-light text-xl flex justify-center items-center py-6 px-3 w-full border-2 bg-w-b border-b-from rounded-xl hover:scale-110 duration-500">
              ورود به وب اپلیکیشن پادباکس
            </button>
          </a>
        </div>
        <Intro />
        <AndroidBox />
        <Launcher />
        <PodboxPlus />
      </section>
    </div>
  );
}

export default Home;
