"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavigation() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  if (pathname === "/login" || pathname.startsWith("/register")) {
    return <></>;
  }
  return (
    <nav className="w-full  xs:w-[414px] xs:overflow-x-hidden bottom-0 transform -translate-x-1/2 left-1/2 flex items-center justify-between bottom fixed z-10 h-[84px] pl-[35px] pr-[24px] bg-sub2">
      <Link
        href={"/"}
        className={`gap-[4px] cursor-pointer ${
          pathname === "/" ? "text-[#253750]" : "text-[#F2F2F2]"
        }  text-tooltip flex flex-col items-center`}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 29.3333V16H20V29.3333M4 12L16 2.66666L28 12V26.6667C28 27.3739 27.719 28.0522 27.219 28.5523C26.7189 29.0524 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0524 4.78105 28.5523C4.28095 28.0522 4 27.3739 4 26.6667V12Z"
            stroke={pathname === "/" ? "#253750" : "#F2F2F2"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>홈</span>
      </Link>
      <Link
        href="/issue/search"
        className={`gap-[4px] flex ${
          pathname === "/issue/search" ? "text-[#253750]" : "text-[#F2F2F2]"
        } text-tooltip flex-col items-center`}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
            stroke={pathname === "/issue/search" ? "#253750" : "#F2F2F2"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>검색</span>
      </Link>
      <Link
        href="/bookmark"
        className={`gap-[4px] flex ${
          pathname === "/bookmark" ? "text-[#253750]" : "text-[#F2F2F2]"
        } text-tooltip flex-col items-center`}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.0001 2.66666L20.1201 11.0133L29.3334 12.36L22.6667 18.8533L24.2401 28.0267L16.0001 23.6933L7.76008 28.0267L9.33342 18.8533L2.66675 12.36L11.8801 11.0133L16.0001 2.66666Z"
            stroke={pathname === "/bookmark" ? "#253750" : "#F2F2F2"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>북마크</span>
      </Link>
      <Link
        href="/profile"
        className={`gap-[4px] flex ${
          pathname === "/profile" ? "text-[#253750]" : "text-[#F2F2F2]"
        } text-tooltip flex-col items-center`}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M26.6666 28V25.3333C26.6666 23.9188 26.1047 22.5623 25.1045 21.5621C24.1043 20.5619 22.7477 20 21.3333 20H10.6666C9.2521 20 7.89554 20.5619 6.89535 21.5621C5.89515 22.5623 5.33325 23.9188 5.33325 25.3333V28M21.3333 9.33333C21.3333 12.2789 18.9454 14.6667 15.9999 14.6667C13.0544 14.6667 10.6666 12.2789 10.6666 9.33333C10.6666 6.38781 13.0544 4 15.9999 4C18.9454 4 21.3333 6.38781 21.3333 9.33333Z"
            stroke={pathname === "/profile" ? "#253750" : "#F2F2F2"}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>마이페이지</span>
      </Link>
    </nav>
  );
}
