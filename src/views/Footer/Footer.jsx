"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/terms-and-conditions", text: "قوانین و مقررات" },
    { href: "/job", text: "فرصت های شغلی" },
    { href: "/work-with-us", text: "همکاری با پادباکس" },
    { href: "/#sectionApp", text: "اپلیکیشن ها" },
    { href: "https://app.podbox.ir/", text: "مشاهده نسخه وب", external: true },
  ];

  const socials = [
    {
      src: "../../../insta.png",
      alt: "instagram",
      href: "https://www.instagram.com/podbox.ir/",
      target: "_blank",
    },
    {
      src: "../../../linkedin.png",
      alt: "linkedin",
      href: "https://www.linkedin.com/company/podbox/about/",
      target: "_blank",
    },
    {
      src: "../../../aparat.png",
      alt: "aparat",
      href: "https://www.aparat.com/Podbox.ir",
      target: "_blank",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <footer className="flex items-center justify-end py-8 px-20 border-t-2 border-stone-900 text-gray-500 ">
        <div className="flex mx-5 gap-3">
          <a href="https://www.instagram.com/podbox.ir/" target="_blank">
            <img src="../../../insta.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/podbox/about/"
            target="_blank"
          >
            <img src="../../../linkedin.png" alt="linkedin" />
          </a>
          <a href="https://www.aparat.com/Podbox.ir" target="_blank">
            <img src="../../../aparat.png" alt="aparat" />
          </a>
        </div>
        <ul
          className={`m-6 gap-10 ${
            isMenuOpen
              ? "fixed bottom-10 mx-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center"
              : "gap-4 flex justify-end max-[789px]:hidden"
          }`}
          id="fmenu"
        >
          {links.map((link, index) => (
            <li className="footer-bar" key={index}>
              {link.external ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                </a>
              ) : (
                <Link
                  className={`link ${
                    pathname === link.href ? "text-gray-50" : ""
                  }`}
                  href={link.href}
                >
                  {link.text}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div
          onClick={toggleMenu}
          id="arrow"
          className="flex items-center text-gray-500 cursor-pointer hover:text-white duration-300 min-[789px]:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-4 m-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <p className="text-sm">سایر لینک ها</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
