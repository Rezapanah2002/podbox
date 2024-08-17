import React from "react";

function Home() {
  return (
    <div>
      <section className="flex justify-center p-28 bg-custom-gradient h-screen w-full">
        <div className="grid justify-items-center whitespace-pre-wrap">
          <h1 className="text-6xl text-center font-thin w-5/6 max-[745px]:text-2xl max-[745px]:w-full">
            پادباکس، دوستی برای سرگرمی و زندگی هوشمند
          </h1>
          <h3 className="text-2xl text-wrap text-center w-1/2 max-[745px]:text-base max-[745px]:w-full">
            شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و
            زندگی‌تان هستید، شما پادباکس را کم دارید
          </h3>
          <a href="https://app.podbox.ir/" target="_blank">
            <button className="p-4 border-2 bg-w-b border-b-from rounded-xl hover:scale-110 duration-500">
              ورود به وب اپلیکیشن پادباکس
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
