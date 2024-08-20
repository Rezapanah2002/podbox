"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { usePropWindow } from "../../hooks/usePropWindow";

function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = usePropWindow();

  const links = [
    { href: "/blog", text: "وبلاگ" },
    { href: "/contact", text: "تماس با ما" },
    { href: "/about-us", text: "درباره ما" },
    { href: "/faq", text: "سوالات متداول" },
    { href: "/#sectionTech", text: "مشخصات فنی" },
    { href: "/", text: "پادباکس" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (width > 1076 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [width, isMenuOpen]);

  return (
    <header className="border-b-2 border-stone-800 shadow-lg shadow-stone-900 fixed top-0 left-0 w-full z-50 bg-black">
      {/* navbar */}
      <nav className="text-slate-300 flex items-center flex-row justify-between font-light text-xl w-full px-12 py-2">
        {/* button */}
        <button className="bg-gradient-to-r from-b-from via-b-via to-b-to rounded-xl py-2 px-5 hover:scale-110 hover:opacity-100 duration-500">
          خرید پادباکس
        </button>
        <ul
          className={` ${
            isMenuOpen || width > 1076
              ? "m-3 flex justify-evenly gap-12 p-3"
              : "hidden"
          } ${
            isMenuOpen
              ? "fixed flex-col items-end py-20 pr-20 top-9 mx-0 left-0 w-full h-full bg-black"
              : "flex justify-evenly gap-12"
          }`}
          id="menu"
        >
          {links.map((link, index) => (
            <li className="nav-bar" key={index}>
              <Link
                className={`link ${
                  pathname === link.href ? "text-slate-50 font-semibold" : ""
                }`}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </Link>
            </li>
          ))}
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
    </header>
  );
}

export default Header;
