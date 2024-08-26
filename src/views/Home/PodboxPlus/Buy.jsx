import React from "react";

function Buy() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="p-20 w-2/3 bg-white bg-opacity-10 rounded-3xl flex justify-between items-center">
        <div className="flex justify-between items-center gap-5">
          <div className="bg-white bg-opacity-10 rounded-2xl cursor-pointer hover:bg-opacity-5">
            <div className="flex flex-col justify-center items-center px-4 py-2">
              <a
                href="https://www.digikala.com/product/dkp-9066304/%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7%DA%A9%D8%B3-%D9%BE%D8%A7%D8%AF%D8%A8%D8%A7%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-hc-1/"
                target="_blank"
              >
                <img src="../../../digikala.png" className="w-12 h-12" />
              </a>
              <p className="font-light m-3">دیجی کالا</p>
            </div>
          </div>
          <div className="bg-white bg-opacity-10 rounded-2xl cursor-pointer hover:bg-opacity-5">
            <div className="flex flex-col justify-center items-center px-4 py-2">
              <a
                href="https://www.technolife.ir/product-8153/%D8%A7%D9%86%D8%AF%D8%B1%D9%88%DB%8C%D8%AF-%D8%A8%D8%A7%DA%A9%D8%B3-%D9%BE%D8%A7%D8%AF%D8%A8%D8%A7%DA%A9%D8%B3-%D9%85%D8%AF%D9%84-hc-1"
                target="_blank"
              >
                <img src="../../../technolife.png" className="w-12 h-12" />
              </a>
              <p className="font-light m-3">تکنولایف</p>
            </div>
          </div>
        </div>
        <div className="text-right">
          <h1 className="text-2xl m-2">از کجا سخت‌افزار پادباکس را بخرم؟</h1>
          <p className="text-xl">
            سخت‌با انتخاب هر یک از فروشگاه‌ها، می‌توانید نسبت به خرید دستگاه
            پادباکس اقدام نمایید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Buy;
