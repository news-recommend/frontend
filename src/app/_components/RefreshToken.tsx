"use client";
import { authStore } from "@/store/authStore";
import React, { useEffect } from "react";
import useLoginForm from "../login/_hooks/useLoginForm";

const RefreshToken = () => {
  const { accessToken, logoutCheck } = authStore();
  const { refreshTokenMutation } = useLoginForm();

  useEffect(() => {
    // 컴포넌트가 렌더링될 때마다 토큰 갱신 시도(새로고침시 토큰 사라지는 문제해결 위해)
    if (!accessToken && !logoutCheck) {
      // 토큰이 없으면 리프레쉬 토큰 api 요청.
      const refreshAccessToken = async () => {
        refreshTokenMutation.mutateAsync();
      };

      // refreshAccessToken();
    }
  }, [accessToken]);
  return null;
};

export default RefreshToken;
