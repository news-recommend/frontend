import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: InputProps) {
  return (
    <input
      className="border px-[13px] bg-white placeholder:text-[#6B7280] border-[#d9d9d9] outline-none rounded-[11px] text-black w-full h-[39px] "
      {...rest}
    />
  );
}
