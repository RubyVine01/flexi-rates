import AgreementCheckbox from "@/components/AgreementCheckbox";
import CustomButton from "@/components/Button/CustomButton";
import RateCard from "@/components/RateCard";
import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {


 
  return (
    <div className="w-full flex items-center flex-col gap-7">
      <header className="flex justify-center py-3">
        <Timer />
      </header>
      <main className="flex items-center flex-col ">
        <h1
          className="font-rubik text-40px leading-44px
font-bold uppercase text-mainText"
        >
          Выберите подходящий тарифный план
        </h1>
        <div
          className="flex justify-center
pt-24"
        >
          <Image
            src="/images/dreamBody.png"
            alt="Dream body"
            width={434}
            height={715}
            priority
          />
          <div className="flex flex-col w-5/12">
          <div className="flex justify-between w-full
">    <RateCard />
          <RateCard />
          <RateCard /></div>
         
            <p className="text-lg font-ptRootUI font-medium leading-6 text-mainText">
              Следуя плану на 3 месяца, люди получают в 2 раза лучший результат,
              чем за 1 месяц
            </p>
            <form>
              <AgreementCheckbox />
              <CustomButton onClick={() => console.log("Clicked")}>
                Купить
              </CustomButton>

              <p className="font-ptRootUI  text-sm leading-4 text-secondaryText">
                Нажимая «Купить», Пользователь соглашается на автоматическое
                списание денежных средств по истечению купленного периода.
                Дальнейшие списания по тарифам участвующим в акции
                осуществляются по полной стоимости согласно оферте.
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
