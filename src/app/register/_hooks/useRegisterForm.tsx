"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function useRegisterEmailForm() {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    name: "",
    gender: "",
    ageGroup: "",
    preferredTags: [],
  });
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleChange = ({ type, value }: { type: string; value: any }) => {
    setRegisterForm((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const submitForm = (type: string, e: React.FormEvent) => {
    e.preventDefault();
    switch (type) {
      case "email": {
        if (registerForm.email === "") {
          alert("이메일을 입력해야 합니다.");
          return;
        }
        router.push("/register/password");
        break;
      }
      case "password": {
        if (registerForm.password === "") {
          alert("비밀번호를 입력해야 합니다.");
          return;
        }
        if (registerForm.passwordConfirm !== registerForm.password) {
          alert("비밀번호가 일치하지 않습니다.");
          return;
        }
        router.push("/register/name");
      }
      case "name": {
        if (registerForm.name === "") {
          alert("이름을 입력해야 합니다.");
          return;
        }
        router.push("/register/info");
        break;
      }
      case "info": {
        if (registerForm.ageGroup === "") {
          alert("연령대를 선택해야 합니다.");
          return;
        }
        if (registerForm.gender === "") {
          alert("성별을 선택해야 합니다.");
          return;
        }

        router.push("/register/category");
        break;
      }
      case "name": {
        console.log(`submitData: ${registerForm}`);
        router.push("/");
        break;
      }
    }

    console.log(
      `email: ${registerForm.email}\t password: ${registerForm.password}`
    );
  };

  return {
    registerForm,
    handleInputChange,
    handleChange,
    submitForm,
  };
}
