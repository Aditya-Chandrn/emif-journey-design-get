import Image from "next/image";

const WelcomeSection = () => (
  <div className="flex flex-row gap-6">
    <div className="w-[228px] pt-[30px] pb-[18px] gap-1">
      <div className="text-[var(--Color-Grey-600)] font-normal text-md">
        Welcome to,
      </div>
      <div className="text-[var(--Color-Grey-900)] text-lg font-semibold">
        Super App
      </div>
    </div>
    <div className="ml-4">
      <div className="bg-center w-[101px] h-[104px] flex items-center justify-center overflow-hidden relative">
        <div className="bg-[var(--Color-Brand-Red-100)] absolute left-0 right-0 top-[14px] bottom-0 w-[95px] h-[90px] mx-auto rounded-xl z-0" />
        <div className="relative z-10">
          <Image src="/man.svg" alt="User" width={98} height={102} />
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeSection;
