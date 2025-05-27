"use client";

import { Issue } from "@/model/issue";
import Image from "next/image";

const CategoryCard = ({ thumbnail, issueId, issueName, category, newsList }: Issue) => {
  return (
    <article className="bg-white rounded-[8px]  relative overflow-hidden w-full px-[15px] py-[14px] border flex items-center gap-[13px] border-[#D9D9D9]">
      <div className=" shrink-0 w-[82px] h-[82px] relative mx-auto">
        <Image src={thumbnail ?? "/images/example1.jpg"} alt={issueName ?? ""} fill className="object-cover rounded" />
      </div>

      <div className="flex flex-col gap-[8px]">
        <div
          className="text-subtitle font-[600] leading-[18px] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {issueName}
        </div>
        {[...newsList].slice(1, 3).map((news) => (
          <div
            className="text-body font-[400] leading-[14px] overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
            }}
          >
            {news.title}
          </div>
        ))}
      </div>
    </article>
  );
};

export default CategoryCard;
