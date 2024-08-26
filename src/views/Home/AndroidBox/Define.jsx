import React from "react";
import Specification from "./Specification";

function Define() {
  return (
    <div>
      <div className="p-16 w-full min-h-screen flex flex-col items-center bg-gradient-radial from-indigo-950 to-black text-center">
        <h1 className="text-2xl font-medium bg-gradient-to-l from-indigo-600 to-indigo-400 bg-clip-text inline-block text-transparent">
          اندروید باکس پادباکس
        </h1>
        <h2 className="m-10 text-5xl">اندروید باکسی که به آن احتیاج دارید</h2>
        <p className="mb-5 text-2xl text-stone-500">
          مشخصات فنی و نحوه استفاده
        </p>
        <div className="p-10 m-5 w-3/5 bg-gradient-to-l from-indigo-800 via-indigo-600 to-indigo-300 rounded-2xl flex flex-col items-start">
          <div className="text-right">
            <h1 className="text-2xl m-2">پادباکس چیست؟</h1>
            <p className="text-xl">
              سخت‌افزار پادباکس می‌تواند هر تلویزیون معمولی را به یک تلویزیون
              هوشمند تبدیل کند. پادباکس مینی‌کامپیوتری است که کارکردن با آن
              بسیار آسان است و شما را به دنیای بی‌انتهای سرگرمی‌های اینترنتی
              می‌برد: فیلم، سریال، موسیقی، بازی، پادکست و... که روی اینترنت وجود
              دارد. از سوی دیگر سخت‌افزار پادباکس برای هوشمندسازی زندگی دیجیتال
              شما طراحی شده. با اندروید باکس پادباکس شما یک دستیار هوشمند برای
              کنترل و استفاده از تمام مزایا و خدمات یک ‌خانه هوشمند را خواهید
              داشت
            </p>
          </div>
          <button className="justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black px-7 py-3 hover:scale-105 duration-300 hover:shadow-2xl">
            تماشای ویدئو
          </button>
        </div>
        <div className="flex items-stretch w-3/5 gap-3">
          <div className="p-10 bg-white rounded-2xl bg-opacity-10">
            <div className="flex flex-col justify-center items-center text-right">
              <h1 className="text-2xl mb-8">محتویات جعبه پادباکس</h1>
              <p className="mb-10">
                سخت‌افزار پادباکس، یک عدد ایرموس، یک عدد دانگل ایرموس، دو عدد
                باتری نیم‌قلمی، یک عدد آداپتور، یک عدد کابل HDMI، دفترچه راهنما
              </p>
              <img src="../../../contain.png" />
            </div>
          </div>
          <div className="p-10 bg-white rounded-2xl bg-opacity-10">
            <div className="flex flex-col justify-center items-center text-right">
              <h1 className="text-xl mb-8">ریموت کنترل ایرموس پادباکس</h1>
              <p className="mb-10">
                ایرموس پادباکس؛ وسیله‌ای برای ناوبری آسان در صفحه تلویزیون و
                رفتن به منوهای مختلف
              </p>
              <img src="remote.png" />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center m-32">
          <Specification />
        </div>
      </div>
    </div>
  );
}

export default Define;
