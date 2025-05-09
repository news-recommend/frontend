"use client";

import { useState } from "react";

export default function useLoginForm() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginForm.email === "") {
      alert("이메일을 입력해야 합니다.");
      return;
    }
    if (loginForm.password) {
      alert("이메일을 입력해야 합니다.");
      return;
    }

    console.log(`email: ${loginForm.email}\t password: ${loginForm.password}`);
  };

  return {
    loginForm,
    handleChange,
    submitForm,
  };
}
