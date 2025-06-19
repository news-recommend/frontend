"use client";
import React from "react";
import DetailCard from "./DetailCard";
import { useParams, useSearchParams } from "next/navigation";
import { useIssue } from "../../_hook/useIssue";
import { IssueDetail, News } from "@/model/issue";
import { ClockLoader } from "react-spinners";

const DetailPosts = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get("name") ?? "";
  const { data, isLoading } = useIssue(name);

  if (isLoading) {
    return (
      <>
        <ClockLoader color={"#A0CCCD"} />
      </>
    );
  }
  return (
    <section className="px-[22px]  pb-[100px] inline-block">
      {!isLoading && data && data.newsList.map((news: News) => <DetailCard key={news.title} {...news} />)}
    </section>
  );
};

export default DetailPosts;
