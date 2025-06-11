"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { BookmarkedIssue } from "@/model/issue";
import { authStore } from "@/store/authStore";
import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

export const useBookmarkedList = () => {
  const { accessToken } = authStore();
  const { data, isLoading, error, isFetching } = useQuery<BookmarkedIssue[]>({
    queryKey: ["bookmarkedList"],
    enabled: !!accessToken,
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(`/api/bookmarks`, {
        ...(accessToken && { headers: getJWTHeader(accessToken) }),
      });
      return handleApiResponse(response) as any;
    },
  });
  return {
    data,
    isLoading,
    error,
    isFetching,
  };
};
