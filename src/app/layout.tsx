import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Body from "../components/Body";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "뉴스 추천",
  description: "뉴스 추천 및 이슈에 대한 감정 분석 웹사이트입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          className="
    h-[100svh] 
    w-[100svw] 
    overflow-x-hidden 
    flex 
    justify-center 
    items-center
    bg-white
  "
        >
          <Body>
            <Header />
            {children}
            <BottomNavigation />
          </Body>
        </div>
      </body>
    </html>
  );
}
