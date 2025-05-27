"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { authStore } from "@/store/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useBookmark() {
  const queryClient = useQueryClient();
  const { setLoginData, clearLoginData, accessToken, userId } = authStore();
  const addBookmarkMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await axiosInstance.post("/api/bookmarks", formData, {
        ...(accessToken && { headers: getJWTHeader(accessToken) }),
      });
      return handleApiResponse(response) as any;
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({
        queryKey: [""],
      });
    },
    onError: (error: any) => {
      console.error(error);
      alert("북마크 추가에 실패하였습니다.");
    },
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await axiosInstance.delete(`/api/bookmarks?userId=${userId}&issueId=${formData.issueId}`, {
        ...(accessToken && { headers: getJWTHeader(accessToken) }),
      });
      return handleApiResponse(response) as any;
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({
        queryKey: [""],
      });
    },
    onError: (error: any) => {
      console.error(error);
      alert("북마크 삭제에 실패하였습니다.");
    },
  });

  return {
    addBookmarkMutation,
    removeBookmarkMutation,
  };
}
