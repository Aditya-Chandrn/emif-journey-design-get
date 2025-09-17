import Image from "next/image";

const Logo = () => (
  <div className="flex flex-col items-start gap-1">
    <div className="relative w-[120px] h-[38px]">
      <Image
        src="/HDFC_logo.svg"
        alt="HDFC Logo"
        fill
        style={{ objectFit: "contain" }}
      />
    </div>
  </div>
);

export default Logo;
