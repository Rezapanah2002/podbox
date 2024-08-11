import React from "react";

function Home() {
  return (
    <div className="grid justify-items-center p-28 bg-custom-gradient h-screen w-full">
      <h1 className="text-5xl text-wrap text-center w-2/3 mb-10">
        پادباکس، دوستی برای سرگرمی و زندگی هوشمند
      </h1>
      <h3>
        !شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و زندگی‌تان
        هستید، شما پادباکس را کم دارید
      </h3>
      <a href="https://app.podbox.ir/" target="_blank">
        <button className="p-4 m-5 border-2 bg-w-b border-b-from rounded-xl">
          ورود به وب اپلیکیشن پادباکس
        </button>
      </a>
    </div>
  );
}

export default Home;
