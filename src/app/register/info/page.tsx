import ProgressFourIcon from "../_components/icons/ProgressFourIcon";
import ProgressThreeIcon from "../_components/icons/ProgressThreeIcon";
import RegisterInfoForm from "./_components/RegisterInfoForm";
import RegisterEmailForm from "./_components/RegisterInfoForm";

export default function RegisterInfoPage() {
  return (
    <section className="mt-[22px] px-[24px]">
      <div className="flex items-center justify-center h-[44px] mb-[17px]">
        <ProgressFourIcon />
      </div>
      <RegisterInfoForm />
    </section>
  );
}
