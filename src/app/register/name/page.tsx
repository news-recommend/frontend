import ProgressThreeIcon from "../_components/icons/ProgressThreeIcon";
import RegisterEmailForm from "./_components/RegisterNameForm";

export default function RegisterNamePage() {
  return (
    <section className="mt-[22px] px-[24px]">
      <div className="flex items-center justify-center h-[44px] mb-[17px]">
        <ProgressThreeIcon />
      </div>
      <h2 className="text-titlecolor text-title mb-[15px] ml-[6px] ">
        이름을 입력해주세요.
      </h2>
      <RegisterEmailForm />
    </section>
  );
}
