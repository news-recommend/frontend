"use client";
import React from "react";
import DetailCard from "./DetailCard";

const DetailPosts = () => {
  return (
    <section className="px-[22px]  pb-[100px] inline-block">
      {Array(10)
        .fill("")
        .map((item, idx) => (
          <DetailCard key={idx} />
        ))}
    </section>
  );
};

export default DetailPosts;
