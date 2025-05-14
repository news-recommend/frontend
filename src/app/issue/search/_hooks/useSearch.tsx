"use client";

import { useEffect, useState } from "react";

const useSearch = () => {
  const [keyword, setKeyword] = useState("");

  const [debouncedValue, setDebouncedValue] = useState<string>(keyword);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, 750);
    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  return {
    keyword,
    setKeyword,
    debouncedValue,
  };
};

export default useSearch;
