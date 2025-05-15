"use client";

import Tag from "@/components/shared/Tag";
import { AGE_GROUP_TAGS } from "@/utils/constant";
import React from "react";
import useProfileEditForm from "../_hooks/useProfileEdit";

const ProfileEditAgeGroup = () => {
  const {
    profileEditForm: { ageGroup },
    handleChange,
  } = useProfileEditForm();
  return (
    <div className="pl-[3px] flex flex-col gap-[5px]">
      <label className="text-subtitle font-bold text-[#1F2937]" htmlFor={"ageGroup"}>
        나이
      </label>
      <div className="flex  px-[28px] flex-wrap gap-[15px]">
        {AGE_GROUP_TAGS.map((tag) => (
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
    </div>
  );
};

export default ProfileEditAgeGroup;
