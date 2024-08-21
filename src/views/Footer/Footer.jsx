"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePropWindow } from "../../hooks/usePropWindow";

function Footer() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = usePropWindow();

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

  useEffect(() => {
    if (width > 853 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [width, isMenuOpen]);

  return (
    <div>
      <footer className="flex items-center justify-end py-4 font-light px-20 border-t-2 border-stone-950 text-gray-500 ">
        <div className="flex mx-5 gap-3">
          {socials?.map((social, index) => (
            <a key={index} href={social.href} target={social.target}>
              <img src={social.src} alt={social.alt} />
            </a>
          ))}
        </div>
        <ul
          className={`m-6 gap-10 ${
            isMenuOpen || width > 853 ? "gap-8 flex justify-end" : "hidden"
          } ${
            isMenuOpen
              ? "fixed flex-col items-center p-10 justify-between mx-0 bottom-10 left-0 w-full h-full bg-black overflow-y-scroll"
              : "gap-4 flex justify-end"
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
                  onClick={() => setIsMenuOpen(false)}
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
          className={`flex items-center text-gray-500 cursor-pointer hover:text-white duration-300 ${
            width <= 853 ? "block" : "hidden"
          }`}
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
