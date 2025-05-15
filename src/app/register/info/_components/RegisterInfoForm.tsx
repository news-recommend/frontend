"use client";
import Input from "@/components/shared/Input";
import React, { useState } from "react";
import Button from "@/components/shared/Button";
import useRegisterEmailForm from "../../_hooks/useRegisterForm";
import Tag from "@/components/shared/Tag";

const AGE_GROUP_TAGS = ["10대", "20대", "30대", "40대", "50대", "60대 이상"];

export default function RegisterInfoForm() {
  const {
    registerForm: { ageGroup },
    handleInputChange,
    submitForm,
    handleChange,
  } = useRegisterEmailForm();
  return (
    <form onSubmit={(e) => submitForm("info", e)}>
      <label htmlFor="gender" className="text-titlecolor text-title mb-[17px] inline-flex ml-[29px] ">
        성별을 알려주세요.
      </label>
      <div className="flex items-center  gap-[87px] pl-[68px] text-[#1F2937] font-[400] ">
        <div>
          <input type="radio" onChange={handleInputChange} id="gender-female" name="gender" value="여성" />
          <label className="inline-flex text-subtitle pt-2 " htmlFor="gender-female">
            여성
          </label>
        </div>
        <div>
          <input type="radio" onChange={handleInputChange} id="gender-male" name="gender" value="남성" />
          <label className="inline-flex h-[36px] text-subtitle pt-2 " htmlFor="gender-male">
            남성
          </label>
        </div>
      </div>
      <label htmlFor="gender" className="text-titlecolor text-title mt-[31px] mb-[27px] inline-flex ml-[29px] ">
        나이를 알려주세요.
      </label>
      <div className="grid mb-[16px] grid-cols-[repeat(3,max-content)] place-content-center grid-cols justify-center gap-[15px]">
        {AGE_GROUP_TAGS.slice(0, 3).map((tag) => (
          <Tag
            text={tag}
            key={tag}
            onClick={() =>
              handleChange({
                type: "ageGroup",
                value: tag,
              })
            }
            isActive={Boolean(ageGroup === tag)}
          />
        ))}
      </div>
      <div className="grid grid-cols-[repeat(3,max-content)] place-content-center grid-cols justify-center gap-[15px]">
        {AGE_GROUP_TAGS.slice(3, 6).map((tag) => (
          <Tag
            text={tag}
            key={tag}
            onClick={() =>
              handleChange({
                type: "ageGroup",
                value: tag,
              })
            }
            isActive={Boolean(tag === ageGroup)}
          />
        ))}
      </div>
      <div className="h-[48px]" />
      <Button type="submit" text="다음" />
    </form>
  );
}
