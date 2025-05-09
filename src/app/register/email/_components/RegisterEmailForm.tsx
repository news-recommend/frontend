"use client";
import Input from "@/app/components/shared/Input";
import React, { useState } from "react";
import Button from "@/app/components/shared/Button";
import useRegisterEmailForm from "../../_hooks/useRegisterForm";

export default function RegisterEmailForm() {
  const {
    registerForm: { email },
    handleInputChange,
    submitForm,
  } = useRegisterEmailForm();
  return (
    <form onSubmit={(e) => submitForm("email", e)}>
      <Input
        name="email"
        id="email"
        type="email"
        value={email}
        onChange={handleInputChange}
        placeholder="이메일"
      />

      <div className="h-[48px]" />
      <Button type="submit" text="다음" />
    </form>
  );
}
