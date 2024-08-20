"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import "@/assets/css/globals.css";

function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [100, -10]);
  const smoothY = useSpring(y, { stiffness: 600, damping: 200 });

  return (
    <div>
      <section className="bg-custom-gradient h-full w-full">
        <div className="flex flex-col items-center whitespace-pre-wrap pt-56 px-10">
          <h1 className="pt-12 px-40 text-8xl text-center font-light w-full mb-10 max-[745px]:text-2xl">
            پادباکس، دوستی برای سرگرمی و زندگی هوشمند
          </h1>
          <h3 className="text-2xl text-wrap text-center w-4/5 max-[745px]:text-lg">
            شما که دنبال استریم سرگرمی و آوردن هوشمندی دیجیتال به خانه و
            زندگی‌تان هستید، شما پادباکس را کم دارید
          </h3>
          <a href="https://app.podbox.ir/" target="_blank" className="mt-10">
            <button className="font-thin text-2xl flex justify-center items-center py-6 px-10 border-2 bg-w-b border-b-from rounded-xl hover:scale-110 duration-500">
              ورود به وب اپلیکیشن پادباکس
            </button>
          </a>
        </div>
        {/* Section-1 */}
        <div className="relative mt-[100px]">
          {/* animation */}
          <div className="w-full h-[90vh] flex justify-center max-[1210px]:hidden">
            <motion.div className="flex justify-center w-2/3 h-4/5 bg-gradient-to-r from-b-from via-b-via to-b-to rounded-3xl relative">
              <motion.img
                className="px-16 pt-20 w-full h-full absolute bottom-0"
                src="../../../anim-bg.png"
              />

              {/* voice */}
              <motion.div
                className="bg-gray-400 bg-opacity-20 rounded-3xl w-1/3 h-28 absolute -top-28 -left-28 flex justify-evenly items-center cursor-grab"
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
                style={{ y: smoothY }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.div className="w-56 h-2 rounded-2xl bg-slate-100 px-4" />
                <motion.div className="w-16 h-16 rounded-full bg-slate-100 px-4" />
              </motion.div>

              {/* soul */}
              <Link
                className="drag-none"
                href="https://app.podbox.ir/videos/detail/3350655"
                target="_blank"
              >
                <motion.div
                  className="bg-gray-400 bg-opacity-20 rounded-3xl w-64 h-80 absolute -top-44 -right-28 flex justify-center items-center cursor-grab"
                  drag
                  dragConstraints={{
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  }}
                  dragTransition={{
                    bounceStiffness: 600,
                    bounceDamping: 10,
                  }}
                  style={{
                    y: smoothY,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <motion.img
                    className="relative w-4/5 rounded-2xl opacity-70 drag-none"
                    src="../../../soul.jpeg"
                  />
                </motion.div>
              </Link>

              {/* dune */}
              <motion.div>
                <Link
                  className="drag-none"
                  href="https://app.podbox.ir/videos/detail/3353042"
                  target="_blank"
                >
                  <motion.div
                    className="bg-gray-400 bg-opacity-20 rounded-3xl w-56 h-72 absolute bottom-16 -left-20 flex justify-center items-center cursor-grab"
                    drag
                    dragConstraints={{
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                    }}
                    dragTransition={{
                      bounceStiffness: 600,
                      bounceDamping: 10,
                    }}
                    style={{
                      y: smoothY,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <img
                      className="relative w-4/5 rounded-2xl opacity-70 drag-none"
                      src="../../../dune.jpeg"
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* music */}
              <motion.div
                className="bg-gray-400 bg-opacity-20 rounded-3xl w-40 h-40 absolute bottom-52 right-1/2 flex justify-center items-center  cursor-grab"
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
                style={{ y: smoothY }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.img
                  className="relative w-2/5 rounded-3xl drag-none"
                  src="../../../music.png"
                />
              </motion.div>

              {/* gaming */}
              <motion.div
                className="bg-gray-400 bg-opacity-20 rounded-3xl w-24 h-24 absolute bottom-28 -right-10 flex justify-center items-center cursor-grab"
                drag
                dragConstraints={{
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                }}
                dragTransition={{
                  bounceStiffness: 600,
                  bounceDamping: 10,
                }}
                style={{ y: smoothY }}
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <motion.img
                  className="relative w-2/5 rounded-3xl drag-none"
                  src="../../../gaming.png"
                />
              </motion.div>
            </motion.div>
          </div>
          {/* cards */}
          <div className="flex justify-center gap-5 w-full mb-20 mt-0">
            {/* plus */}
            <div className="cursor-pointer p-10 flex flex-col items-center justify-evenly w-1/5 h-1/2 text-right bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-90 hover:opacity-70">
              <div className="flex flex-col justify-end mb-5">
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-stone-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <h2 className="text-xl font-medium bg-gradient-to-l from-b-to to-b-from bg-clip-text inline-block text-transparent">
                    معرفی پادباکس پلاس
                  </h2>
                </div>
                <h3 className="my-2">مسیرهای دسترسی به نرم افزار</h3>
                <p className="text-stone-400 my-2">
                  با پادباکس پلاس، خیالت از سرگرمی در دسترس و همیشگی تخته
                </p>
              </div>
              <img src="../../../podboxplus.png" className="w-full" />
            </div>

            {/* luncher */}
            <div className="cursor-pointer p-10 flex flex-col items-center justify-evenly w-1/5 h-1/2 text-right bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-90 hover:opacity-70">
              <div className="flex flex-col justify-end mb-5">
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-stone-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <h2 className="text-xl font-medium bg-gradient-to-l from-green-600 to-green-300 bg-clip-text inline-block text-transparent">
                    لانچر پادباکس
                  </h2>
                </div>
                <h3 className="my-2">تلوزیون با طعم پادباکس</h3>
                <p className="text-stone-400 my-2">
                  لانچر پادباکس راهش را به برند های مختلف تلوزیون ایرانی باز
                  کرده است
                </p>
              </div>
              <img src="../../../luncher.png" className="w-full" />
            </div>

            {/* android */}
            <div class="cursor-pointer p-10 flex flex-col items-center justify-evenly text-right w-1/5 h-1/2 bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl opacity-90 hover:opacity-70">
              <div className="flex flex-col justify-end mb-5">
                <div className="flex items-center justify-between mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-stone-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                  <h1 className="text-xl font-medium bg-gradient-to-l from-indigo-600 to-indigo-400 bg-clip-text inline-block text-transparent">
                    اندروید باکس پادباکس
                  </h1>
                </div>
                <h3 className="my-2">!ابزاری که به آن احتیاج دارید</h3>
                <p className="text-stone-400 my-2">
                  همه تلویزیون های معمولی برای هوشمند شدن به پادباکس احتیاج
                  دارند
                </p>
              </div>
              <img src="../../../android.png" className="w-full" />
            </div>
          </div>
        </div>

        {/* Section-2 */}
        <div className="p-16 w-full min-h-screen flex flex-col items-center bg-gradient-radial from-indigo-950 to-stone-950 text-center">
          <h1 className="text-2xl font-medium bg-gradient-to-l from-indigo-600 to-indigo-400 bg-clip-text inline-block text-transparent">
            اندروید باکس پادباکس
          </h1>
          <h2 className="m-10 text-5xl">اندروید باکسی که به آن احتیاج دارید</h2>
          <p className="mb-5 text-2xl text-stone-500">
            مشخصات فنی و نحوه استفاده
          </p>
          <div className="p-10 m-5 w-3/5 bg-gradient-to-l from-indigo-700 via-indigo-600 to-indigo-500 rounded-2xl flex flex-col items-start">
            <div className="text-right">
              <h1 className="text-2xl m-2">پادباکس چیست؟</h1>
              <p className="text-xl">
                سخت‌افزار پادباکس می‌تواند هر تلویزیون معمولی را به یک تلویزیون
                هوشمند تبدیل کند. پادباکس مینی‌کامپیوتری است که کارکردن با آن
                بسیار آسان است و شما را به دنیای بی‌انتهای سرگرمی‌های اینترنتی
                می‌برد: فیلم، سریال، موسیقی، بازی، پادکست و... که روی اینترنت
                وجود دارد. از سوی دیگر سخت‌افزار پادباکس برای هوشمندسازی زندگی
                دیجیتال شما طراحی شده. با اندروید باکس پادباکس شما یک دستیار
                هوشمند برای کنترل و استفاده از تمام مزایا و خدمات یک ‌خانه
                هوشمند را خواهید داشت
              </p>
            </div>
            <button className="justify-start m-5 border-2 border-transparent bg-white rounded-2xl text-black px-7 py-3 hover:scale-105 duration-300 hover:shadow-2xl">
              تماشای ویدئو
            </button>
          </div>
          <div className="flex items-stretch w-3/5 gap-3">
            <div className="p-10 bg-stone-100 rounded-2xl bg-opacity-10">
              <div className="flex flex-col justify-center items-center text-right">
                <h1 className="text-2xl mb-8">محتویات جعبه پادباکس</h1>
                <p className="mb-10">
                  سخت‌افزار پادباکس، یک عدد ایرموس، یک عدد دانگل ایرموس، دو عدد
                  باتری نیم‌قلمی، یک عدد آداپتور، یک عدد کابل HDMI، دفترچه
                  راهنما
                </p>
                <img src="../../../contain.png" />
              </div>
            </div>
            <div className="p-10 bg-stone-100 rounded-2xl bg-opacity-10">
              <div className="flex flex-col justify-center items-center text-right">
                <h1 className="text-xl mb-8">ریموت کنترل ایرموس پادباکس</h1>
                <p className="mb-10">
                  ایرموس پادباکس؛ وسیله‌ای برای ناوبری آسان در صفحه تلویزیون و
                  رفتن به منوهای مختلف
                </p>
                <img src="remote.png" />
              </div>
            </div>
          </div>

          {/* specification */}
          <div
            className="w-full h-full flex flex-col justify-center items-center m-32"
            id="sectionTech"
          >
            <h1 className="text-2xl mb-10">مشخصات فنی سخت افزار پادباکس</h1>
            <div className="w-3/5">
              <div className="grid grid-cols-4 grid-rows-2 gap-10">
                <div className="h-full bg-gradient-to-t from-orange-800 via-orange-900 to-orange-950 rounded-3xl flex flex-col justify-start items-center">
                  <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                    <img src="../../../4k.png" />
                  </div>
                  <div className="text-center px-5">
                    <p className="mb-10">4K @60fps, UHD,HDR+</p>
                    <p className="text-xs">
                      گرافیک قدرتمند برای تماشای فیلم و بازی با کیفیت 4K و حتی
                      بالاتر
                    </p>
                  </div>
                </div>
                <div className="h-full bg-gradient-to-t from-green-800 via-green-900 to-green-950 rounded-3xl flex flex-col justify-start items-center">
                  <div className="aspect-square w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                    <img src="../../../usb.png" />
                  </div>
                  <div className="text-center px-5">
                    <p className="mb-10">USB2.0 + USB3.0</p>
                    <p className="text-xs  mb-5">
                      USB 2.0، USB 3.0، HDMI 2.1، AV و... برای اتصال تلویزیون،
                      حافظه جانبی
                    </p>
                  </div>
                </div>
                <div className="h-full bg-gradient-to-t from-red-800 via-red-900 to-red-950 rounded-3xl flex flex-col justify-start items-center">
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
                <div className="h-full bg-gradient-to-t from-teal-800 via-teal-900 to-teal-950 rounded-3xl flex flex-col justify-start items-center">
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
                <div className="h-full bg-gradient-to-t from-neutral-700 via-neutral-800 to-neutral-900 rounded-3xl flex flex-col justify-start items-center">
                  <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                    <img src="../../../wifi.png" />
                  </div>
                  <div className="text-center px-5">
                    <p className="mb-10">5/2.4 GHz</p>
                    <p className="text-xs">
                      وای‌فای 2.4 گیگاهرتز و 5 گیگاهرتز برای اتصال سریع‌تر و
                      پایداری بهتر
                    </p>
                  </div>
                </div>
                <div className="h-full bg-gradient-to-t from-fuchsia-800 via-fuchsia-900 to-fuchsia-950 rounded-3xl flex flex-col justify-start items-center">
                  <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                    <img src="../../../os.png" />
                  </div>
                  <div className="text-center px-5">
                    <p className="mb-10">Android 9</p>
                    <p className="text-xs">
                      رابط کاربری روان و اختصاصی پادباکس برای دسترسی به دنیای
                      محتوا
                    </p>
                  </div>
                </div>
                <div className="h-full bg-gradient-to-t from-yellow-800 via-yellow-900 to-yellow-950 rounded-3xl flex flex-col justify-start items-center">
                  <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                    <img src="../../../bluetooth.png" />
                  </div>
                  <div className="text-center px-5">
                    <p className="mb-10">Bluetooth4.0</p>
                    <p className="text-xs">
                      اتصال سریع و بدون تأخیر به دستگاه‌های بلوتوثی مانند هدست،
                      بلندگو و...
                    </p>
                  </div>
                </div>
                <div className="h-full bg-gradient-to-t from-pink-800 via-pink-900 to-pink-950 rounded-3xl flex flex-col justify-start items-center">
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
        </div>

        {/* Section-3 */}
        <div className="p-16 w-full min-h-screen flex flex-col items-center bg-gradient-radial from-emerald-950 to-stone-950 text-center">
          <h1 className="text-2xl font-medium bg-gradient-to-l from-emerald-700 to-emerald-400 bg-clip-text inline-block text-transparent">
            لانچر پادباکس
          </h1>
          <h2 className="m-10 text-5xl">تلویزیون با طعم پادباکس</h2>
          <p className="mb-5 text-2xl text-stone-500">
            .لانچر پادباکس راهش را به برندهای مختلف تلویزیون ایرانی بازکرده است
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
