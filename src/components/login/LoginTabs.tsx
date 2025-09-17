type LoginTabsProps = {
  selected: "password" | "otp";
  onSelect: (val: "password" | "otp") => void;
};

const LoginTabs = ({ selected, onSelect }: LoginTabsProps) => (
  <div className="w-full mt-2 mb-6">
    <span className="block mb-2 text-[var(--Color-Grey-600)]">Login with</span>
    <div className="flex w-full">
      <button
        className={`flex-1 py-2 border ${
          selected === "password"
            ? "border-[var(--Color-Base-Brand-Red)] text-[var(--Color-Base-Brand-Red)]"
            : "border-[#E5E7EB] text-[#0C111D]"
        } rounded-l-lg font-semibold bg-white text-base`}
        onClick={() => onSelect("password")}
      >
        Password
      </button>
      <button
        className={`flex-1 py-2 border ${
          selected === "otp"
            ? "border-[var(--Color-Base-Brand-Red)] text-[var(--Color-Base-Brand-Red)]"
            : "border-[#E5E7EB] text-[#0C111D]"
        } rounded-r-lg font-semibold bg-white text-base`}
        onClick={() => onSelect("otp")}
      >
        OTP
      </button>
    </div>
  </div>
);

export default LoginTabs;
