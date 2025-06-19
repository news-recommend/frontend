"use client";
import useBookmark from "@/app/_hooks/useBookmark";
import { useBookmarkedList } from "@/app/_hooks/useBookmarkedList";
import FillBookmarkIcon from "@/components/shared/icons/FillBookmarkIcon";
import { BookmarkedIssue } from "@/model/issue";
import Link from "next/link";
import { useState } from "react";

function groupBookmarksByCategory(bookmarks: BookmarkedIssue[] = []) {
  const map = new Map<string, BookmarkedIssue[]>();
  console.log(bookmarks, "bookmarks");
  for (const item of bookmarks) {
    if (!map.has(item.category)) {
      map.set(item.category, []);
    }
    map.get(item.category)!.push(item);
  }

  return Array.from(map.entries()).map(([category, issues]) => ({
    title: category,
    description: issues,
  }));
}

const AccordionItem = ({ title, description }: { title: string; description: BookmarkedIssue[] }) => {
  const [current, setCurrent] = useState(false);
  const { removeBookmarkMutation } = useBookmark();
  const toggle = () => setCurrent((prev) => !prev);

  const removeBookmark = (issueId: number) => {
    removeBookmarkMutation.mutateAsync({ issueId: issueId });
  };

  return (
    <li
      className={`overflow-hidden border-b bg-[#B2C5C5] border-[#D9D9D9] transition-all duration-300 
       
      `}
    >
      <div
        className={`
          flex items-center cursor-pointer  py-3 border-b justify-between px-[18px] border-[#D9D9D9]
         
        `}
        onClick={toggle}
      >
        <span className="font-semibold text-[16px] ">{title}</span>
        <div className={`${current ? "rotate-180" : "rotate-0"} transition-transform duration-300`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 7.5L10 12.5L5 7.5"
              stroke="#1E1E1E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul
        className={`
           overflow-hidden bg-white transition-all duration-300
          ${current ? " max-h-40  " : "py-0 max-h-0 border-b-0"}
        `}
        style={{ transitionProperty: "max-height, padding" }}
      >
        {description.map((item, idx) => (
          <li
            key={item.issueName}
            className={`flex ${
              idx !== description.length - 1 ? "border-[#D9D9D9] border-b" : ""
            }  items-center justify-between px-[18px] py-[12px] `}
          >
            <div
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
              }}
              className="leading-[16px] overflow-hidden text-[16px] font-[600] color-[#1E1E1E]"
            >
              {item.issueName}
            </div>
            <button onClick={() => removeBookmark(item.issueId)}>
              <FillBookmarkIcon />
            </button>
          </li>
        ))}
      </ul>
    </li>
  );
};

const BookmarkAccordion = () => {
  const { data, isLoading, error, isFetching } = useBookmarkedList();
  if (!isFetching && data?.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">북마크 목록이 없습니다</h2>
        <p className="text-gray-600 mb-6">지금 마음에 드는 이슈를 추가해보세요!</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          홈으로 가기
        </Link>
      </div>
    );
  }
  console.log(data, isLoading, "data");
  const groupedData = groupBookmarksByCategory(data!);
  return (
    <div className="w-full max-w-xl px-[24px]">
      <ul className="border border-[#D9D9D9] rounded-[10px] overflow-hidden p-0 m-0 list-none">
        {!isLoading && data && groupedData.map((d) => <AccordionItem {...d} key={d.title} />)}
      </ul>
    </div>
  );
};

export default BookmarkAccordion;
