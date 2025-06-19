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
      <div className="pt-16 flex justify-center ">
        <ClockLoader color={"#A0CCCD"} />
      </div>
    );
  }

  if (!isLoading && data?.newsList?.length === 0) {
    return (
      <div className="flex flex-col  justify-center  text-center px-4 bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">뉴스 목록이 없습니다</h2>
      </div>
    );
  }
  return (
    <section className="px-[22px]  pb-[100px] inline-block">
      {!isLoading && data && data.newsList.map((news: News) => <DetailCard key={news.title} {...news} />)}
    </section>
  );
};

export default DetailPosts;
