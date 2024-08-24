"use client";

import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function LuanchAnim() {
  const { scrollY } = useScroll();
  const section3Ref = useRef(null);
  const [section3Range, setSection3Range] = useState([0, 0]);

  useEffect(() => {
    const section3Element = section3Ref.current;

    if (section3Element) {
      const section3Rect = section3Element.getBoundingClientRect();

      const section3Start =
        section3Rect.top + window.scrollY - window.innerHeight / 2;
      const section3End = section3Rect.bottom + window.scrollY;
      setSection3Range([section3Start, section3End]);
    }
  }, []);

  const y3 = useTransform(scrollY, section3Range, [-150, 150]);
  const smoothY3 = useSpring(y3, { stiffness: 200, damping: 50 });

  const items = [
    {
      className: "anim-items w-32 h-32 top-32 -right-5",
      src: "../../../gaming.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-24 h-24 top-52 left-1",
      src: "../../../gaming.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-16 h-16 bottom-52",
      src: "../../../music.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-12 h-12 bottom-40 right-1/3",
      src: "../../../m-note.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-12 h-12 bottom-32 right-1/2",
      src: "../../../vid-cam.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-20 h-20 left-56 bottom-32",
      src: "../../../ufo.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-20 h-20 right-28 bottom-32",
      src: "../../../ufo.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-16 h-16 -left-5 bottom-32",
      src: "../../../mic.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-12 h-12 bottom-28 left-32",
      src: "../../../bag.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-16 h-16 -right-4 bottom-32",
      src: "../../../mic.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-10 h-10 -right-10 bottom-5",
      src: "../../../usb.png",
      style: { y: smoothY3 },
    },
    {
      className: "anim-items w-12 h-12 -left-5 bottom-5",
      src: "../../../usb.png",
      style: { y: smoothY3 },
    },
  ];

  return (
    <div ref={section3Ref} className="w-full min-h-screen">
      <div className="w-full h-screen flex justify-center max-[1210px]:hidden">
        <motion.div className="flex justify-center w-2/3 h-4/5 rounded-3xl relative">
          <motion.img
            className="px-16 pt-20 w-full h-full absolute bottom-0 drag-none"
            src="../../../g-anim-bg.png"
          />
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={item.className}
              drag
              dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
              style={item.style}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.25 }}
            >
              <motion.img className="relative w-1/3 drag-none" src={item.src} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default LuanchAnim;
