"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { ICategoryIssueList, Issue } from "@/model/issue";
import { authStore } from "@/store/authStore";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const useSearchResult = (keyword: string, sort: string) => {
  const { accessToken } = authStore();
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    refetch,
    isFetching,
    hasNextPage,
  } = useInfiniteQuery<
    ICategoryIssueList,
    Object,
    InfiniteData<ICategoryIssueList>,
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["searchResult", keyword, sort],
    enabled: !!keyword && keyword !== "undefined" && !!accessToken,

    queryFn: async ({ pageParam }) => {
      console.log("🔍 검색 요청 fired", { keyword, sort, pageParam });

      const url = `/api/issue/search/${keyword}?sort=${sort}&page=${pageParam}&size=10`;
      console.log("📡 요청 URL:", url);

      const response = await axiosInstance.get(
        `/api/issues/search/${keyword}?sort=${sort}&page=${pageParam}&size=10`,
        { ...(accessToken && { headers: getJWTHeader(accessToken) }) }
      );
      return handleApiResponse(response) as any;
    },

    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (
        !lastPage?.pagination?.hasNext ||
        lastPage?.pagination?.currentPage + 1 ===
          lastPage?.pagination?.totalPages
      ) {
        return undefined;
      } else {
        return lastPage?.pagination?.currentPage + 1;
      }
    },
  });
  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    refetch,
    isFetching,
    hasNextPage,
  };
};
