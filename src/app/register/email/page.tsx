import ProgressOneIcon from "../_components/icons/ProgressOneIcon";
import RegisterEmailForm from "./_components/RegisterEmailForm";

export default function RegisterEmailPage() {
  return (
    <section className="mt-[22px] px-[24px]">
      <div className="flex items-center justify-center h-[44px] mb-[17px]">
        <ProgressOneIcon />
      </div>
      <h2 className="text-titlecolor text-title mb-[15px] ml-[6px] ">
        이메일을 입력해주세요.
      </h2>
      <RegisterEmailForm />
    </section>
  );
}
