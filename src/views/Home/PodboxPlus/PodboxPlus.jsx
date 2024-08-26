import React from "react";
import Access from "./Access";
import Buy from "./Buy";

function PodboxPlus() {
  return (
    <div id="sectionApp">
      <div className="p-20 w-full flex min-h-screen flex-col items-center bg-gradient-to-b from-amber-950 to-black text-center">
        <h1 className="text-xl font-medium bg-gradient-to-l from-b-via to-b-to bg-clip-text inline-block text-transparent">
          معرفی پادباکس پلاس
        </h1>
        <h2 className="m-8 text-5xl font-light">مسیرهای دسترسی به نرم‌افزار</h2>
        <p className="text-3xl font-light text-stone-400">
          !با پادباکس پلاس، خیالت از سرگرمیِ در دسترس و همیشگی تخته
        </p>
        <Access />
        <Buy />
      </div>
    </div>
  );
}

export default PodboxPlus;