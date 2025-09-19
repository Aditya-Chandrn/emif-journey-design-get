import Image from "next/image";

const Logo = () => (
  <div className="relative w-[58.58px] h-[38px]">
    <Image
      src="/HDFC_logo.svg"
      alt="HDFC Logo"
      fill
      style={{ objectFit: "contain" }}
    />
  </div>
);

export default Logo;
