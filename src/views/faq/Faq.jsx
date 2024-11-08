"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FaqForm from "./FaqForm";

const faqData = [
  {
    id: 1,
    question: "چگونه دکمه پاور ریموت کنترل پادباکسم رو شخصی سازی کنم؟",
    answer:
      "شخصی‌سازی دکمه پاور ریموت پادباکس، با یک تنظیم ساده. 1. از قسمت برنامه ها وارد droid setting بشید. 2. بعد قسمت powerkey definition رو کلیک کنید. 3. گزینه Shutdown را انتخاب کنید. همین‌طور علاوه بر Shutdown می‌توانید گزینه‌های Sleep now یا Restart را هم انتخاب کنید و از عملکرد آنها هم استفاده کنید.",
  },
  {
    id: 2,
    question: "چرا دکمه خاموش روشن ریموت کنترل پادباکس من کار نمی‌کند؟",
    answer:
      "حتماً باطری ایرموس خودتان را چک کنید. درصورتی‌که باطری ضعیف باشد، هنگام زدن دکمه پاور با دو چشمک ریز و سریع روی ایرموس روبه‌رو می‌شوید. باطری‌های ایرموس را عوض کنید تا این مورد حل شود. (در صورت ضعیف‌بودن باطری، دکمه پاور زودتر از بقیه دکمه‌ها عملکردش را از دست می‌دهد.)",
  },
  {
    id: 3,
    question: "چطور محتوای تصویری با کیفیت 4K تماشا کنم",
    answer:
      "برای تماشای محتوای 4K ابتدا باید مطمئن شوید که تلویزیونتان از پخش این کیفیت تصویری پشتیبانی می‌کند. در مرحله بعد، از سرعت و حجم اینترنت خودتان اطمینان پیدا کنید. یک فایل یک‌دقیقه‌ای 4K حدود یک و نیم گیگ حجم دارد! برای تماشای ویدئوهایی با کیفیت 4K احتیاج به کابل HDMI مخصوص دارید. نسخه HDMI 2.0 و مدل‌های بعدی کابل HDMI قابلیت پخش تصاویر 4K را دارند و نسخه‌های قبلی از این کیفیت تصویری پشتیبانی نمی‌کنند. هر پخش‌کننده مولتی مدیایی هم قادر به اجرای فایل‌های 4K نیست. ما به شما پیشنهاد می‌کنیم برای تماشای این فرمت از پلیر VLC استفاده کنید. شما می‌توانید این پلیر را از پاداستور پادباکس دانلود کنید.",
  },
  {
    id: 4,
    question: "چطور یک محتوا را به علاقه‌مندی‌های خودم اضافه کنم؟",
    answer:
      "با ورود به صفحه هر محتوا و در کنار دکمه پخش، علامت فلش برعکسی را مشاهده می‌کنید. با کلیک‌کردن روی آن یک کشو در سمت چپ صفحه باز می‌شود که دو گزینه به شما ارائه می‌کند: «بعداً می‌بینم» و «موردعلاقه‌ها». شما می‌توانید محتوای موردنظرتان را داخل هر کدام از این دسته‌بندی‌ها قرار بدهید.",
  },
  {
    id: 5,
    question: "چطوری سرعت حرکت نشانگر ایرموس را کم یا زیاد کنم؟",
    answer:
      "برای کم‌کردن سرعت حرکت ایرموس کافی است در یک صفحه خالی از لانچر، دکمه OK روی کنترل ایرموس را نگه دارید و بعد با استفاده از دکمه‌های کم یا زیاد کردن صدا، سرعت حرکت نمایشگر ایرموس را یک واحد کم یا زیاد کنید.",
  },
  {
    id: 6,
    question:
      "چرا با اینکه دستگاه پادباکس من به اینترنت وصل است اما چیزی پخش نمی‌کند؟",
    answer:
      "این مشکل زمانی پیش می‌آید که ساعتِ دستگاه پادباکس تنظیم نیست، در این حالت با اینکه دستگاه به یک سرویس اینترنت وصل است اما آنلاین نیست و نمی‌شود با آن محتوای آنلاینی دید. برای رفع این مشکل به بخش تنظیمات و سپس ساعت بروید و با واردکردن زمان دقیق، مشکل اتصال به اینترنت را رفع کنید.",
  },
  {
    id: 7,
    question: "چطوری زبان سیستم‌عامل دستگاه پادباکسم را عوض کنم؟",
    answer:
      "برای تغییر زبان سیستم‌عامل دستگاه پادباکس باید وارد تنظیمات دستگاه شوید. پس از آن روی گزینه‌ها اسکرول کنید و پایین بیایید تا به گزینه سیستم برسید. بعد از کلیک روی سیستم و از بخش زبان‌ها، یکی از زبان‌های موجود را انتخاب کنید یا روی علامت + بزنید و یک زبان جدید به سیستم‌عامل اندروید پادباکستان اضافه کنید.",
  },
  {
    id: 8,
    question: "چرا زبان منوی سیستم‌عامل دستگاه به‌هم‌ریخته است؟",
    answer:
      "پادباکس از تکنولوژی HDMI-CEC استفاده می‌کند. این تکنولوژی به سیستم‌عامل پادباکس امکان می‌دهد تا زبان دستگاه را به‌صورت پیش‌فرض بر اساس زبانی که روی تلویزیون اعمال شده نمایش دهد. پس اگر در سیستم‌عامل پادباکس با زبانی عجیب‌وغریب روبه‌رو شدید به بخش تنظیمات در Droid Setting بروید و گزینه HDMI-CEC را که به‌صورت پیش‌فرض روشن است خاموش کنید. سپس به بخش تنظیمات زبان سیستم‌عامل دستگاه بروید و زبان دلخواهتان را انتخاب کنید.",
  },
  {
    id: 9,
    question: "پادباکس چطوری به اینترنت وصل می‌شود؟",
    answer:
      "شما با استفاده از اینترنت wi-fi، هات اسپات یا کابل LAN می‌توانید پادباکس را به اینترنت وصل کنید. در حال حاضر پادباکس ورودیِ سیم‌کارت ندارد و نمی‌توانید با سیم‌کارت به اینترنت وصل شوید.",
  },
  {
    id: 10,
    question: "اندروید باکس پادباکس چیست؟",
    answer:
      "پادباکس سخت‌افزاری است که با کاربری آسان می‌تواند هر تلویزیونی را به یک تلویزیون هوشمند با تمام امکانات آن تبدیل کند. شما می‌توانید انواع اپ‌های اندرویدی را روی پادباکس نصب و اجرا کنید یا از سرویس‌های سرگرمی و کاربردی اختصاصی آن استفاده کنید.",
  },
];

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenQuestion(index === openQuestion ? null : index);
  };

  const [searchItem, setSearchItem] = useState("");

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <div className="flex flex-col justify-center items-center text-center leading-loose">
      <div className="flex flex-col justify-center items-center">
        <div className="grid justify-items-center p-10 gap-7 max-md:w-full">
          <h1 className="max-md:text-xl text-5xl">
            برای راهنمایی و پاسخ به سوالات شما آماده ایم
          </h1>
          <h3 className="max-md:text-base text-xl">
            !شاید برای شما هم سوال شده باشد
          </h3>
        </div>
        <div className="flex justify-center gap-16 m-10 cursor-pointer max-md:w-full max-md:flex-col">
          <div
            onClick={() => handleInputChange(e)}
            className="grid justify-items-center opacity-40 hover:opacity-70"
          >
            <img className="faq-cards" src="../../../tv.png" />
            <p>تماشا در تلوزیون</p>
          </div>
          <div
            onClick={() => handleInputChange(e)}
            className="grid justify-items-center opacity-40 hover:opacity-70"
          >
            <img className="faq-cards" src="../../../lunch.png" />
            <p>راه اندازی دستگاه</p>
          </div>
          <div
            onClick={() => handleInputChange(e)}
            className="grid justify-items-center opacity-40 hover:opacity-70"
          >
            <img className="faq-cards" src="../../../service.png" />
            <p>خدمات پس از فروش</p>
          </div>
          <div
            onClick={() => handleInputChange(e)}
            className="grid justify-items-center opacity-40 hover:opacity-70"
          >
            <img className="faq-cards" src="../../../allQ.png" />
            <p>همه سوالات</p>
          </div>
        </div>
        {/* acardeon */}
        <div className="flex flex-col w-screen justify-center items-center mt-20">
          <div className="flex flex-col text-right justify-center items-center w-1/2 max-md:w-full max-md:px-10">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="w-full p-8 mb-4 cursor-pointer rounded-xl bg-white bg-opacity-10"
                onClick={() => handleQuestionClick(index)}
              >
                <div className="flex justify-end items-center max-md:w-full">
                  <h3 className="w-full font-semibold max-md:text-xs">
                    {item.question}
                  </h3>
                  <div className="ml-5 w-3 aspect-square bg-red-600 rounded-full max-md:w-1"></div>
                </div>
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-stone-300 font-ligh px-8 my-5"
                    >
                      <p className="max-md:text-sm">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FaqForm />
    </div>
  );
}

export default Faq;
