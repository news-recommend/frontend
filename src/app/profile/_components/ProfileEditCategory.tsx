"use client";
import Tag from "@/components/shared/Tag";
import { PREFERRED_TAGS } from "@/utils/constant";
import React from "react";
import useProfileEditForm from "../_hooks/useProfileEdit";

const ProfileEditCategory = () => {
  const { handleChange, preferredTags } = useProfileEditForm();
  return (
    <div className="pl-[3px] flex flex-col gap-[5px]">
      <label
        className="text-subtitle font-bold text-[#1F2937]"
        htmlFor={"preferredTags"}
      >
        카테고리
      </label>
      <div className="flex pl-[29px]  grid-cols-4 flex-wrap  gap-[14px] w-full">
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
    </div>
  );
};

export default ProfileEditCategory;
