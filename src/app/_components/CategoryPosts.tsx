"use client";

import { useSearchParams } from "next/navigation";
import CategoryCard from "./CategoryCard";
import { useInView } from "react-intersection-observer";
import useInfiniteScroll from "../_hooks/useInfiniteScroll";
import { useCategoryList } from "../_hooks/useCategoryList";
import React from "react";

const CategoryPosts = () => {
  const searchParams = useSearchParams();
  const category = searchParams?.get("category") ?? "정치";
  const [ref, inView] = useInView();
  const { isFetching, hasNextPage, fetchNextPage, data, isLoading } =
    useCategoryList(category);
  useInfiniteScroll(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, !isFetching, fetchNextPage, hasNextPage]);

  if (isFetching) {
    return <></>;
  }
  return (
    <section className="px-[24px] mb-[100px]">
      <h3 className="text-title text-titlecolor mt-[35px] mb-[25px]">
        카테고리별 이슈
      </h3>
      <div className="flex flex-col w-full gap-[24px]">
        {!isLoading &&
          data &&
          data.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.data.map((issue, itemIndex) => (
                <CategoryCard key={issue.issueId} {...issue} />
              ))}
            </React.Fragment>
          ))}
        <div ref={ref} style={{ height: 130 }} />
      </div>
    </section>
  );
};

export default CategoryPosts;
