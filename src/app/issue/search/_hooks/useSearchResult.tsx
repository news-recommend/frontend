"use client";

import { axiosInstance, handleApiResponse } from "@/api";
import { ICategoryIssueList, Issue } from "@/model/issue";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const useSearchResult = (keyword: string, sort: string) => {
  const { data, isLoading, error, fetchNextPage, refetch, isFetching, hasNextPage } = useInfiniteQuery<
    ICategoryIssueList,
    Object,
    InfiniteData<ICategoryIssueList>,
    [_1: string, _2: string, _3: string]
  >({
    queryKey: ["searchResult", keyword, sort],
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(
        `/api/issue/search?keyword=${keyword}&sort=${sort}&page=${pageParam}&size=10`
      );
      return handleApiResponse(response) as any;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage?.pagination?.hasNext || lastPage?.pagination?.currentPage + 1 === lastPage?.pagination?.totalPages) {
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
