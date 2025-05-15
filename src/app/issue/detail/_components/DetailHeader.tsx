"use client";
import React from "react";
import BackButton from "@/components/BackButton";
import { useParams } from "next/navigation";
import BookmarkIcon from "@/components/shared/icons/BookmarkIcon";

export default function DetailHeader() {
  const params = useParams();
  const title = decodeURIComponent((params?.keyword as string) ?? "이슈 상세") ?? "이슈 상세";
  return (
    <header className="w-full h-[84px] px-[20px] flex justify-between items-center pt-[10px] ">
      <BackButton />
      <h1
        className=" text-header leading-[22px] text-headercolor "
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
        }}
      >
        {title}
      </h1>
      <div className="h-[24px] w-[24px]">
        <BookmarkIcon />
      </div>
    </header>
  );
}
