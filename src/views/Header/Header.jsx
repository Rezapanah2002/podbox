"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { usePropWindow } from "../../hooks/usePropWindow";
import { motion, AnimatePresence } from "framer-motion";

function Header({ menu }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { width } = usePropWindow();

  console.log("header", menu);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (width > 1076 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [width, isMenuOpen]);

  return (
    <header className="border-b-2 border-stone-950 shadow-sm shadow-stone-950 sticky top-0 left-0 right-0 w-full z-50 bg-black">
      {/* navbar */}
      <nav className="text-slate-300 flex items-center justify-around font-light text-lg w-full py-2">
        {/* button */}
        <button
          className="bg-gradient-to-r from-b-from via-b-via to-b-to rounded-xl py-2 px-5 hover:scale-110 hover:opacity-100 duration-500"
          onClick={toggleModal}
        >
          خرید پادباکس
        </button>

        {/* useAPI */}
        <ul
          className={`${
            isMenuOpen || width > 1076
              ? "m-3 flex justify-evenly gap-10 py-3"
              : "hidden"
          } ${
            isMenuOpen
              ? "fixed flex-col justify-center items-end gap-2 py-20 pr-20 top-10 mx-0 left-0 w-full h-full bg-black overflow-y-scroll"
              : "flex justify-evenly gap-12"
          }`}
          id="menu"
        >
          {menu
            ?.slice()
            ?.reverse()
            .map((link, index) =>
              index === menu.length - 1 ? (
                <li className="nav-bar special-item" key={index}>
                  <Link
                    className={`link special-link ${
                      pathname === "/" ? "text-slate-50 font-semibold" : ""
                    }`}
                    href="/"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    پادباکس
                  </Link>
                </li>
              ) : (
                <li className="nav-bar" key={index}>
                  <Link
                    className={`link ${
                      pathname === link.metadata.link
                        ? "text-slate-50 font-semibold"
                        : ""
                    }`}
                    href={link.metadata.link}
                    onClick={() => setIsMenuOpen(false)}
                    target={link.metadata.target}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            )}
        </ul>

        <div
          onClick={toggleMenu}
          id="burger"
          className={`cursor-pointer hover:text-gray-400 duration-300 ${
            width <= 1076 ? "block" : "hidden"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        {/* logo */}
        <Link
          className={`link ${pathname === "/" ? "" : "text-gray-400"}`}
          href="/"
        >
          <img src="../../../podbox.png" alt="پادباکس" />
        </Link>
      </nav>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
            />
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={toggleModal}
            >
              <motion.div
                className="p-5 w-1/2 rounded-3xl bg-stone-900 max-[670px]:w-5/6"
                initial={{ y: "-10%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "10%", opacity: 0 }}
                transition={{ duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="text-2xl text-white" onClick={toggleModal}>
                  ✖
                </button>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-center">
                    <h1 className="text-2xl m-2 max-[900px]:text-sm">
                      از کجا سخت‌افزار پادباکس را بخرم؟
                    </h1>
                    <p className="text-xl max-[900px]:text-sm">
                      با انتخاب هر یک از فروشگاه‌ها، می‌توانید نسبت به خرید
                      دستگاه پادباکس اقدام نمایید
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-5 m-10">
                    <div className="w-24 h-24 bg-white bg-opacity-10 rounded-2xl cursor-pointer hover:bg-opacity-5">
                      <a
                        href="https://www.digikala.com/product/dkp-9066304/%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7%DA%A9%D8%B3-%D9%BE%D8%A7%D8%AF%D8%A8%D8%A7%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-hc-1/"
                        target="_blank"
                      >
                        <div className="flex flex-col justify-center items-center px-4 py-2">
                          <img
                            src="../../../digikala.png"
                            className="w-12 mb-2"
                          />

                          <p className="font-light">دیجی کالا</p>
                        </div>
                      </a>
                    </div>
                    <div className="w-24 h-24 bg-white bg-opacity-10 rounded-2xl cursor-pointer hover:bg-opacity-5">
                      <a
                        href="https://www.technolife.ir/product-8153/%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7%DA%A9%D8%B3-%D9%BE%D8%A7%D8%AF%D8%A8%D8%A7%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-hc-1"
                        target="_blank"
                      >
                        <div className="flex flex-col justify-center items-center px-4 py-2">
                          <img
                            src="../../../technolife.png"
                            className="w-12 mb-2"
                          />
                          <p className="font-light">تکنولایف</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
