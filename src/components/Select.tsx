"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SelectProps {
  id?: string;

  initOpen?: boolean;
  noneValue?: string;
  width?: "fit-content" | "100%";
}
const list = [
  { title: "최신순", value: "latest" },
  { title: "북마크순", value: "popular" },
  { title: "오래된순", value: "oldest" },
];
const Select = ({
  id,
  width = "fit-content",
  initOpen = false,

  noneValue,
}: SelectProps) => {
  const [active, setActive] = useState(initOpen);
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const initValue = searchParams?.get("sort") ?? "latest";

  const [value, setValue] = useState(initValue);

  const changeValue = (element: string) => {
    console.log("element", element);
    setValue(element);
    setActive(false);
    const newSearchParams = new URLSearchParams(searchParams?.toString());

    newSearchParams.set("sort", element);
    router.push("?" + newSearchParams);
  };

  useEffect(() => {
    if (active) {
      const timers: NodeJS.Timeout[] = [];
      const newAnimatedItems = Array(list.length).fill(false);

      list.forEach((_, index) => {
        timers.push(
          setTimeout(() => {
            newAnimatedItems[index] = true;
            setAnimatedItems([...newAnimatedItems]);
          }, index * 200)
        );
      });

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    } else {
      setAnimatedItems(Array(list.length).fill(false));
    }
  }, [active, list]);

  return (
    <div id={id}>
      {active && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-[1001] w-full h-[100svh] bg-[rgba(26,26,26,0.3)] opacity-80"
          onClick={(e) => {
            e.preventDefault();
            setActive(false);
          }}
        />
      )}
      <div
        className={`relative z-[1002] bg-white rounded-2xl cursor-pointer ${
          width === "fit-content" ? "w-fit" : "w-full"
        } `}
      >
        <div
          className={`relative z-3 border border-[#D9D9D9] ${
            active ? "rounded-t-md" : "rounded-md"
          } min-h-[22px] bg-white`}
        >
          <button
            type="button"
            className="w-full min-w-[100px] min-h-[22px] px-[9px] py-[5px] text-sm font-normal text-black flex justify-between items-center gap-2"
            onClick={() => setActive(!active)}
          >
            {value ? (
              list.find((item) => value === item.value)?.title
            ) : (
              <div className="text-black">{noneValue}</div>
            )}
            <div
              className={`${
                active ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            >
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0.5L4 3.5L7 0.5"
                  stroke="#1E1E1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>

          <ul
            className={`absolute left-0 min-w-[100px] right-0 top-[23px] z-5 w-full bg-white rounded-b-md overflow-y-auto max-h-[170px] transition-[max-height] duration-200 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent ${
              active ? "max-h-[170px]" : "h-0 overflow-hidden"
            }`}
          >
            {list.map(({ title, value }, index) => (
              <div
                onClick={() => changeValue(value)}
                key={value}
                className="flex gap-[7px] mt-[3px] px-[9px] hover:bg-gray-100"
              >
                <li
                  className={`py-2 text-sm font-medium transition-opacity duration-200 ${
                    animatedItems[index]
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  }`}
                >
                  {title}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Select;
