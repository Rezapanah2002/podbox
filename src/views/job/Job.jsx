import React from "react";

function Job() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-5xl font-light mt-20 max-md:text-3xl">
          فرصت های شغلی
        </h1>
        <p className="text-xl text-center font-thin my-10 max-md:text-base">
          فرصت‌های شغلی مورد نیاز تیم پادباکس را ببینید و برای پیوستن به جمع
          پادباکس رزومه بفرستید
        </p>
      </div>
      <div className="mt-32 flex flex-col justify-center items-end text-right w-2/5 max-md:w-3/4">
        <h1 className="text-2xl mb-5">فرصت‌های همکاری</h1>
        <p className="text-base text-stone-400 leading-loose">
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
      <div className="my-20 flex justify-center items-center gap-10 max-md:flex-col w-2/5 max-md:w-full">
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
      <div className="w-2/5 m-10 text-right max-md:w-full p-5">
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
            placeholder="نام و نام خانوادگی خود را وارد کنید"
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          />
          <label for="phone">تلفن تماس</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="شماره تماس خود را وارد کنید"
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          />
          <label for="email">ایمیل</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="ایمیل خود را وارد کنید"
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400 max-md:flex-col"
          />
          <label for="job">سوابق شغلی</label>
          <div className="w-full flex justify-center items-center gap-10">
            <button
              type="submit"
              className="w-1/4 bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300 max-md:w-full"
            >
              PDF انتخاب فایل
            </button>
            <input
              type="text"
              id="job"
              name="job"
              required
              placeholder="لطفا سوابق شغلی خود را وارد کنید"
              className="w-3/4 rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            />
          </div>
          <label for="message">توضیحات تکمیلی</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="اگر نیاز به ارسال توضیحات تکمیلی دارید برای ما یادداشت بگذارید"
            className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
          ></textarea>
          <div className="flex flex-col">
            <label for="capcha">کد امنیتی</label>
            <div className="flex justify-end gap-3 items-center">
              <img src="refresh.png" className="mr-2 cursor-pointer" />
              <div className="flex justify-center items-center h-14 w-1/3 rounded-lg bg-slate-500 border-2 border-dashed border-slate-400">
                <p className="text-slate-300">CAPTCHA</p>
              </div>
              <input
                type="number"
                id="captcha"
                name="captcha"
                required
                placeholder="لطفا کد امنیتی را وارد کنید"
                className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-1/4 bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300 max-md:w-full"
          >
            ارسال رزومه
          </button>
        </form>
      </div>
    </div>
  );
}

export default Job;
