import { Vazirmatn } from "next/font/google";
import "../assets/css/globals.css";
import Header from "../views/Header/Header";
import Footer from "../views/Footer/Footer";
import fetchMenu from "@/services/server/fetchMenu";

const inter = Vazirmatn({ subsets: ["arabic"] });

export default async function RootLayout({ children }) {
  const menu = await fetchMenu();
  const header = menu.result?.[1]?.children ?? [];
  const footer = menu.result?.[2]?.children ?? [];
  return (
    <html lang="fa">
      <body className={inter.className}>
        <Header menu={header} />
        {children}
        <Footer menu={footer} />
      </body>
    </html>
  );
}
