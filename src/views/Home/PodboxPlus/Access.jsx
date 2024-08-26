import React from "react";

function Access() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-3/4 h-3/4">
          <div className="grid grid-cols-4 gap-5 h-full p-20">
            <div className="app-cards">
              <img src="../../../mobile.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light">پادباکس پلاس (نسخه موبایل)</h1>
                <p className="text-sm text-stone-400">
                  دسترسی به تمام محتواهای پادباکس روی گوشی هوشمند
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black py-3 w-full hover:scale-110 duration-300 hover:shadow-2xl">
                نصب پادباکس
              </button>
            </div>
            <div className="app-cards">
              <img src="../../../PWA.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light">وب اپلیکیشن</h1>
                <p className="text-sm text-stone-400">
                  در هر مرورگری، تمام محتواهای پادباکس را ببینید!
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black  w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl">
                نسخه تلوزیون
              </button>
            </div>
            <div className="app-cards">
              <img src="../../../androidTV.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light">پادباکس پلاس (نسخه تی‌وی)</h1>
                <p className="text-sm text-stone-400">
                  محتوای پادباکس روی تلویزیون هوشمند یا اندروید باکس‌ها
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl">
                PWA آدرس
              </button>
            </div>
            <div className="app-cards">
              <img src="../../../IOS.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light">نسخه تحت وب (IOS)</h1>
                <p className="text-sm text-stone-400">
                  دسترسی کاربران IOS به تمام امکانات و محتواهای پادباکس
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl">
                PWA لینک نسخه
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Access;
