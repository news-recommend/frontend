"use client";
import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { authStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const HomeHeader = () => {
  const { accessToken, resetData } = authStore();
  const router = useRouter();
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.post(
        "/api/users/logout",
        {},
        {
          ...(accessToken && { headers: getJWTHeader(accessToken) }),
        }
      );
      return handleApiResponse(response) as any;
    },
    onSuccess: (data: any) => {
      resetData();
      router.replace("/login");
    },
    onError: (error: any) => {
      console.error(error);
      alert("로그아웃에 실패하였습니다.");
    },
  });
  return (
    <header className="flex justify-end p-[24px]">
      {accessToken ? (
        <button
          onClick={() => {
            logoutMutation.mutateAsync();
          }}
          className="inline-block bg-white border border-[#D9d9d9] rounded-[32px] h-[22px] w-[70px] text-center leading-[22px] text-tooltip font-normal "
        >
          로그아웃
        </button>
      ) : (
        <Link
          href="/login"
          className="inline-block bg-white border border-[#D9d9d9] rounded-[32px] h-[22px] w-[70px] text-center leading-[22px] text-tooltip font-normal "
        >
          로그인
        </Link>
      )}
    </header>
  );
};

export default HomeHeader;
