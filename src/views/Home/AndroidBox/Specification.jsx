import React from "react";

function Specification() {
  return (
    <div
      id="sectionTech"
      className="flex flex-col justify-center items-center w-2/3 m-32"
    >
      <h1 className="text-2xl mb-10 max-[780px]:text-base">
        مشخصات فنی سخت افزار پادباکس
      </h1>
      <div>
        <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[870px]:grid-cols-1 grid-rows-2 gap-5">
          <div className="h-full bg-gradient-to-t from-orange-800 via-orange-900 to-orange-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../4k.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">4K @60fps, UHD,HDR+</p>
              <p className="text-xs">
                گرافیک قدرتمند برای تماشای فیلم و بازی با کیفیت 4K و حتی بالاتر
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-green-800 via-green-900 to-green-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="aspect-square w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../usb.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">USB2.0 + USB3.0</p>
              <p className="text-xs  mb-5">
                USB 2.0، USB 3.0، HDMI 2.1، AV و... برای اتصال تلویزیون، حافظه
                جانبی
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-red-800 via-red-900 to-red-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../storag.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">32GB</p>
              <p className="text-xs">
                قابلیت ارتقا حافظه داخلی تا 1 ترابایت با کمک حافظه خارجی
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-teal-800 via-teal-900 to-teal-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="aspect-square w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../ram.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">4GB DDR3</p>
              <p className="text-xs">
                RAM پرسرعت برای چندوظیفگی و اجرای برنامه‌های سنگین
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../wifi.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">5/2.4 GHz</p>
              <p className="text-xs">
                وای‌فای 2.4 گیگاهرتز و 5 گیگاهرتز برای اتصال سریع‌تر و پایداری
                بهتر
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-fuchsia-800 via-fuchsia-900 to-fuchsia-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../os.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">Android 9</p>
              <p className="text-xs">
                رابط کاربری روان و اختصاصی پادباکس برای دسترسی به دنیای محتوا
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-yellow-800 via-yellow-900 to-yellow-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../bluetooth.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">Bluetooth4.0</p>
              <p className="text-xs">
                اتصال سریع و بدون تأخیر به دستگاه‌های بلوتوثی مانند هدست، بلندگو
                و...
              </p>
            </div>
          </div>
          <div className="h-full bg-gradient-to-t from-pink-800 via-pink-900 to-pink-950 rounded-3xl flex flex-col justify-start items-center mb-5">
            <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
              <img src="../../../cpu.png" />
            </div>
            <div className="text-center px-5">
              <p className="mb-10">Amlogic S905x3</p>
              <p className="text-xs">
                پردازنده قدرتمند برای اجرای روان برنامه‌ها و بازی‌ها
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specification;
