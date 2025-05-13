"use client";

import React, { useState } from "react";
import Button from "@/components/shared/Button";
import useRegisterEmailForm from "../../_hooks/useRegisterForm";
import Tag from "@/components/shared/Tag";

const PREFERRED_TAGS = [
  "정치",
  "경제",
  "사회",
  "사건/사고",
  "IT/과학",
  "자동차",
  "국제",
  "교육",
  "문화",
  "여행/레저",
  "연예",
  "환경",
  "부동산",
  "스포츠",
  "생활/건강",
];

export default function RegisterCategoryForm() {
  const {
    registerForm: { preferredTags },

    submitForm,
    handleChange,
  } = useRegisterEmailForm();
  return (
    <form onSubmit={(e) => submitForm("category", e)}>
      <label htmlFor="category" className="text-titlecolor text-title mb-[12px] inline-flex ml-[29px] ">
        관심있는 카테고리를 알려주세요.
      </label>

      <div className="flex pl-[40px]  grid-cols-4 flex-wrap  gap-[14px] w-full">
        {PREFERRED_TAGS.map((tag) => (
          <Tag
            text={tag}
            key={tag}
            onClick={() =>
              handleChange({
                type: "preferredTags",
                value: Boolean(preferredTags.find((item) => item === tag))
                  ? preferredTags.filter((item) => item !== tag)
                  : [...preferredTags, tag],
              })
            }
            isActive={Boolean(preferredTags.find((item) => item === tag))}
          />
        ))}
      </div>

      <div className="h-[48px]" />
      <Button type="submit" text="다음" />
    </form>
  );
}
