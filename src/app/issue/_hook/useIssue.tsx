"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { ICategoryIssueList, IIssueDetailList, Issue } from "@/model/issue";
import { authStore } from "@/store/authStore";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const useIssue = (issueId: string) => {
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
    IIssueDetailList,
    Object,
    InfiniteData<IIssueDetailList>,
    [_1: string, _2: string]
  >({
    queryKey: ["issueDetailList", issueId],
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(
        `/api/issues/news/analyze?issueId=${issueId}&page=${pageParam}&size=10`,
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
