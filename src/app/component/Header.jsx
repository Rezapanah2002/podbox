"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  return (
    <header className="border-b-2 border-stone-800 shadow-lg shadow-stone-900">
      {/* navbar */}
      <nav className="text-slate-300 flex items-center justify-between px-28 py-1 max-[1076px]:p-4">
        {/* button */}
        <button className="bg-gradient-to-r from-b-from via-b-via to-b-to rounded-xl py-2 px-5 hover:scale-110 hover:opacity-100 duration-500">
          خرید پادباکس
        </button>
        <ul className="m-6 flex gap-10 max-[1076px]:hidden">
          <li className="nav-bar">
            <Link
              className={`link ${
                pathname === "/blog" ? "text-slate-50 font-semibold" : ""
              }`}
              href="/blog"
            >
              وبلاگ
            </Link>
          </li>
          <li className="nav-bar">
            <Link
              className={`link ${
                pathname === "/contact" ? "text-slate-50 font-semibold" : ""
              }`}
              href="/contact"
            >
              تماس با ما
            </Link>
          </li>
          <li className="nav-bar">
            <Link
              className={`link ${
                pathname === "/about-us" ? "text-slate-50 font-semibold" : ""
              }`}
              href="/about-us"
            >
              درباره ما
            </Link>
          </li>
          <li className="nav-bar">
            <Link
              className={`link ${
                pathname === "/faq" ? "text-slate-50 font-semibold" : ""
              }`}
              href="/faq"
            >
              سوالات متداول
            </Link>
          </li>
          <li className="nav-bar">
            <Link
              className={`link ${
                pathname === "/#sectionTech"
                  ? "text-slate-50 font-semibold"
                  : ""
              }`}
              href="/#sectionTech"
            >
              مشخصات فنی
            </Link>
          </li>
          <li className="nav-bar">
            <Link
              className={`link ${
                pathname === "/" ? "text-slate-50 font-semibold" : ""
              }`}
              href="/"
            >
              پادباکس
            </Link>
          </li>
        </ul>
        <div className="cursor-pointer hover:text-gray-400 duration-300 min-[1076px]:hidden">
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
          <img src="https://podbox.ir/_next/image?url=https%3A%2F%2Fpodspace.pod.ir%2Fapi%2Ffiles%2FJC4K6OQQP5XDSL3Z&w=1920&q=75" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
