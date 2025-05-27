"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const useSearch = () => {
  const params = useParams();
  const initKeyword = decodeURIComponent((params?.keyword as string) ?? "") ?? "";
  const [keyword, setKeyword] = useState(initKeyword);

  const router = useRouter();
  const [debouncedValue, setDebouncedValue] = useState<string>(keyword);
  const searchParams = useSearchParams();
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, 750);
    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newSearchParams = new URLSearchParams(searchParams?.toString());

    newSearchParams.set("keyword", debouncedValue);
    router.push(`/issue/search/${debouncedValue}?${newSearchParams}`);
  };

  return {
    keyword,
    setKeyword,
    debouncedValue,
    onSubmit,
  };
};

export default useSearch;
