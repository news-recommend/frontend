"use client";

type TagProps = {
  text: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Tag({ text, onClick, isActive }: TagProps) {
  return (
    <button
      type="button"
      className={`leading-[18px] text-title font-normal w-fit p-[9px] rounded-[10px] border-2 border-[#D9D9D9] ${
        isActive ? "text-[#f2f2f2] bg-main" : ""
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
