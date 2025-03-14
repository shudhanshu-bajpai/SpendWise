import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
}); 

export const metadata = {
  title: "SpendWise",
  description: "Your's true Finance management app",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navbar />
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="bg-gray-100 py-5">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p className="text-center text-[15px] font-semibold">
                Made with <a href=""><span>&#128150;</span></a> by Shudhanshu Bajpai
              </p>
            </div>
          </footer>
        </body>
      </html>
      
  );
}
