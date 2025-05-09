import ProgressOneIcon from "../_components/icons/ProgressOneIcon";
import RegisterPasswordForm from "./_components/RegisterPasswordForm";

export default function RegisterPasswordPage() {
  return (
    <section className="mt-[22px] px-[24px]">
      <div className="flex items-center justify-center h-[44px] mb-[17px]">
        <ProgressOneIcon />
      </div>
      <h2 className="text-titlecolor text-title mb-[15px] ml-[6px] ">
        비밀번호를 입력해주세요.
      </h2>
      <RegisterPasswordForm />
    </section>
  );
}
