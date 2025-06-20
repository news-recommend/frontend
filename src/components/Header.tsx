"use client";
import React, { useEffect, useLayoutEffect } from "react";
import BackButton from "./BackButton";
import useHeaderNavigation from "../hooks/useHeaderNavigation";
import { authStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function Header() {
  const { accessToken } = authStore();
  const { headerTitle, checkRoute } = useHeaderNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    if (accessToken && (checkRoute.exact("/login") || checkRoute.startsWith("/register"))) {
      router.replace("/");
    }
  }, [accessToken]);

  if (checkRoute.exact("/") || checkRoute.startsWith("/issue/detail")) return null;
  return (
    <header className="w-full h-[84px] px-[20px] flex justify-between items-center pt-[10px] ">
      <BackButton />
      <h1 className=" text-header text-headercolor ">{headerTitle}</h1>
      <div className="h-[24px] w-[24px]"></div>
    </header>
  );
}
