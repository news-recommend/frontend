"use client";
import Input from "@/components/shared/Input";
import React, { useState } from "react";
import Button from "@/components/shared/Button";
import useRegisterEmailForm from "../../_hooks/useRegisterForm";

export default function RegisterPasswordForm() {
  const {
    registerForm: { password, passwordConfirm },
    handleInputChange,
    submitForm,
  } = useRegisterEmailForm();
  return (
    <form onSubmit={(e) => submitForm("password", e)}>
      <Input
        name="password"
        id="password"
        type="password"
        value={password}
        onChange={handleInputChange}
        placeholder="숫자, 영문포함 8자 이상"
      />
      <div className="h-[17px]" />
      <Input
        name="passwordConfirm"
        id="passwordConfirm"
        type="password"
        value={passwordConfirm}
        onChange={handleInputChange}
        placeholder="비밀번호 재입력"
      />

      <div className="h-[48px]" />
      <Button type="submit" text="다음" />
    </form>
  );
}
