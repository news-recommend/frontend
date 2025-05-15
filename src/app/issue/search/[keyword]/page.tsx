import React from "react";
import IssueSearch from "../_components/IssueSearch";
import Select from "@/components/Select";
import SearchPosts from "./_components/SearchPosts";

const SearchKeywordPage = () => {
  return (
    <div className="pt-[27px] px-[24px]">
      <IssueSearch />
      <div className="h-[2px] w-full bg-[#57869F] mt-[47px] mb-[17px] " />
      <div className="flex justify-end items-center">
        <Select />
      </div>
      <SearchPosts />
    </div>
  );
};

export default SearchKeywordPage;
