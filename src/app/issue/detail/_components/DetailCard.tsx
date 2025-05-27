"use client";
import { NewsItem } from "@/model/issue";
import Link from "next/link";
import React from "react";

const DetailCard = ({ title, publishedAt, description }: NewsItem) => {
  return (
    <div className="py-[24px]">
      <Link
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
        }}
        href={"#"}
        className="inline-block  box-border w-full  leading-[16px] text-[16px] overflow-hidden font-[500]  text-black "
      >
        {title}
      </Link>
    </div>
  );
};

export default DetailCard;
