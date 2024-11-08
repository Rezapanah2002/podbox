import React from "react";
import AboutSlider from "./AboutSlider";

function Aboutus() {
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
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="m-16 w-2/3 max-md:w-full flex flex-col justify-center items-center text-center pb-10">
        <h1 className="text-6xl mb-10 font-light max-md:text-xl">
          پادباکس، دستیار هوشمند خانواده ایرانی
        </h1>
        <p className="text-2xl font-light text-stone-300 max-md:text-base">
          ما در پادباکس تلاش می‌کنیم همه چیز را برای یک زندگی هوشمند در اختیار
          شما قرار دهیم
        </p>
      </div>
      <div className="flex flex-col gap-8 justify-center items-center pb-32">
        <p className="text-2xl text-stone-300 text-center max-md:text-base">
          پادباکس را در شبکه های اجتماعی دنبال کنید
        </p>
        <div className="flex items-center mx-5 gap-14">
          {socials?.map((social, index) => (
            <a key={index} href={social.href} target={social.target}>
              <img src={social.src} alt={social.alt} className="w-8" />
            </a>
          ))}
        </div>
      </div>
      <img
        src="../../../about.jpeg"
        className="rounded-2xl w-3/4 overflow-hidden"
      />
      <p className="leading-loose text-2xl font-thin w-3/4 text-right py-10 max-md:text-base max-md:w-5/6">
        پادباکس، به عنوان یکی از محصولات سرزمین هوشمند پاد، راه‌حلی ساده برای
        تبدیل تلویزیون‌های معمولی به هوشمند می‌باشد
        <br /> این پلتفرم مبتنی بر فناوری‌های نوین و رویکردهای خلاقانه‌ای طراحی
        شده است تا تجربه تماشای تلویزیون را بهبود بخشیده و کاربران را به دنیایی
        از سرگرمی و هوشمندی ببرد
        <br /> با پادباکس، دسترسی به آخرین فیلم‌ها، سریال‌ها، برنامه‌های
        تلویزیونی، موسیقی و محتوای دیجیتالی به سهولت در دسترس است. علاوه بر این،
        امکانات پیشرفته آن به شما امکان می‌دهد تا تجربه تماشای تلویزیون را به
        سلیقه و نیازهای خود سفارشی‌سازی کنید
        <br /> همچنین، پادباکس به عنوان یکی از مهمترین محصولات خانواده پاد، به
        پیشروی در زمینه تولید لانچر اختصاصی تلویزیون‌های هوشمند می‌پردازد و
        همواره در تلاش است تا بهترین و جذاب‌ترین تجربه را به کاربران خود ارائه
        دهد
      </p>
      <div className="flex flex-col justify-center items-center text-center p-10">
        <h1 className="text-3xl font-light mb-10 max-md:text-xl">
          گالری تصاویر
        </h1>
        <p className="w-3/4 max-md:w-full text-2xl font-thin text-stone-300 max-md:text-base">
          پادباکس یک تیم حرفه‌ای ساخته است که با همکاری و همدلی تلاش می‌کنند در
          راستای تسهیل زندگی دیجیتال و هوشمندسازی قدم‌های بزرگی بردارند
        </p>
        <AboutSlider />
      </div>
    </div>
  );
}

export default Aboutus;
