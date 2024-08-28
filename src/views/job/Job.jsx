import React from "react";

function Job() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-light mt-20">فرصت های شغلی</h1>
        <p className="text-xl font-thin m-10">
          فرصت‌های شغلی مورد نیاز تیم پادباکس را ببینید و برای پیوستن به جمع
          پادباکس رزومه بفرستید
        </p>
      </div>
      <div className="mt-32 flex flex-col justify-center items-end text-right w-2/5">
        <h1 className="text-2xl mb-5">فرصت‌های همکاری</h1>
        <p className="text-base text-stone-400">
          در پادباکس ما قرار نیست یک خانواده باشیم و از شما انتظار چیزی که برای
          خانواده‌تان خرج می‌کنید را داشته باشیم! در پادباکس ما یک تیم هستیم که
          یک هدف داریم و اون هم بهتر و بهتر کردن پادباکس و سرویس‌های مختلف اون
          است. ما یک تیم شادیم که هر فصل دورهمی داریم، هر روز کلی گفتگو و خنده و
          بحث و تفریح داریم و سعی می‌کنیم در آخر روز یک‌قدم پادباکس را جلوتر
          برده باشیم، پس اگر فکر می‌کنی هم‌تیمی خوبی هستی که می‌تواند همراه ما و
          شادی و سختی‌هامون باشد معطل نکن و همین‌الان رزومه‌ات را بفرست و از
          خودت برامون بگو
        </p>
      </div>
      <div className="my-20 flex justify-center items-center gap-10 w-2/5">
        <button className="cursor-pointer w-1/3 h-14 bg-opacity-5 rounded-xl flex justify-center items-center bg-white hover:bg-opacity-10 focus:outline-none focus:ring-1 focus:ring-red-600">
          <div className="flex justify-center gap-5 items-center">
            <p className="font-light">طراح رابط کاربری</p>
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </button>
        <button className="cursor-pointer w-1/3 h-14 bg-opacity-5 rounded-xl flex justify-center items-center bg-white hover:bg-opacity-10 focus:outline-none focus:ring-1 focus:ring-red-600">
          <div className="flex justify-center items-center gap-5">
            <p className="font-light">کارشناس سئو</p>
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </button>
        <button className="cursor-pointer w-1/3 h-14 bg-opacity-5 rounded-xl flex justify-center items-center bg-white hover:bg-opacity-10 focus:outline-none focus:ring-1 focus:ring-red-600">
          <div className="flex justify-center items-center gap-5">
            <p className="font-light">Front-end برنامه نویس</p>
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </button>
      </div>
      <div className="w-2/5 m-10 text-right">
        <div className="font-light">
          <h1 className="text-2xl mb-5">فرم مدل های همکاری</h1>
          <p className="text-sm">لطفا فیلد های فرم را به دقت پر کنید</p>
        </div>
        <form action="/submit" method="post" className="flex flex-col my-10">
          <label for="name">نام و نام خانوادگی</label>
          <input
            type="text"
            name="name"
            required
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          />
          <label for="phone">تلفن تماس</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          />
          <label for="phone">ایمیل</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          />
          <label for="phone">ایمیل</label>
          <div className="w-full flex justify-center items-center gap-10">
            <button
              type="submit"
              className="w-1/4 bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300"
            >
              ارسال
            </button>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="w-3/4 rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            />
          </div>
          <label for="message">توضیحات تکمیلی</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          ></textarea>
          <div className="flex flex-col">
            <label for="phone">:کد امنیتی</label>
            <div className="flex justify-end gap-24 items-center">
              <img src="../../../headphone.png" className="" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-1/4 bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300"
          >
            ارسال رزومه
          </button>
        </form>
      </div>
    </div>
  );
}

export default Job;
