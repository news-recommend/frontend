"use client";
import CategoryCard from "@/app/_components/CategoryCard";
import { useSearchParams } from "next/navigation";
import React from "react";
import { useSearchResult } from "../../_hooks/useSearchResult";
import { useInView } from "react-intersection-observer";
import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";

const SearchPosts = () => {
  const searchParams = useSearchParams();
  console.log("123");
  const keyword =
    decodeURIComponent((searchParams.get("keyword") as string) ?? "") ?? "";
  const sort =
    decodeURIComponent((searchParams.get("sort") as string) ?? "latest") ??
    "latest";
  const [ref, inView] = useInView();
  const { isFetching, hasNextPage, fetchNextPage, data, isLoading } =
    useSearchResult(keyword, sort);
  useInfiniteScroll(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, !isFetching, fetchNextPage, hasNextPage]);

  if (isFetching) {
    return <></>;
  }
  return (
    <div className="flex flex-col mt-[36px] w-full gap-[24px] mb-[100px]">
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
  );
};

export default SearchPosts;
