import React from "react";

function IntroCards() {
  return (
    <div>
      <div className="flex justify-center gap-5 w-full mb-20 mt-0">
        {/* plus */}
        <div className="sec1-cards">
          <div className="flex flex-col justify-end mb-5">
            <div className="flex items-center justify-between mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-stone-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <h2 className="text-xl font-medium bg-gradient-to-l from-b-to to-b-from bg-clip-text inline-block text-transparent">
                معرفی پادباکس پلاس
              </h2>
            </div>
            <h3 className="my-2">مسیرهای دسترسی به نرم افزار</h3>
            <p className="text-stone-400 my-2">
              با پادباکس پلاس، خیالت از سرگرمی در دسترس و همیشگی تخته
            </p>
          </div>
          <img src="../../../podboxplus.png" className="w-full" />
        </div>

        {/* luncher */}
        <div className="sec1-cards">
          <div className="flex flex-col justify-end mb-5">
            <div className="flex items-center justify-between mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-stone-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <h2 className="text-xl font-medium bg-gradient-to-l from-green-600 to-green-300 bg-clip-text inline-block text-transparent">
                لانچر پادباکس
              </h2>
            </div>
            <h3 className="my-2">تلوزیون با طعم پادباکس</h3>
            <p className="text-stone-400 my-2">
              لانچر پادباکس راهش را به برند های مختلف تلوزیون ایرانی باز کرده
              است
            </p>
          </div>
          <img src="../../../luncher.png" className="w-full" />
        </div>

        {/* android */}
        <div className="sec1-cards">
          <div className="flex flex-col justify-end mb-5">
            <div className="flex items-center justify-between mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-stone-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
              <h1 className="text-xl font-medium bg-gradient-to-l from-indigo-600 to-indigo-400 bg-clip-text inline-block text-transparent">
                اندروید باکس پادباکس
              </h1>
            </div>
            <h3 className="my-2">!ابزاری که به آن احتیاج دارید</h3>
            <p className="text-stone-400 my-2">
              همه تلویزیون های معمولی برای هوشمند شدن به پادباکس احتیاج دارند
            </p>
          </div>
          <img src="../../../android.png" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default IntroCards;
