import { Inter } from "next/font/google";
import "../assets/css/globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

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
