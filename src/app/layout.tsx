"use client";
import "./globals.css";
import Body from "../components/Body";
import Header from "../components/Header";
import BottomNavigation from "../components/BottomNavigation";
import { useEffect } from "react";
import { authStore } from "@/store/authStore";
import useLoginForm from "./login/_hooks/useLoginForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { accessToken, logoutCheck } = authStore();
  const { refreshTokenMutation } = useLoginForm();

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 토큰 갱신 시도(새로고침시 토큰 사라지는 문제해결 위해)
    if (!accessToken && !logoutCheck) {
      // 토큰이 없으면 리프레쉬 토큰 api 요청.
      const refreshAccessToken = async () => {
        refreshTokenMutation.mutateAsync();
      };

      refreshAccessToken();
    }
  }, [accessToken]);
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
