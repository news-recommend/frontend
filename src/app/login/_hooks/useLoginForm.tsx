"use client";

import { axiosInstance, handleApiResponse } from "@/api";
import { authStore } from "@/store/authStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useLoginForm() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const {
    setLoginData,
    clearLoginData,
    accessToken,
    resetData,
    setIsGuestUser,
  } = authStore();
  const router = useRouter();
  const loginEmailMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await axiosInstance.post("/api/users/login", formData);
      console.log(response, "response");
      return handleApiResponse(response) as any;
    },
    onSuccess: (data: any) => {
      console.log(data, "data");
      setLoginData({
        userId: 1,
        accessToken: data.accessToken,
      });
      router.replace("/");
    },
    onError: (error: any) => {
      console.error(error);
      alert("로그인에 실패하였습니다.");
    },
  });

  const refreshTokenMutation = useMutation({
    mutationFn: async () => {
      const response = await axiosInstance.get("/api/auth/validate", {});
      return handleApiResponse(response) as any;
    },
    onSuccess: (data) => {
      console.log(data, "data");
      setLoginData({
        userId: data.userId,
        accessToken: data.accessToken,
      });
    },
    mutationKey: ["refresh"],
    onError: (error: any) => {
      setIsGuestUser(true);
      console.error(error);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(loginForm);
    if (loginForm.email === "") {
      alert("이메일을 입력해야 합니다.");
      return;
    }
    if (loginForm.password === "") {
      alert("비밀번호를 입력해야 합니다.");
      return;
    }

    console.log(`email: ${loginForm.email}\t password: ${loginForm.password}`);
    loginEmailMutation.mutateAsync(loginForm);
  };

  return {
    loginForm,
    handleChange,
    submitForm,
    refreshTokenMutation,
  };
}
