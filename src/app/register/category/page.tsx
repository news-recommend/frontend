import ProgressFiveIcon from "../_components/icons/ProgressFiveIcon";
import RegisterCategoryForm from "./_components/RegisterCategoryForm";

export default function RegisterCategoryPage() {
  return (
    <section className="mt-[22px] px-[24px]">
      <div className="flex items-center justify-center h-[44px] mb-[17px]">
        <ProgressFiveIcon />
      </div>
      <RegisterCategoryForm />
    </section>
  );
}
