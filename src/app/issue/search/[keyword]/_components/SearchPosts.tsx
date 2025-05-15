"use client";
import CategoryCard from "@/app/_components/CategoryCard";
import React from "react";

const SearchPosts = () => {
  return (
    <div className="flex flex-col mt-[36px] w-full gap-[24px] mb-[100px]">
      {Array(10)
        .fill("")
        .map((item, idx) => (
          <CategoryCard key={idx} />
        ))}
    </div>
  );
};

export default SearchPosts;
