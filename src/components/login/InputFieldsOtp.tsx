const InputFieldsOtp = () => (
  <div className="flex flex-col gap-4 mt-6">
    <div className="flex flex-col gap-1">
      <label className="font-medium text-[var(--colors-text-text-secondary-700)] text-sm">
        Email id / Mobile no.
      </label>
      <input
        type="text"
        placeholder="24390745"
        className="w-full h-12 px-4 border border-[#C9D3E9] rounded-lg shadow-sm text-base focus:outline-none"
      />
    </div>
    <div className="flex flex-col gap-1 relative">
      <label className="font-medium text-[var(--colors-text-text-secondary-700)] text-sm mb-2">
        Enter OTP
      </label>
      <div className="flex justify-center gap-3 mt-1">
        {[...Array(4)].map((_, i) => (
          <input
            key={i}
            type="text"
            placeholder="-"
            inputMode="numeric"
            maxLength={1}
            className="w-12 h-12 text-center border border-[#C9D3E9] rounded-lg shadow-sm text-base focus:outline-none"
          />
        ))}
      </div>
    </div>
  </div>
);

export default InputFieldsOtp;
