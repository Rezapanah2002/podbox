import React from "react";

function Access() {
  const apps = [
    {
      id: 1,
      img: "../../../mobile.png",
      title: "پادباکس پلاس (نسخه موبایل)",
      description: "دسترسی به تمام محتواهای پادباکس روی گوشی هوشمند",
      button: "نصب پادباکس",
    },
    {
      id: 2,
      img: "../../../PWA.png",
      title: "وب اپلیکیشن",
      description: "در هر مرورگری، تمام محتواهای پادباکس را ببینید",
      button: "PWA آدرس",
    },
    {
      id: 3,
      img: "../../../androidTV.png",
      title: "پادباکس پلاس (نسخه تی‌وی)",
      description: "محتوای پادباکس روی تلویزیون هوشمند یا اندروید باکس‌ها",
      button: "نسخه تلوزیون",
    },
    {
      id: 4,
      img: "../../../IOS.png",
      title: "(IOS) نسخه تحت وب",
      description: "دسترسی کاربران IOS به تمام امکانات و محتواهای پادباکس",
      button: "PWA لینک نسخه",
    },
  ];
  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <div className="w-3/4 h-3/4 max-[780px]:w-full">
          <div className="grid grid-cols-4 gap-5 h-full max-[1270px]:grid-cols-2 max-[730px]:grid-cols-1">
            <div className="app-cards p-5 max-[730px]:flex-row">
              <img src="../../../mobile.png" className="max-[730px]:w-1/4" />
              <div className="flex flex-col justify-center items-end text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 min-[730px]:hidden mb-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <h1 className="font-light max-[780px]:text-xs">
                  پادباکس پلاس (نسخه موبایل)
                </h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  دسترسی به تمام محتواهای پادباکس روی گوشی هوشمند
                </p>
              </div>
              <button className="max-[730px]:hidden font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black py-3 w-full hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                نصب پادباکس
              </button>
              {/* link: https://boxapi.pod.ir/v3/app/version/mobile */}
            </div>
            <div className="app-cards p-5 max-[730px]:flex-row">
              <img src="../../../PWA.png" className="max-[730px]:w-1/4" />
              <div className="flex flex-col justify-center items-end text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 min-[730px]:hidden mb-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <h1 className="font-light max-[780px]:text-xs">وب اپلیکیشن</h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  در هر مرورگری، تمام محتواهای پادباکس را ببینید
                </p>
              </div>
              <button className="max-[730px]:hidden font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black  w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                نسخه تلوزیون
              </button>
              {/* link: https://boxapi.pod.ir/v3/app/version/non-launcher */}
              {/* link bazar: https://cafebazaar.ir/app/com.fanap.podbox.tv.nl */}
            </div>
            <div className="app-cards p-5 max-[730px]:flex-row">
              <img src="../../../androidTV.png" className="max-[730px]:w-1/4" />
              <div className="flex flex-col justify-center items-end text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 min-[730px]:hidden mb-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <h1 className="font-light max-[780px]:text-xs">
                  پادباکس پلاس (نسخه تی‌وی)
                </h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  محتوای پادباکس روی تلویزیون هوشمند یا اندروید باکس‌ها
                </p>
              </div>
              <button className="max-[730px]:hidden font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                PWA آدرس
              </button>
              {/* link: https://app.podbox.ir/ */}
            </div>
            <div className="app-cards p-5 max-[730px]:flex-row">
              <img src="../../../IOS.png" className="max-[730px]:w-1/4" />
              <div className="flex flex-col justify-center items-end text-right">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5 min-[730px]:hidden mb-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
                <h1 className="font-light max-[780px]:text-xs">
                  (IOS) نسخه تحت وب
                </h1>
                <p className="text-sm text-stone-400 max-[780px]:text-xs">
                  دسترسی کاربران IOS به تمام امکانات و محتواهای پادباکس
                </p>
              </div>
              <button className="max-[730px]:hidden font-light justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black w-full py-3 hover:scale-110 duration-300 hover:shadow-2xl max-[780px]:text-xs">
                PWA لینک نسخه
              </button>
              {/* link: https://app.podbox.ir/ */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Access;
