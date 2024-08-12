"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();

  const links = [
    { href: "/blog", text: "وبلاگ" },
    { href: "/contact", text: "تماس با ما" },
    { href: "/about-us", text: "درباره ما" },
    { href: "/faq", text: "سوالات متداول" },
    { href: "/#sectionTech", text: "مشخصات فنی" },
    { href: "/", text: "پادباکس" },
  ];

  const handleclick = () => {
    const menu = document.getElementById("menu");
    const burger = document.getElementById("burger");

    burger.addEventListener("click", () => {
      if (menu.classList.contains("max-[1076px]:hidden")) {
        menu.classList.remove("max-[1076px]:hidden");
      } else {
        menu.classList.add("max-[1076px]:hidden");
      }
    });
  };

  return (
    <header className="border-b-2 border-stone-800 shadow-lg shadow-stone-900">
      {/* navbar */}
      <nav className="text-slate-300 flex items-center justify-between px-28 py-1 max-[1076px]:p-4">
        {/* button */}
        <button className="bg-gradient-to-r from-b-from via-b-via to-b-to rounded-xl py-2 px-5 hover:scale-110 hover:opacity-100 duration-500">
          خرید پادباکس
        </button>
        <ul
          className="m-6 min-[1076px]:flex gap-10 max-[1076px]:hidden"
          id="menu"
        >
          {links.map((link, index) => (
            <li className="nav-bar" key={index}>
              <Link
                className={`link ${
                  pathname === link.href ? "text-slate-50 font-semibold" : ""
                }`}
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={handleclick}
          id="burger"
          className="cursor-pointer hover:text-gray-400 duration-300 min-[1076px]:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 "
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
          <img src="../../../podbox.png" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
