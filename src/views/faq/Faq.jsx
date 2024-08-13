import React from "react";

function Faq() {
  return (
    <div>
      <div className="grid justify-items-center m-10">
        <h1>برای راهنمایی و پاسخ به سوالات شما آماده ایم</h1>
        <h3>شاید برای شما هم سوال شده باشد!</h3>
      </div>
      <div className="flex justify-center gap-16 m-10">
        <div className="grid justify-items-center opacity-40 hover:opacity-70">
          <img className="cards" src="../../../tv.png" />
          <p>تماشا در تلوزیون</p>
        </div>
        <div className="grid justify-items-center opacity-40 hover:opacity-70">
          <img className="cards" src="../../../lunch.png" />
          <p>راه اندازی دستگاه</p>
        </div>
        <div className="grid justify-items-center opacity-40 hover:opacity-70">
          <img className="cards" src="../../../service.png" />
          <p>خدمات پس از فروش</p>
        </div>
        <div className="grid justify-items-center opacity-40 hover:opacity-70">
          <img className="cards" src="../../../allQ.png" />
          <p>همه سوالات</p>
        </div>
      </div>
    </div>
  );
}

export default Faq;
