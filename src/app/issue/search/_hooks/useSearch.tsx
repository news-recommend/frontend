"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const useSearch = () => {
  const params = useParams();
  const initKeyword =
    decodeURIComponent((params?.keyword as string) ?? "") ?? "";
  const [keyword, setKeyword] = useState(initKeyword);

  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("keyword", keyword);
    if (!keyword) {
      console.log("Empty keyword, skipping");
      return;
    }

    const newSearchParams = new URLSearchParams(searchParams?.toString());
    newSearchParams.set("keyword", keyword);
    router.push(`/issue/search/${keyword}?${newSearchParams}`);
  };

  return {
    keyword,
    setKeyword,

    onSubmit,
  };
};

export default useSearch;
