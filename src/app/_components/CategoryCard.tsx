"use client";

import Image from "next/image";

const CategoryCard = () => {
  return (
    <article className="bg-white rounded-[8px]  relative overflow-hidden w-full px-[15px] py-[14px] border flex items-center gap-[13px] border-[#D9D9D9]">
      <div className=" shrink-0 w-[82px] h-[82px] relative mx-auto">
        <Image
          src="/images/example1.jpg"
          alt="test"
          fill
          className="object-cover rounded"
        />
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
          이슈
        </div>
        <div
          className="text-body font-[400] leading-[14px] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          뉴스 리스트트트트트트트ㅡ틑트트트트트트트트트트트트트트트
        </div>
        <div
          className="text-body font-[400] leading-[14px] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          뉴스 리스트트트트트트트ㅡ틑트트트트트트트트트트트트트트트
        </div>
        <div
          className="text-body font-[400] leading-[14px] overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          뉴스 리스트트트트트트트ㅡ틑트트트트트트트트트트트트트트트
        </div>
      </div>
    </article>
  );
};

export default CategoryCard;
