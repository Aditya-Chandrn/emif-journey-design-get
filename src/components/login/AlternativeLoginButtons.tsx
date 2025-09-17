import Image from "next/image";

const AlternativeLoginButtons = () => (
  <div className="flex flex-row gap-4 w-full mt-2">
    <button className="flex-1 flex items-center justify-center border border-[var(--Color-Base-Brand-Red)] rounded-lg px-2 py-2 text-[var(--Color-Base-Brand-Red)] font-semibold text-base gap-2 bg-white">
      <Image src="/FacebookLogo.svg" alt="Facebook" width={20} height={20} />
      Facebook
    </button>
    <button className="flex-1 flex items-center justify-center border border-[var(--Color-Base-Brand-Red)] rounded-lg px-2 py-2 text-[var(--Color-Base-Brand-Red)] font-semibold text-base gap-2 bg-white">
      <Image src="/GoogleLogo.svg" alt="Google" width={20} height={20} />
      Google
    </button>
  </div>
);

export default AlternativeLoginButtons;
