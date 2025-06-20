import "./globals.css";
import Body from "../components/Body";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import QueryClientBoundary from "./_components/QueryClientProvider";
import RefreshToken from "./_components/RefreshToken";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이슈 추천 사이트",
  description: "이슈 별 뉴스 리스트 웹 사이트",
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
          <QueryClientBoundary>
            <Body>
              <Header />
              {children}
              <BottomNavigation />
              <RefreshToken />
            </Body>
          </QueryClientBoundary>
        </div>
      </body>
    </html>
  );
}
