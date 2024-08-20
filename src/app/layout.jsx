import { Vazirmatn } from "next/font/google";
import "../assets/css/globals.css";
import Header from "../views/Header/Header";
import Footer from "../views/Footer/Footer";

const inter = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
