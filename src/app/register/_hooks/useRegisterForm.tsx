"use client";

import { axiosInstance, handleApiResponse } from "@/api";
import { signupStore } from "@/store/signupStore";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useRegisterEmailForm() {
  const {
    email,
    password,
    passwordCheck,
    gender,
    name,
    preferredTags,
    ageGroup,
    handleChange: handleStateChange,
    reset,
  } = signupStore();
  const router = useRouter();

  const registerEmailMutation = useMutation({
    mutationFn: async (formData: any) => {
      const response = await axiosInstance.post("/api/users/signup", formData);
      return handleApiResponse(response) as any;
    },
    onSuccess: (data: any) => {
      router.replace("/login");
    },
    onError: (error: any) => {
      console.error(error);
      alert("회원가입에 실패하였습니다.");
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
    handleStateChange({ type: e.target.name, value: e.target.value });
  };

  const handleChange = ({ type, value }: { type: string; value: any }) => {
    console.log(type, value);
    handleStateChange({ type: type, value: value });
  };

  const submitForm = (type: string, e: React.FormEvent) => {
    e.preventDefault();
    switch (type) {
      case "email": {
        if (email === "") {
          alert("이메일을 입력해야 합니다.");
          return;
        }
        router.push("/register/password");
        break;
      }
      case "password": {
        if (password === "") {
          alert("비밀번호를 입력해야 합니다.");
          return;
        }
        if (passwordCheck !== password) {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
        router.push("/register/name");
        break;
      }
      case "name": {
        if (name === "") {
          alert("이름을 입력해야 합니다.");
          return;
        }
        router.push("/register/info");
        break;
      }
      case "info": {
        if (ageGroup === "") {
          alert("연령대를 선택해야 합니다.");
          return;
        }
        if (gender === "") {
          alert("성별을 선택해야 합니다.");
          return;
        }

        router.push("/register/category");
        break;
      }
      case "category": {
        console.log({
          email,
          name,
          gender,
          password,
          passwordCheck,
          ageGroup,
          preferredTags,
        });
        registerEmailMutation.mutateAsync({
          email,
          name,
          gender,
          password,
          passwordCheck,
          ageGroup,
          preferredTags,
        });
        reset();
        router.push("/");
        break;
      }
    }
  };

  return {
    registerForm: {
      email,
      name,
      gender,
      password,
      passwordCheck,
      ageGroup,
      preferredTags,
    },
    handleInputChange,
    handleChange,
    submitForm,
  };
}
