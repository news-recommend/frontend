"use client";

import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const useSearch = () => {
  const [keyword, setKeyword] = useState("");

  const [debouncedValue, setDebouncedValue] = useState<string>(keyword);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(keyword);
    }, 750);
    return () => {
      clearTimeout(handler);
    };
  }, [keyword]);

  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`${pathname}/${debouncedValue}`);
  };

  return {
    keyword,
    setKeyword,
    debouncedValue,
    submitSearch,
  };
};

export default useSearch;
