import Link from "next/link";
import React from "react";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-[24px]">
      <Link
        href="/login"
        className="inline-block bg-white border border-[#D9d9d9] rounded-[32px] h-[22px] w-[70px] text-center leading-[22px] text-tooltip font-normal "
      >
        로그인
      </Link>
    </header>
  );
};

export default HomeHeader;
