"use client";
import { create } from "zustand";

interface ISignupStore {
  email: string;
  password: string;
  passwordCheck: string;
  name: string;
  gender: string;
  ageGroup: string;
  preferredTags: string[];
  reset: () => void;
  handleChange: ({
    type,
    value,
  }: {
    type: string;
    value: string | string[];
  }) => void;
}

// userId와 accessToken을 전역 상태로 관리하는 역할
export const signupStore = create<ISignupStore>((set) => ({
  email: "",
  password: "",
  passwordCheck: "",
  name: "",
  gender: "",
  ageGroup: "",
  handleChange: ({ type, value }) => {
    set({ [type]: value });
  },
  reset: () => {
    set({
      email: "",
      password: "",
      passwordCheck: "",
      name: "",
      gender: "",
      ageGroup: "",
      preferredTags: [],
    });
  },
  preferredTags: [],
}));
