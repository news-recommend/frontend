import React from "react";

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
    w-[100svw] 
    relative 
    h-full 
    bg-[#f8f8f8]
    overscroll-none 
    [scrollbar-width:none] 
    [&::-webkit-scrollbar]:hidden
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:rounded-[1rem]
    [&::-webkit-scrollbar-thumb]:h-20
    [&::-webkit-scrollbar-thumb]:bg-[#d9d9d9]
    [&::-webkit-scrollbar-button]:w-0
    [&::-webkit-scrollbar-button]:h-0
    xs:w-[414px] xs:overflow-x-hidden
    
  "
    >
      {children}
    </div>
  );
}
