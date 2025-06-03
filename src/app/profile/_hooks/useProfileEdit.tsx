"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { Profile } from "@/model/user";
import { authStore } from "@/store/authStore";
import { profileEditStore } from "@/store/profileEditStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useProfileEditForm() {
  const { accessToken } = authStore();
  const { data, isLoading, error, isSuccess } = useQuery<Profile>({
    queryKey: ["profile"],
    enabled: !!accessToken,
    queryFn: async ({ pageParam }) => {
      const response = await axiosInstance.get(`/api/users/profile`, {
        ...(accessToken && { headers: getJWTHeader(accessToken) }),
      });
      return handleApiResponse(response) as any;
    },
  });
  const {
    email,
    password,
    setProfileEditForm,
    gender,
    name,
    preferredTags,
    ageGroup,
    handleChange: handleStateChange,
    reset,
  } = profileEditStore();
  const queryClient = useQueryClient();
  const profileEditMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await axiosInstance.put("/api/users/profile", formData, {
        ...(accessToken && { headers: getJWTHeader(accessToken) }),
      });
      return handleApiResponse(response) as any;
    },
    onSuccess: (data: any) => {
      queryClient.refetchQueries({
        queryKey: ["profile"],
      });
    },
    onError: (error: any) => {
      console.error(error);
      alert("회원 정보 변경에 실패하였습니다.");
    },
  });

  const router = useRouter();

  useEffect(() => {
    if (isSuccess && !isLoading) {
      setProfileEditForm({
        email: data?.email ?? "",
        password: "",
        name: data?.name ?? "",
        gender: data?.gender ?? "",
        ageGroup: data?.ageGroup ?? "",
        preferredTags: data?.interestCategory?.split(",") ?? [],
      });
    }
  }, [isSuccess, isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    handleStateChange({ type: e.target.name, value: e.target.value });
  };

  const handleChange = ({ type, value }: { type: string; value: any }) => {
    console.log(type, value);
    handleStateChange({ type: type, value: value });
  };

  const submitForm = () => {
    if (email === "") {
      alert("이메일을 입력해야 합니다.");
      return;
    }

    if (name === "") {
      alert("이름을 입력해야 합니다.");
      return;
    }

    if (ageGroup === "") {
      alert("연령대를 선택해야 합니다.");
      return;
    }
    if (gender === "") {
      alert("성별을 선택해야 합니다.");
      return;
    }

    profileEditMutation.mutateAsync({
      email,
      newPassword: password,

      gender,
      name,
      preferredTags,
      ageGroup,
    });

    console.log(`email: ${email}\t password: ${password}`);
  };

  return {
    email,
    password,

    gender,
    name,
    preferredTags,
    ageGroup,
    handleInputChange,
    handleChange,
    submitForm,
  };
}
