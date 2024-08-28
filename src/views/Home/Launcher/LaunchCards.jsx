import React from "react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LaunchCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const l_cards = [
    {
      id: 1,
      icon: "../../../headphone.png",
      title: "کتاب صوتی و پادکست",
      description:
        "راحت‌ترین راه دسترسی به دانش و اطلاعات، کتاب‌های صوتی و پادکست‌ها هستند که در پادباکس در دسترس است",
    },
    {
      id: 2,
      icon: "../../../note.png",
      title: "موسیقی",
      description:
        "از شرق تا غرب، از سنتی تا راک، از آرامش‌بخش تا حماسی و هر چیزی که حال و هوای شنیدنش را داشته باشید",
    },
    {
      id: 3,
      icon: "../../../movie.png",
      title: "فیلم و سریال",
      description:
        "کاش زمان برای دیدن فیلم و سریال‌های پادباکس داشته باشید! اگر نه همه‌شان، حداقل بهترین‌ها",
    },
    {
      id: 4,
      icon: "../../../finance.png",
      title: "خدمات مالی",
      description:
        "پرداخت قبض و خرید شارژ تلفن، بسته اینترنت و شارژ کیف پول در بخش خدمات مالی پادباکس",
    },
    {
      id: 5,
      icon: "../../../book.png",
      title: "مجله و اخبار",
      description:
        "اگر اهل خواندن هستید، بخش مجله و اخبار همان جایی است که هر روز به آن احتیاج دارید و دنبالش می‌گشتید",
    },
    {
      id: 6,
      icon: "../../../gamepad.png",
      title: "پخش زنده",
      description:
        "تمام شبکه‌های تلویزیونی و رادیویی را هر جایی که هستید و با اینترنت نیم‌بها تماشا کنید",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % l_cards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [l_cards.length]);

  return (
    <div className="w-5/6 flex justify-center items-center m-20">
      <div className="w-full flex flex-col justify-center items-center">
        <div className=" w-2/3 h-4/5 max-[1250px]:w-full">
          <div className="grid grid-cols-3 max-[1250px]:grid-cols-2 max-[820px]:hidden grid-rows-2 gap-10">
            {l_cards.map((card) => (
              <div key={card.id} className="sec3-cards">
                <div className="sec3-icons">
                  <img src={card.icon} alt={card.title} />
                </div>
                <div>
                  <h2 className="font-semibold mb-5">{card.title}</h2>
                  <p className="text-stone-400 font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*stack anim*/}
        <div className="hidden max-[820px]:block relative">
          <AnimatePresence>
            <motion.div
              key={l_cards[currentIndex].id}
              className="sec3-cards"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="sec3-icons mb-4">
                <img
                  src={l_cards[currentIndex].icon}
                  alt={l_cards[currentIndex].title}
                />
              </div>
              <h2 className="font-semibold mb-5">
                {l_cards[currentIndex].title}
              </h2>
              <p className="text-stone-400 font-light text-center">
                {l_cards[currentIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default LaunchCards;
