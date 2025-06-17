"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { authStore } from "@/store/authStore";
import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from "@tanstack/react-query";

export const useIssue = (name: string) => {
  const { accessToken } = authStore();
  const { data, isLoading, error } = useQuery({
    queryKey: ["issueDetailList", name],
    queryFn: async () => {
      const response = await axiosInstance.get(
        `/api/issues/detail?name=${name}`,
        {
          ...(accessToken && { headers: getJWTHeader(accessToken) }),
        }
      );
      return handleApiResponse(response) as any;
    },
  });
  return {
    data,
    isLoading,
    error,
  };
};
