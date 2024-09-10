"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePropWindow } from "../../hooks/usePropWindow";

function Footer({ menu }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = usePropWindow();

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
      <footer className=" font-light border-t-2 border-stone-950 text-gray-500">
        <div className="flex items-center justify-evenly py-4 max-[780px]:justify-around">
          <div className="flex items-center gap-2">
            <a
              href="https://trustseal.enamad.ir/?id=465948&Code=IzKDL9tqJXK36EOgCtzjSZVafApgWgUy"
              target="_blank"
            >
              <img src="../../../namad.png" className="w-16" />
            </a>
            <a href="https://sapra.ir/" target="_blank">
              <img src="../../../sapra.png" className="w-10" />
            </a>
          </div>
          <div className="flex items-center mx-5 gap-3">
            {socials?.map((social, index) => (
              <a key={index} href={social.href} target={social.target}>
                <img src={social.src} alt={social.alt} />
              </a>
            ))}

            <ul
              className={`gap-10 ${
                isMenuOpen || width > 853 ? "gap-8 flex justify-end" : "hidden"
              } ${
                isMenuOpen
                  ? "fixed flex-col items-center justify-center mx-0 bottom-20 left-0 w-full h-full bg-black overflow-y-scroll"
                  : "gap-4 flex justify-end"
              }`}
              id="fmenu"
            >
              {menu
                ?.slice()
                ?.reverse()
                .map((link, index) => (
                  <li className="footer-bar" key={index}>
                    {link.external ? (
                      <a
                        href={link.metadata.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        className={`link ${
                          pathname === link.metadata.link ? "text-gray-50" : ""
                        }`}
                        href={link.metadata.link}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </div>
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
            <p className="text-sm max-[620px]:text-xs">سایر لینک ها</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
