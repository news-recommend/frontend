"use client";
import React from "react";
import DetailCard from "./DetailCard";
import { useParams } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useIssue } from "../../_hook/useIssue";
import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";

const DetailPosts = () => {
  const params = useParams();
  const issueId = (params?.issueId as string) ?? "";
  const [ref, inView] = useInView();
  const { isFetching, hasNextPage, fetchNextPage, data, isLoading } =
    useIssue(issueId);
  useInfiniteScroll(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, !isFetching, fetchNextPage, hasNextPage]);

  if (isFetching) {
    return <></>;
  }
  return (
    <section className="px-[22px]  pb-[100px] inline-block">
      {!isLoading &&
        data &&
        data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.newsList.map((news, itemIndex) => (
              <DetailCard key={news.title} {...news} />
            ))}
          </React.Fragment>
        ))}
      <div ref={ref} style={{ height: 130 }} />
    </section>
  );
};

export default DetailPosts;
