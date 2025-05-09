"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: ReactNode;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full h-[39px] rounded-[11px] border border-[#d9d9d9] bg-sub1 text-title text-titlecolor text-center"
      {...rest}
    >
      {text}
    </button>
  );
}
