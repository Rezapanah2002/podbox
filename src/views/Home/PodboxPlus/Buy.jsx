import React from "react";

function Buy() {
  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center">
      <div className="px-20 py-14 w-2/3 bg-white bg-opacity-10 rounded-3xl flex justify-between items-center max-[1200px]:w-full max-[800px]:bg-opacity-0 max-[800px]:flex-col">
        <div className="flex justify-between items-center gap-5 max-[800px]:mb-10">
          <div className="w-24 h-24 bg-white bg-opacity-10 rounded-2xl cursor-pointer hover:bg-opacity-5">
            <a
              href="https://www.digikala.com/product/dkp-9066304/%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7%DA%A9%D8%B3-%D9%BE%D8%A7%D8%AF%D8%A8%D8%A7%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-hc-1/"
              target="_blank"
            >
              <div className="flex flex-col justify-center items-center px-4 py-2">
                <img src="../../../digikala.png" className="w-12 mb-2" />

                <p className="font-light">دیجی کالا</p>
              </div>
            </a>
          </div>
          <div className="w-24 h-24 bg-white bg-opacity-10 rounded-2xl cursor-pointer hover:bg-opacity-5">
            <a
              href="https://www.technolife.ir/product-8153/%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7%DA%A9%D8%B3-%D9%BE%D8%A7%D8%AF%D8%A8%D8%A7%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-hc-1"
              target="_blank"
            >
              <div className="flex flex-col justify-center items-center px-4 py-2">
                <img src="../../../technolife.png" className="w-12 mb-2" />
                <p className="font-light">تکنولایف</p>
              </div>
            </a>
          </div>
        </div>
        <div className="text-right w-3/5 max-[800px]:text-center max-[800px]:w-[50vh]">
          <h1 className="text-4xl mb-5 font-light max-[800px]:text-xl">
            از کجا سخت‌افزار پادباکس را بخرم؟
          </h1>
          <p className="text-lg text-stone-400 font-light">
            با انتخاب هر یک از فروشگاه‌ها، می‌توانید نسبت به خرید دستگاه پادباکس
            اقدام نمایید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buy;
