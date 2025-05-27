"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const useSearch = () => {
  const [keyword, setKeyword] = useState("");
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
