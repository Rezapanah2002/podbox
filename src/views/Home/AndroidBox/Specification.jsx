import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Specification() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      id: 1,
      image: "../../../4k.png",
      title: "4K @60fps, UHD,HDR+",
      description:
        "گرافیک قدرتمند برای تماشای فیلم و بازی با کیفیت 4K و حتی بالاتر",
      bgColor: "from-orange-800 via-orange-900 to-orange-950",
    },
    {
      id: 2,
      image: "../../../usb.png",
      title: "USB2.0 + USB3.0",
      description:
        "USB 2.0، USB 3.0، HDMI 2.1، AV و... برای اتصال تلویزیون، حافظه جانبی",
      bgColor: "from-green-800 via-green-900 to-green-950",
    },
    {
      id: 3,
      image: "../../../storag.png",
      title: "32GB",
      description: "قابلیت ارتقا حافظه داخلی تا 1 ترابایت با کمک حافظه خارجی",
      bgColor: "from-red-800 via-red-900 to-red-950",
    },
    {
      id: 4,
      image: "../../../ram.png",
      title: "4GB DDR3",
      description: "RAM پرسرعت برای چندوظیفگی و اجرای برنامه‌های سنگین",
      bgColor: "from-teal-800 via-teal-900 to-teal-950",
    },
    {
      id: 5,
      image: "../../../wifi.png",
      title: "5/2.4 GHz",
      description:
        "وای‌فای 2.4 گیگاهرتز و 5 گیگاهرتز برای اتصال سریع‌تر و پایداری بهتر",
      bgColor: "from-neutral-700 via-neutral-800 to-neutral-900",
    },
    {
      id: 6,
      image: "../../../os.png",
      title: "Android 9",
      description:
        "رابط کاربری روان و اختصاصی پادباکس برای دسترسی به دنیای محتوا",
      bgColor: "from-fuchsia-800 via-fuchsia-900 to-fuchsia-950",
    },
    {
      id: 7,
      image: "../../../bluetooth.png",
      title: "Bluetooth4.0",
      description:
        "اتصال سریع و بدون تأخیر به دستگاه‌های بلوتوثی مانند هدست، بلندگو و...",
      bgColor: "from-yellow-800 via-yellow-900 to-yellow-950",
    },
    {
      id: 8,
      image: "../../../cpu.png",
      title: "Amlogic S905x3",
      description: "پردازنده قدرتمند برای اجرای روان برنامه‌ها و بازی‌ها",
      bgColor: "from-pink-800 via-pink-900 to-pink-950",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div
      id="sectionTech"
      className="pt-40 pb-20 px-5 flex flex-col justify-center items-center m-32 w-2/3 max-[780px]:w-full"
    >
      <h1 className="text-2xl mb-10 max-[780px]:text-lg">
        مشخصات فنی سخت افزار پادباکس
      </h1>
      <div className="relative w-full h-full">
        <div className="grid grid-cols-4 max-[1200px]:grid-cols-3 max-[870px]:hidden grid-rows-2 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`h-full bg-gradient-to-t ${card.bgColor} rounded-3xl flex flex-col justify-start items-center mb-5`}
            >
              <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="text-center px-5">
                <p className="mb-10">{card.title}</p>
                <p className="text-xs">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/*slide anim*/}
        <div className="hidden max-[870px]:block relative mb-20">
          <AnimatePresence>
            <motion.div
              key={cards[currentIndex].id}
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-2 absolute top-0 left-0 right-0 bg-gradient-to-t  ${cards[currentIndex].bgColor} rounded-3xl flex flex-col justify-start items-center mb-5`}
            >
              <div className="w-2/5 m-5 bg-stone-300 rounded-full p-5 flex justify-center items-center bg-opacity-10">
                <img
                  src={cards[currentIndex].image}
                  alt={cards[currentIndex].title}
                />
              </div>
              <div className="text-center">
                <p className="mb-10">{cards[currentIndex].title}</p>
                <p className="text-xs mb-10">
                  {cards[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Specification;
