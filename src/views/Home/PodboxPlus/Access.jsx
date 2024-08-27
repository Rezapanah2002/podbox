import React from "react";

function Access() {
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-3/4 h-3/4 max-[780px]:w-full">
          <div className="grid grid-cols-4 gap-5 h-full max-[1270px]:grid-cols-2 max-[730px]:grid-cols-1">
            <div className="app-cards">
              <img src="../../../mobile.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light max-[780px]:text-xs">
                  پادباکس پلاس (نسخه موبایل)
                </h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  دسترسی به تمام محتواهای پادباکس روی گوشی هوشمند
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black py-3 w-full hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                نصب پادباکس
              </button>
            </div>
            <div className="app-cards">
              <img src="../../../PWA.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light max-[780px]:text-xs">وب اپلیکیشن</h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  در هر مرورگری، تمام محتواهای پادباکس را ببینید!
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black  w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                نسخه تلوزیون
              </button>
            </div>
            <div className="app-cards">
              <img src="../../../androidTV.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light max-[780px]:text-xs">
                  پادباکس پلاس (نسخه تی‌وی)
                </h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  محتوای پادباکس روی تلویزیون هوشمند یا اندروید باکس‌ها
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                PWA آدرس
              </button>
            </div>
            <div className="app-cards">
              <img src="../../../IOS.png" />
              <div className="flex flex-col justify-center items-end text-right">
                <h1 className="font-light max-[780px]:text-xs">
                  نسخه تحت وب (IOS)
                </h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  دسترسی کاربران IOS به تمام امکانات و محتواهای پادباکس
                </p>
              </div>
              <button className="font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
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
