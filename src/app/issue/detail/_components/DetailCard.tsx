"use client";
import Link from "next/link";
import React from "react";

const DetailCard = () => {
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
        SKT “유심보호 서비스 가입 2천만명 넘길 전망
      </Link>
    </div>
  );
};

export default DetailCard;
