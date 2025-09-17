import Image from "next/image";

const Logo = () => (
  <div className="flex flex-col items-start gap-1">
    <div className="relative w-[120px] h-[38px]">
      <Image
        src="/HDFC_logo.svg"
        alt="HDFC Logo"
        layout="fill"
        objectFit="contain"
      />
    </div>
  </div>
);

const WelcomeSection = () => (
  <div className="flex flex-row items-center justify-between mt-8 mb-6">
    <div>
      <div className="text-[#717684] text-lg font-poppins">Welcome to,</div>
      <div className="text-[#1C2633] text-2xl font-bold font-poppins">
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

const LoginTabs = () => (
  <div className="w-full mt-2 mb-6">
    <span className="block mb-2 text-[#717684] font-poppins">Login with</span>
    <div className="flex w-full">
      <button className="flex-1 py-2 border border-[#ED1C24] rounded-l-lg text-[#ED1C24] font-semibold bg-white text-base">
        Password
      </button>
      <button className="flex-1 py-2 border border-[#E5E7EB] rounded-r-lg text-[#0C111D] font-semibold bg-white text-base">
        OTP
      </button>
    </div>
  </div>
);

const InputFields = () => (
  <div className="flex flex-col gap-4 w-full mt-6">
    <div className="flex flex-col gap-1">
      <label className="font-medium text-[#4B5563] text-base">
        Agent code / Email id / Mobile no. / License no.
      </label>
      <input
        type="text"
        placeholder="24390745"
        className="w-full h-12 px-4 border border-[#C9D3E9] rounded-lg shadow-sm text-base focus:outline-none"
      />
    </div>
    <div className="flex flex-col gap-1 relative">
      <label className="font-medium text-[#4B5563] text-base">Password</label>
      <input
        type="password"
        placeholder="XXXXXXXXX"
        className="w-full h-12 px-4 border border-[#C9D3E9] rounded-lg shadow-sm text-base focus:outline-none pr-10"
      />
      <span className="absolute right-4 top-9 text-[#B0B0B0] cursor-pointer">
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#B0B0B0"
            strokeWidth="2"
            d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12Z"
          />
          <circle cx="12" cy="12" r="3" stroke="#B0B0B0" strokeWidth="2" />
        </svg>
      </span>
    </div>
  </div>
);

const ForgotPassword = () => (
  <div className="flex justify-between items-center mt-2 mb-6">
    <a href="#" className="text-[#ED1C24] text-sm font-medium font-poppins">
      Forgot Password ?
    </a>
    <button className="bg-[#ED1C24] text-white rounded-lg px-10 py-2 text-base font-semibold font-poppins shadow">
      Login
    </button>
  </div>
);

const Divider = () => (
  <div className="flex items-center gap-4 w-full my-6">
    <div className="flex-grow border-t border-[#D2D5DA]"></div>
    <span className="text-[#1C2633] font-normal text-base">Or</span>
    <div className="flex-grow border-t border-[#D2D5DA]"></div>
  </div>
);

const AlternativeLoginButtons = () => (
  <div className="flex flex-row gap-4 w-full mt-2">
    <button className="flex-1 flex items-center justify-center border border-[#ED1C24] rounded-lg px-2 py-2 text-[#ED1C24] font-semibold text-base gap-2 bg-white">
      <Image src="/FacebookLogo.svg" alt="Facebook" width={20} height={20} />
      Facebook
    </button>
    <button className="flex-1 flex items-center justify-center border border-[#ED1C24] rounded-lg px-2 py-2 text-[#ED1C24] font-semibold text-base gap-2 bg-white">
      <Image src="/GoogleLogo.svg" alt="Google" width={20} height={20} />
      Google
    </button>
  </div>
);

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 py-8">
      <div className="w-full max-w-[390px] border border-[#E5E7EB] rounded-2xl shadow-lg bg-white p-6">
        <Logo />
        <WelcomeSection />
        <LoginTabs />
        <InputFields />
        <ForgotPassword />
        <Divider />
        <AlternativeLoginButtons />
      </div>
    </div>
  );
};

export default Login;
