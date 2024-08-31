"use client";

import React, { useState } from "react";

function Workwith() {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {
      title: "شرکت های سخت افزاری",
      content:
        "پادباکس لانچر اختصاصی و بهینه‌شده‌ای برای تلویزیون‌های هوشمند دارد. این لانچر علاوه بر سهولت استفاده و توجه به نیازهای کاربران ایرانی، طیف گسترده‌ای از محتوای سرگرمی را نیز در خود جای داده است. فیلم و سریال، موسیقی، پادکست و کتاب صوتی، بازی، محتوای آموزشی، خبر و مقاله و... در پادباکس گرد هم آمده‌اند تا خیال کاربران را از دسترسی به محتوای مورد نیازشان آسوده کنند. در حال حاضر، لانچر پادباکس روی تعدادی از مهم‌ترین محصولات ایرانی نصب شده است و خانواده‌های مختلفی در سراسر ایران از آن استفاده می‌کنند. ما از شما دعوت می‌کنیم تا به این جمع بپیوندید و از تجربه استفاده از پادباکس لذت ببرید.",
    },
    {
      title: "توسعه دهندگان اپلیکیشن و بازی",
      content:
        "پادباکس از یک سو به‌عنوان محل نصب و اجرای نرم‌افزار و بازی روی تلویزیون‌های مختلف فعالیت می‌کند و از سوی دیگر با داشتن «پاد استور»، امکان حضور و نمایش اپلیکیشن‌ها و بازی‌های مختلف را فراهم می‌کند. اگر شما هم یکی از توسعه‌دهندگان بازی و اپلیکیشن هستید می‌توانید از این فرصت استفاده کنید و محصولتان را به پاد استور بیاورید و از جامعه کاربران پادباکس نهایت استفاده را بکنید.",
    },
    {
      title: "تولید کننده محتوا",
      content:
        "یکی از زمینه‌های فعالیت پادباکس، ارائه محتوا است،فرقی نمی‌کند شما محتوای ویدئویی تولید کنید یا در کارِ ساخت پادکست و کتاب صوتی باشید، طراح و سازنده بازی باشید یا نوازنده و خواننده، پادباکس همان جایی است که می‌توانید محتوایتان را با بهترین شرایط به کاربران مختلف ارائه کنید",
    },
  ];

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-light mt-20 max-sm:text-3xl">
          همکاری با پادباکس
        </h1>
        <h1 className="text-xl font-thin m-10 max-sm:text-base">
          :اگر مایل به همکاری با پادباکس هستید، در این فهرست، مدل همکاری مورد
          نظرتان را انتخاب کنید
        </h1>
        <div className="w-2/5 flex gap-5 m-10 text-center justify-center items-center max-md:flex-col max-md:w-full">
          {tabContent.map((tab, index) => (
            <div
              key={index}
              className={`flex flex-col justify-center items-center cursor-pointer aspect-square w-1/3 h-auto bg-white bg-opacity-5 rounded-3xl hover:bg-opacity-20 duration-300  max-md:w-full max-md:aspect-auto p-10 ${
                activeTab === index ? "bg-opacity-20" : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="sec3-icons bg-black">
                <img
                  src={`../../../${
                    index === 0 ? "finance" : index === 1 ? "gamepad" : "book"
                  }.png`}
                  alt={tab.title}
                />
              </div>
              <h1>{tab.title}</h1>
            </div>
          ))}
        </div>
        <div className="m-10 text-right w-2/5 p-3 max-md:w-full">
          <h1 className="text-3xl">{tabContent[activeTab].title}</h1>
          <p className="text-xl mt-4 text-stone-500 font-light">
            {tabContent[activeTab].content}
          </p>
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
            <label for="cooperation">مدل همکاری</label>
            <select
              id="cooperation"
              name="cooperation"
              className="text-white rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            >
              <option value="content">تولید کننده محتوا</option>
              <option value="development">توسعه دهندگان اپلیکیشن و بازی</option>
              <option value="hardware">شرکت های سخت افزاری</option>
            </select>
            <label for="message">متن پیام</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            ></textarea>
            <div className="flex flex-col">
              <label for="phone">کد امنیتی</label>
              <div className="flex justify-end gap-3 items-center">
                <div className="flex justify-center items-center w-1/3 rounded-lg bg-slate-500 border-2 border-dashed border-slate-400">
                  <p className="text-slate-300">CAPCHA</p>
                </div>
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
              className="max-md:w-full w-1/4 bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300"
            >
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Workwith;
