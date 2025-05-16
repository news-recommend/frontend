"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const useSearch = () => {
  const params = useParams();
  const initKeyword = decodeURIComponent(params?.keyword as string) ?? "";
  const [keyword, setKeyword] = useState(initKeyword);

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
