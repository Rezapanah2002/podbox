import React from "react";

function FaqForm() {
  return (
    <div className="w-3/4">
      <div className="w-full bg-opacity-10 rounded-3xl bg-white my-20">
        <div className="p-4 flex justify-between items-center max-md:flex-col">
          <form
            action="/submit"
            method="post"
            className="flex flex-col my-10 w-full"
          >
            <input
              type="text"
              name="name"
              placeholder="ایمیل خود را وارد کنید"
              required
              className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            />
            <select
              id="cooperation"
              name="cooperation"
              className="text-white rounded-lg p-4 max-md:text-sm text-right bg-stone-800 my-5 border border-stone-400"
            >
              <option disabled selected hidden>
                لطفا موضوع را انتخاب کنید
              </option>
              <option value="content">خدمات پس از فروش</option>
              <option value="development">راه اندازی دستگاه</option>
              <option value="hardware">تماشا در تلوزیون</option>
            </select>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
            ></textarea>
            <div className="flex justify-end w-full">
              <div className="flex justify-end gap-3 items-center">
                <img src="refresh.png" className="mr-2 cursor-pointer" />
                <div className="flex justify-center items-center h-16 w-1/3 rounded-lg bg-slate-500 border-2 border-dashed border-slate-400">
                  <p className="text-slate-300">CAPTCHA</p>
                </div>
                <input
                  type="number"
                  id="captcha"
                  name="captcha"
                  required
                  className="rounded-lg p-4 text-right bg-stone-800 my-5 border border-stone-400"
                />
              </div>
            </div>
            <button
              type="submit"
              className="max-md:w-full w-full bg-white rounded-lg p-4 text-black font-light my-5 hover:scale-105 duration-300"
            >
              ارسال پیام
            </button>
          </form>
          <div className="text-right w-1/2 max-md:w-full leading-loose">
            <h1 className="text-3xl font-light max-md:text-lg">
              به کمک بیشتری نیاز دارید؟
            </h1>
            <p className="text-xl text-stone-300 my-5 font-thin max-md:text-sm">
              در صورت بروز هرگونه سوال یا نیاز به کمک، با ما تماس بگیرید. ما
              خوشحال خواهیم بود تا به شما کمک کنیم
            </p>
            <div className="flex items-center justify-end mt-10">
              <div>
                <a href="tel:+02191033000">
                  <p className="text-red-600 max-md:text-sm">02191033000</p>
                </a>
                <p className="max-md:text-xs">
                  پاسخ‌گویی ۲۴ ساعته در ۷ روز هفته با مرکز تماس
                </p>
              </div>
              <img src="../../../phone.png" className="ml-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqForm;
