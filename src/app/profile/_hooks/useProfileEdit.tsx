"use client";

import { axiosInstance, getJWTHeader, handleApiResponse } from "@/api";
import { Profile } from "@/model/user";
import { authStore } from "@/store/authStore";
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
  const [profileEditForm, setProfileEditForm] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    ageGroup: "",
    preferredTags: [] as string[],
  });
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
        ageGroup: data?.agegroup ?? "",
        preferredTags: data?.preferredTags ?? [],
      });
    }
  }, [isSuccess, isLoading]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileEditForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = ({ type, value }: { type: string; value: any }) => {
    setProfileEditForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const submitForm = () => {
    if (profileEditForm.email === "") {
      alert("이메일을 입력해야 합니다.");
      return;
    }

    if (profileEditForm.password === "") {
      alert("비밀번호를 입력해야 합니다.");
      return;
    }

    if (profileEditForm.name === "") {
      alert("이름을 입력해야 합니다.");
      return;
    }

    if (profileEditForm.ageGroup === "") {
      alert("연령대를 선택해야 합니다.");
      return;
    }
    if (profileEditForm.gender === "") {
      alert("성별을 선택해야 합니다.");
      return;
    }

    console.log(`submitData: ${profileEditForm}`);
    profileEditMutation.mutateAsync(profileEditForm);

    console.log(`email: ${profileEditForm.email}\t password: ${profileEditForm.password}`);
  };

  return {
    profileEditForm,
    handleInputChange,
    handleChange,
    submitForm,
  };
}
