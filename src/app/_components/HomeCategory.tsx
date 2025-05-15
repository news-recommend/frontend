"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const PREFERRED_TAGS = [
  "정치",
  "경제",
  "사회",
  "사건/사고",
  "IT/과학",
  "자동차",
  "국제",
  "교육",
  "문화",
  "여행/레저",
  "연예",
  "환경",
  "부동산",
  "스포츠",
  "생활/건강",
];

const HomeCategory = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") ?? "ALL";
  const router = useRouter();

  const clickTag = (value: string) => () => {
    const newSearchParams = new URLSearchParams(searchParams?.toString());

    newSearchParams.set("category", value);
    console.log("new", newSearchParams.get("category"));
    router.push("?" + newSearchParams);
  };
  console.log(category);
  return (
    <div className="mx-[24px] max-w-[364px] overflow-auto xs:scrollbar-hide">
      <div className="flex items-center ">
        {PREFERRED_TAGS.map((tag) => (
          <div
            onClick={clickTag(tag)}
            className={`shrink-0 cursor-pointer px-[8px] pb-[9px] mb-[2px] ${
              category === tag ? "text-[#57869F] border-[#57869F] " : "text-[#A0CCCD] border-[#A0cccd]"
            } border-b-2  text-header w-fit`}
            key={tag}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
