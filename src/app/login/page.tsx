import Link from "next/link";
import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <section className=" pt-[83px] px-[24px] flex flex-col justify-center">
      <h2 className="text-titlecolor text-title mb-[15px] ml-[6px] ">
        이메일과 비밀번호를 입력해주세요.
      </h2>
      <LoginForm />
      <div className="w-full text-center mt-[19px] text-body text-[#6b7280] ">
        계정이 없으신가요?
        <Link
          className="text-body text-[#6b7280] font-[700] ml-2"
          href={"/register/email"}
        >
          회원가입
        </Link>
      </div>
    </section>
  );
}
