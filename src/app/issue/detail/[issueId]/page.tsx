import React from "react";
import Select from "@/components/Select";
import DetailHeader from "../_components/DetailHeader";
import EmotionChart from "../_components/EmotionChart";
import DetailPosts from "../_components/DetailPosts";

const SearchKeywordPage = () => {
  return (
    <div>
      <DetailHeader />
      <div className="pt-[26px] px-[24px]">
        <EmotionChart />
        <div className="h-[2px] w-full bg-[#57869F] mt-[42px] mb-[22px] " />
        <DetailPosts />
      </div>
    </div>
  );
};

export default SearchKeywordPage;
