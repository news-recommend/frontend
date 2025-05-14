"use client";

import CategoryCard from "./CategoryCard";

const CategoryPosts = () => {
  return (
    <section className="px-[24px] mb-[100px]">
      <h3 className="text-title text-titlecolor mt-[35px] mb-[25px]">
        카테고리별 이슈
      </h3>
      <div className="flex flex-col w-full gap-[24px]">
        {Array(10)
          .fill("")
          .map((item, idx) => (
            <CategoryCard key={idx} />
          ))}
      </div>
    </section>
  );
};

export default CategoryPosts;
