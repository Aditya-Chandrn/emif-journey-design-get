import Image from "next/image";

const WelcomeSection = () => (
  <div className="flex flex-row items-center justify-between mt-8 mb-6">
    <div>
      <div className="text-[var(--Color-Grey-600)] text-lg">Welcome to,</div>
      <div className="text-[var(--Color-Grey-900)] text-2xl font-bold">
        Super App
      </div>
    </div>
    <div className="ml-4">
      <div className="rounded-xl bg-[#F8F3F7] w-[90px] h-[90px] flex items-center justify-center overflow-hidden">
        <Image src="/man.svg" alt="User" width={70} height={70} />
      </div>
    </div>
  </div>
);

export default WelcomeSection;
