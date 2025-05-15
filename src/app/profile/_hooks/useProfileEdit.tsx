"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useProfileEditForm() {
  const [profileEditForm, setProfileEditForm] = useState({
    email: "",
    password: "",
    name: "",
    gender: "",
    ageGroup: "",
    preferredTags: [],
  });
  const router = useRouter();

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
    router.push("/");

    console.log(`email: ${profileEditForm.email}\t password: ${profileEditForm.password}`);
  };

  return {
    profileEditForm,
    handleInputChange,
    handleChange,
    submitForm,
  };
}
