import React, { InputHTMLAttributes } from "react";
import SearchIcon from "./icons/SearchIcon";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function SearchInput({ ...rest }: InputProps) {
  return (
    <div className="relative w-full h-[39px]">
      <input
        className="border w-full h-full pl-[16px] pr-[36px] py-[10px] bg-white placeholder:text-[#6B7280] border-[#d9d9d9] outline-none rounded-full text-black  "
        {...rest}
      />
      <button
        type="submit"
        className="w-[20px] h-[20px] absolute right-[6px] top-1/2 -translate-1/2"
      >
        <SearchIcon />
      </button>
    </div>
  );
}
