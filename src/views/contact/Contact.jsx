import React from "react";
import ConForm from "./ConForm";

function Contact() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-32 w-2/3 flex flex-col justify-center items-center text-center ">
        <h1 className="text-5xl mb-5 text-light">
          با ما در تماس باشید، در هر ساعت از شبانه‌روز
        </h1>
        <p className="text-lg leading-loose text-stone-300">
          پادباکس هر هفت روز هفته و هر ساعت از شبانه‌روز آماده است تا پاسخگوی
          نیازها و پرسش‌های شما باشد. شما می‌توانید از طریق راه‌های زیر،
          حرف‌هایتان را به ما منتقل کنید. منتظر شنیدن خبری از شما هستیم
        </p>
      </div>
      <div className="w-3/5 flex justify-center items-center gap-10">
        <div className="text-right w-2/5 bg-stone-500 bg-opacity-20 rounded-3xl flex flex-col justify-center items-end">
          <div className="p-12 cursor-pointer">
            <div className="mb-5 flex justify-end items-center gap-3">
              <h1 className="text-xl">واحد پشتبانی</h1>
              <img src="phone.png" />
            </div>
            <p className="mb-5 text-stone-400">
              پاسخگویی 24 ساعته در 7 روز هفته با مرکز تماس
            </p>
            <a href="tel:+02191033000" className="text-red-500">
              02191033000
            </a>
          </div>
        </div>
        <div className="text-right w-2/5 bg-stone-500 bg-opacity-20 rounded-3xl flex flex-col justify-center items-end">
          <div className="p-12 cursor-pointer">
            <div className="mb-5 flex justify-end items-center gap-3">
              <h1 className="text-xl">گفتگو با کارشناسان</h1>
              <img src="mssg.png" />
            </div>
            <p className="mb-5 text-stone-400">
              گفتگوی آنلاین با کارشناسان مرکز تماس از راه چت
            </p>
            <a
              href="https://accounts.pod.ir/oauth2/authorize/index.html?client_id=88413l69cd4051a039cf115ee4e073&response_type=code&redirect_uri=https://talk.pod.ir&code_challenge_method=S256&code_challenge=HiKLpmqIO0Xg3dJCGjh9a_YyWXNOWMzdUA1ENzCNNyQ&scope=social:write"
              className="text-red-600"
            >
              ارسال پیام
            </a>
          </div>
        </div>
      </div>
      <ConForm />
      <div className="text-right w-1/2">
        <h1>نشانی پادباکس</h1>
        <div className="flex items-end gap-1">
          <p>
            تهران، بلوار نلسون ماندلا، خیابان شهید علیرضا دامن افشار، پلاک 25
            طبقه 1 واحد شرقی _ شماره تماس سرزمین هوشمند پاد: 021-88884727
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
        <div className="w-full my-20 h-64 bg-white bg-opacity-10 rounded-3xl flex justify-center items-center">
          <h1 className="text-5xl">نقشه نشان</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 text-red-700 ml-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
        </div>
      </div>
      <div className="my-20 w-1/2 bg-gradient-to-r from-b-from via-b-via to-b-to h-full rounded-3xl flex justify-between items-center p-10">
        <a href="/work-with-us">
          <button className="bg-white rounded-lg text-stone-600 px-10 py-3 hover:scale-105 duration-300">
            همکاری با ما
          </button>
        </a>
        <div className="text-right">
          <h1 className="text-3xl mb-5">همکاری با پادباکس</h1>
          <p>
            اگر مایل به همکاری با پادباکس هستید، اطلاعات خود را برای ما ارسال
            کنید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
