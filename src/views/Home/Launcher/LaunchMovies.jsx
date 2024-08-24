import React from "react";
import { motion } from "framer-motion";

function LaunchMovies() {
  return (
    <div className="flex flex-col justify-center items-center p-40">
      <h1 className="text-5xl m-10">!هیچ روزی را بدون فیلم دیدن نگذران</h1>
      <p className="text-2xl font-light text-stone-500">
        با پادباکس می‌توانید تا بی‌نهایت فیلم و سریال ‌را در صفحه‌ بزرگ تلویزیون
        خانگی خودتان تماشا کنید
      </p>
      <motion.div></motion.div>
    </div>
  );
}

export default LaunchMovies;
