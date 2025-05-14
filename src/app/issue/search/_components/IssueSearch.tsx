"use client";

import SearchInput from "@/components/shared/SearchInput";
import useSearch from "../_hooks/useSearch";

const IssueSearch = () => {
  const { keyword, setKeyword, debouncedValue } = useSearch();
  console.log("value", keyword, debouncedValue);
  return (
    <>
      <SearchInput
        placeholder="이슈 키워드 입력"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </>
  );
};

export default IssueSearch;
