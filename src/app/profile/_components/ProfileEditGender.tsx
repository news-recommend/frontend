"use client";
import React from "react";
import useProfileEditForm from "../_hooks/useProfileEdit";

const ProfileEditGender = () => {
  const { handleInputChange } = useProfileEditForm();
  return (
    <div className="pl-[3px] flex flex-col gap-[5px]">
      <label className="text-subtitle font-bold text-[#1F2937]" htmlFor={"gender"}>
        성별
      </label>
      <div className="flex items-center gap-[87px] w-full justify-center text-[#1F2937] font-[400] ">
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
    </div>
  );
};

export default ProfileEditGender;
