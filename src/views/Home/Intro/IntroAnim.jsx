"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";

function IntroAnim() {
  const { scrollY } = useScroll();
  const section1Ref = useRef(null);

  const [section1Range, setSection1Range] = useState([0, 0]);

  useEffect(() => {
    const section1Element = section1Ref.current;

    if (section1Element) {
      const section1Rect = section1Element.getBoundingClientRect();

      const section1Start =
        section1Rect.top + window.scrollY - window.innerHeight / 2;
      const section1End = section1Rect.bottom + window.scrollY;
      setSection1Range([section1Start, section1End]);
    }
  }, []);

  const y1 = useTransform(scrollY, section1Range, [150, -120]);
  const smoothY1 = useSpring(y1, { stiffness: 100, damping: 50 });
  return (
    <div ref={section1Ref}>
      <div className="w-full h-[80vh] flex justify-center max-[1210px]:hidden">
        <div className="flex justify-center w-3/5 h-3/4 bg-gradient-to-r from-b-from via-b-via to-b-to rounded-3xl relative">
          <img
            className="px-16 pt-20 w-full h-full absolute bottom-0 drag-none"
            src="../../../anim-bg.png"
          />

          {/* voice */}
          <motion.div
            className="anim-items w-1/3 h-24 -top-28 -left-28"
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
            style={{ y: smoothY1 }}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <div className="w-56 h-2 mx-5 rounded-2xl bg-slate-100 px-4" />
            <div className="w-16 h-16 flex flex-col items-center justify-center">
              <img
                src="../../../play-button.png"
                className="w-full drag-none"
              />
            </div>
          </motion.div>

          {/* soul */}
          <Link
            className="drag-none"
            href="https://app.podbox.ir/videos/detail/3350655"
            target="_blank"
          >
            <motion.div
              className="anim-items w-64 h-80 -top-44 -right-28"
              drag
              dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 10,
              }}
              style={{
                y: smoothY1,
              }}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <img
                className="relative w-4/5 rounded-2xl opacity-70 drag-none"
                src="../../../soul.jpeg"
              />
            </motion.div>
          </Link>

          {/* dune */}
          <Link
            className="drag-none"
            href="https://app.podbox.ir/videos/detail/3353042"
            target="_blank"
          >
            <motion.div
              className="anim-items w-56 h-72 bottom-16 -left-20"
              drag
              dragConstraints={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
              }}
              dragTransition={{
                bounceStiffness: 600,
                bounceDamping: 10,
              }}
              style={{
                y: smoothY1,
              }}
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                duration: 0.25,
              }}
            >
              <img
                className="relative w-4/5 rounded-2xl opacity-70 drag-none"
                src="../../../dune.jpeg"
              />
            </motion.div>
          </Link>

          {/* music */}
          <motion.div
            className="anim-items w-40 h-40 bottom-52 right-1/2"
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
            style={{ y: smoothY1 }}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <img
              className="relative w-2/5 drag-none"
              src="../../../music.png"
            />
          </motion.div>

          {/* gaming */}
          <motion.div
            className="anim-items w-20 h-20 bottom-28 -right-10"
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragTransition={{
              bounceStiffness: 600,
              bounceDamping: 10,
            }}
            style={{ y: smoothY1 }}
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <img
              className="relative w-1/2 drag-none"
              src="../../../gaming.png"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default IntroAnim;
