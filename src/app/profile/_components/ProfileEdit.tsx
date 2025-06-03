"use client";
import React from "react";
import ProfileEditInput from "./ProfileEditInput";
import ProfileEditGender from "./ProfileEditGender";
import ProfileEditAgeGroup from "./ProfileEditAgeGroup";
import ProfileEditCategory from "./ProfileEditCategory";
import Button from "@/components/shared/Button";
import useProfileEditForm from "../_hooks/useProfileEdit";

const ProfileEdit = () => {
  const { submitForm, email, handleInputChange, password, name } =
    useProfileEditForm();
  return (
    <div>
      <section className="px-[18px] mx-[24px] mt-[22px] py-[18px] border border-[#D9D9D9] bg-white rounded-[11px] ">
        <ProfileEditInput
          name="email"
          value={email}
          onChange={handleInputChange}
          id="email"
          label="이메일"
          placeholder="이메일"
        />
        <Bar />
        <ProfileEditInput
          name="password"
          value={password}
          onChange={handleInputChange}
          id="password"
          label="비밀번호"
          placeholder="비밀번호"
          type="password"
        />
        <Bar />
        <ProfileEditInput
          name="name"
          value={name}
          onChange={handleInputChange}
          id="name"
          label="이름"
          placeholder="이름"
        />
        <Bar />
        <ProfileEditGender />
        <Bar />
        <ProfileEditAgeGroup />
        <Bar />
        <ProfileEditCategory />
      </section>
      <div className="px-[24px] mt-[48px] mb-[132px]">
        <Button onClick={submitForm} text="수정하기" />
      </div>
    </div>
  );
};

const Bar = () => {
  return <div className="w-full h-[1px] my-[16px] bg-[#D9D9D9]" />;
};
export default ProfileEdit;
