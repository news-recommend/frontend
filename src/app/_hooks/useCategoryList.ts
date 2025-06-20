"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { ICategoryIssueList, Issue } from "@/model/issue";
import { authStore } from "@/store/authStore";
import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";

export const useCategoryList = (category: string) => {
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
    [_1: string, _2: string]
  >({
    queryKey: ["categoryList", category],
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(
        `/api/issues/category?category=${category}&page=${pageParam}&size=10`,
        {
          ...(accessToken && { headers: getJWTHeader(accessToken) }),
        }
      );
      return handleApiResponse(response) as any;
    },
    initialPageParam: 1,
    enabled: !!accessToken,
    getNextPageParam: (lastPage) => {
      console.log("lastPage", lastPage);
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
