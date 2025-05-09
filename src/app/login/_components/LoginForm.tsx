"use client";
import Input from "@/app/components/shared/Input";
import React, { useState } from "react";
import useLoginForm from "../_hooks/useLoginForm";
import Button from "@/app/components/shared/Button";

export default function LoginForm() {
  const {
    loginForm: { email, password },
    handleChange,
    submitForm,
  } = useLoginForm();
  return (
    <form onSubmit={submitForm}>
      <Input
        name="email"
        type="email"
        id="email"
        value={email}
        onChange={handleChange}
        placeholder="이메일"
      />
      <div className="h-[18px]" />
      <Input
        name="password"
        id="password"
        value={password}
        onChange={handleChange}
        placeholder="비밀번호"
      />
      <div className="h-[25px]" />
      <Button type="submit" text="로그인" />
    </form>
  );
}
