"use client";
import React from "react";
import BackButton from "./BackButton";
import useHeaderNavigation from "../hooks/useHeaderNavigation";

export default function Header() {
  const { headerTitle, checkRoute } = useHeaderNavigation();
  if (checkRoute.exact("/")) return null;
  return (
    <header className="w-full h-[84px] px-[20px] flex justify-between items-center pt-[10px] ">
      <BackButton />
      <h1 className=" text-header text-headercolor ">{headerTitle}</h1>
      <div className="h-[24px] w-[24px]"></div>
    </header>
  );
}
