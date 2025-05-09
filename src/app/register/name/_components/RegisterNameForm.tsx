"use client";
import Input from "@/app/components/shared/Input";
import React, { useState } from "react";
import Button from "@/app/components/shared/Button";
import useRegisterEmailForm from "../../_hooks/useRegisterForm";

export default function RegisterNameForm() {
  const {
    registerForm: { name },
    handleInputChange,
    submitForm,
  } = useRegisterEmailForm();
  return (
    <form onSubmit={(e) => submitForm("name", e)}>
      <Input
        name="name"
        id="name"
        type="name"
        value={name}
        onChange={handleInputChange}
        placeholder="이름"
      />

      <div className="h-[48px]" />
      <Button type="submit" text="다음" />
    </form>
  );
}
