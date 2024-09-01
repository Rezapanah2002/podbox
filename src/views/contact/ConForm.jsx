import React from "react";

function ConForm() {
  return (
    <div className="w-1/2 m-10 text-right max-md:w-full p-5">
      <div className="font-light">
        <h1 className="text-2xl mb-5">تماس با پادباکس</h1>
        <p className="text-sm">
          لطفاً پیش از ارسال ایمیل یا تماس تلفنی، ابتدا{" "}
          <a href="/faq">
            <b className="text-blue-800">پرسش‌‌های متداول</b>
          </a>
          را مشاهده کنید
        </p>
      </div>
      <form action="/submit" method="post" className="flex flex-col my-10">
        <label for="cooperation">موضوع</label>
        <select
          id="cooperation"
          name="cooperation"
          className="text-white rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
        >
          <option disabled selected hidden>
            لطفا موضوع را انتخاب کنید
          </option>
          <option value="content">ایمیل پشتیبانی</option>
          <option value="development">مدیریت</option>
        </select>
        <label for="name">نام و نام خانوادگی</label>
        <input
          type="text"
          name="name"
          required
          placeholder="نام و نام خانوادگی خود را وارد کنید"
          className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
        />
        <div className="flex flex-col">
          <label for="captcha">کد امنیتی</label>
          <div className="flex justify-end gap-3 items-center">
            <img src="refresh.png" className="mr-2 cursor-pointer" />
            <div className="flex justify-center items-center h-14 w-1/3 rounded-lg bg-slate-500 border-2 border-dashed border-slate-400">
              <p className="text-slate-300">CATPCHA</p>
            </div>
            <input
              placeholder="لطفا کد امنیتی را وارد کنید"
              type="number"
              id="captcha"
              name="captcha"
              required
              className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            />
          </div>
        </div>
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
          placeholder="لطفا ایمیل خود را وارد کنید"
          className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
        />
        <label for="message">متن پیام</label>
        <textarea
          placeholder="...متن پیام خود را بنویسید"
          id="message"
          name="message"
          rows="4"
          cols="50"
          className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
        ></textarea>
        <button
          type="submit"
          className="max-md:w-full w-1/4 bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300"
        >
          ارسال
        </button>
      </form>
    </div>
  );
}

export default ConForm;
