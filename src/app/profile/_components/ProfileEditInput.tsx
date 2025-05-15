import React, { InputHTMLAttributes } from "react";

interface ProfileEditInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function ProfileEditInput({ label, ...rest }: ProfileEditInputProps) {
  return (
    <div className="pl-[3px] flex flex-col gap-[5px]">
      <label className="text-subtitle font-bold text-[#1F2937]" htmlFor={rest.id}>
        {label}
      </label>
      <input
        className="border-none  px-[4px] bg-transparent placeholder:text-[#6B7280]  outline-none  text-black w-full text-[16px] h-[16px] "
        {...rest}
      />
    </div>
  );
}
