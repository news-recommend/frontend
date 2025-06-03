"use client";
import { create } from "zustand";

interface IProfileEditStore {
  email: string;
  password: string;

  name: string;
  gender: string;
  ageGroup: string;
  preferredTags: string[];
  reset: () => void;
  setProfileEditForm: ({
    email,
    password,
    name,
    gender,
    ageGroup,
    preferredTags,
  }: {
    email: string;
    password: string;
    name: string;
    gender: string;
    ageGroup: string;
    preferredTags: string[];
  }) => void;
  handleChange: ({
    type,
    value,
  }: {
    type: string;
    value: string | string[];
  }) => void;
}

// userId와 accessToken을 전역 상태로 관리하는 역할
export const profileEditStore = create<IProfileEditStore>((set) => ({
  email: "",
  password: "",
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

      name: "",
      gender: "",
      ageGroup: "",
      preferredTags: [],
    });
  },
  setProfileEditForm: ({
    email,
    password,
    name,
    gender,
    ageGroup,
    preferredTags,
  }) => {
    set({
      email,
      password,

      name,
      gender,
      ageGroup,
      preferredTags,
    });
  },
  preferredTags: [],
}));
