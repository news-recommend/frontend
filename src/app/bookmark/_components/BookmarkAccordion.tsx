"use client";
import FillBookmarkIcon from "@/components/shared/icons/FillBookmarkIcon";
import { useState } from "react";

const TEST_DATA = [
  { title: "IT/과학", description: [{ title: "북마크한 이슈1" }, { title: "북마크한 이슈2" }] },
  {
    title: "경제",
    description: [{ title: "북마크한 이슈1" }, { title: "북마크한 이슈2" }, { title: "북마크한 이슈2" }],
  },
  {
    title: "사건/사고",
    description: [{ title: "북마크한 이슈1" }, { title: "북마크한 이슈2" }, { title: "북마크한 이슈2" }],
  },
  { title: "정치", description: [{ title: "북마크한 이슈1" }] },
];

const AccordionItem = ({ title, description }: { title: string; description: { title: string }[] }) => {
  const [current, setCurrent] = useState(false);

  const toggle = () => setCurrent((prev) => !prev);

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
              {item.title}
            </div>
            <FillBookmarkIcon />
          </li>
        ))}
      </ul>
    </li>
  );
};

const BookmarkAccordion = () => {
  return (
    <div className="w-full max-w-xl px-[24px]">
      <ul className="border border-[#D9D9D9] rounded-[10px] overflow-hidden p-0 m-0 list-none">
        {TEST_DATA.map((d) => (
          <AccordionItem {...d} key={d.title} />
        ))}
      </ul>
    </div>
  );
};

export default BookmarkAccordion;
