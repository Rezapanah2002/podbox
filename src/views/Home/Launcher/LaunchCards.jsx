import React from "react";

function LaunchCards() {
  return (
    <div className="w-5/6 flex justify-center items-center">
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <div className=" w-2/3 h-4/5">
          <div className="grid grid-cols-3 grid-rows-2 gap-10">
            <div className="sec3-cards">
              <div className="sec3-icons">
                <img src="../../../headphone.png" />
              </div>
              <h2 className="font-semibold mb-5">کتاب صوتی و پادکست</h2>
              <p className="text-stone-400 font-light">
                راحت‌ترین راه دسترسی به دانش و اطلاعات، کتاب‌های صوتی و
                پادکست‌ها هستند که در پادباکس در دسترس است
              </p>
            </div>
            <div className="sec3-cards">
              <div className="sec3-icons">
                <img src="../../../note.png" />
              </div>
              <h2 className="font-semibold mb-5">موسیقی</h2>
              <p className="text-stone-400 font-light">
                از شرق تا غرب، از سنتی تا راک، از آرامش‌بخش تا حماسی و هر چیزی
                که حال و هوای شنیدنش را داشته باشید
              </p>
            </div>
            <div className="sec3-cards">
              <div className="sec3-icons">
                <img src="../../../movie.png" />
              </div>
              <h2 className="font-semibold mb-5">فیلم و سریال</h2>
              <p className="text-stone-400 font-light">
                کاش زمان برای دیدن فیلم و سریال‌های پادباکس داشته باشید! اگر نه
                همه‌شان، حداقل بهترین‌ها
              </p>
            </div>
            <div className="sec3-cards">
              <div className="sec3-icons">
                <img src="../../../finance.png" />
              </div>
              <h2 className="font-semibold mb-5">خدمات مالی</h2>
              <p className="text-stone-400 font-light">
                پرداخت قبض و خرید شارژ تلفن، بسته اینترنت و شارژ کیف پول در بخش
                خدمات مالی پادباکس
              </p>
            </div>
            <div className="sec3-cards">
              <div className="sec3-icons">
                <img src="../../../book.png" />
              </div>
              <h2 className="font-semibold mb-5">مجله و اخبار</h2>
              <p className="text-stone-400 font-light">
                اگر اهل خواندن هستید، بخش مجله و اخبار همان جایی است که هر روز
                به آن احتیاج دارید و دنبالش می‌گشتید
              </p>
            </div>
            <div className="sec3-cards">
              <div className="sec3-icons">
                <img src="../../../gamepad.png" />
              </div>
              <h2 className="font-semibold mb-5">پخش زنده</h2>
              <p className="text-stone-400 font-light">
                تمام شبکه‌های تلویزیونی و رادیویی را هر جایی که هستید و با
                اینترنت نیم‌بها تماشا کنید
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchCards;
